# Download a published Cadence release and verify it. Never installs or launches it.
[CmdletBinding()]
param(
    [ValidatePattern('^[A-Za-z0-9][A-Za-z0-9-]*/[A-Za-z0-9][A-Za-z0-9._-]*$')]
    [string]$Repository,
    [string]$Destination,
    [switch]$Download
)
$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$cadenceManifestPath = Join-Path $PSScriptRoot 'releases\windows-x64.json'
$cadenceRelease = Get-Content -Raw -LiteralPath $cadenceManifestPath | ConvertFrom-Json
if ($cadenceRelease.schemaVersion -ne 1 -or $cadenceRelease.product -cne 'Cadence' -or
    $cadenceRelease.platform -cne 'windows-x64' -or
    $cadenceRelease.asset -cnotmatch '^Cadence-Setup-[A-Za-z0-9._-]+\.exe$' -or
    $cadenceRelease.tag -cnotmatch '^v[0-9]+\.[0-9]+\.[0-9]+(?:-[A-Za-z0-9.-]+)?$' -or
    $cadenceRelease.sha256 -cnotmatch '^[a-f0-9]{64}$' -or
    $cadenceRelease.bytes -le 0 -or $cadenceRelease.bytes -ge 2147483648 -or
    $cadenceRelease.published -isnot [bool]) {
    throw 'The Cadence release manifest is invalid. Do not download or run a substitute.'
}

if (-not $Download) {
    [pscustomobject]@{
        Product = $cadenceRelease.product
        Version = $cadenceRelease.version
        Published = $cadenceRelease.published
        Asset = $cadenceRelease.asset
        Bytes = $cadenceRelease.bytes
        SHA256 = $cadenceRelease.sha256
        Signed = $cadenceRelease.signed
        Status = $cadenceRelease.status
    }
    return
}
if (-not $cadenceRelease.published) {
    throw 'No public Cadence download is published in this manifest. Installation is not available yet.'
}
if (-not $Repository -or -not $Destination) {
    throw 'Provide this repository as owner/name and an absolute download destination.'
}
if (-not [Environment]::Is64BitOperatingSystem -or [Environment]::OSVersion.Platform -ne 'Win32NT') {
    throw 'This package requires Windows x64. There is no Mac package in this release.'
}
$cadenceNativeArchitecture = if ($env:PROCESSOR_ARCHITEW6432) { $env:PROCESSOR_ARCHITEW6432 } else { $env:PROCESSOR_ARCHITECTURE }
if ($cadenceNativeArchitecture -ne 'AMD64') {
    throw 'This release targets Windows x64. Windows ARM is not a supported native target.'
}
if (-not [IO.Path]::IsPathRooted($Destination) -or $Destination -notmatch '^[A-Za-z]:[\\/]') {
    throw 'Choose an absolute local Windows destination folder.'
}

$cadenceDestination = [IO.Path]::GetFullPath($Destination)
$cadenceHeaders = @{ 'User-Agent' = 'Cadence-release-downloader'; 'Accept' = 'application/vnd.github+json' }
$cadenceTag = [uri]::EscapeDataString($cadenceRelease.tag)
$cadenceApiUrl = 'https://api.github.com/repos/' + $Repository + '/releases/tags/' + $cadenceTag
$cadenceRemote = Invoke-RestMethod -Uri $cadenceApiUrl -Headers $cadenceHeaders
if ($cadenceRemote.draft -or $cadenceRemote.tag_name -cne $cadenceRelease.tag) {
    throw 'The public release tag does not match the manifest.'
}
$cadenceAssets = @($cadenceRemote.assets | Where-Object { $_.name -ceq $cadenceRelease.asset })
if ($cadenceAssets.Count -ne 1 -or $cadenceAssets[0].size -ne $cadenceRelease.bytes -or $cadenceAssets[0].state -cne 'uploaded') {
    throw 'The expected completed release asset is missing or its size differs. Do not run a substitute.'
}
$cadenceExpectedUrl = 'https://github.com/' + $Repository + '/releases/download/' + $cadenceTag + '/' + [uri]::EscapeDataString($cadenceRelease.asset)
if ($cadenceAssets[0].browser_download_url -cne $cadenceExpectedUrl) {
    throw 'The download URL does not belong to the selected repository and release.'
}

if (-not (Test-Path -LiteralPath $cadenceDestination)) {
    [IO.Directory]::CreateDirectory($cadenceDestination) | Out-Null
}
$cadenceFile = Join-Path $cadenceDestination $cadenceRelease.asset
if (Test-Path -LiteralPath $cadenceFile) {
    $cadenceExisting = Get-Item -LiteralPath $cadenceFile
    if ($cadenceExisting.PSIsContainer -or $cadenceExisting.Length -ne $cadenceRelease.bytes -or
        (Get-FileHash -LiteralPath $cadenceFile -Algorithm SHA256).Hash.ToLowerInvariant() -cne $cadenceRelease.sha256) {
        throw 'A different file already exists at the destination. Choose another folder; nothing was overwritten.'
    }
} else {
    $cadencePartial = $cadenceFile + '.' + [guid]::NewGuid().ToString('N') + '.partial'
    $cadenceOldProgress = $ProgressPreference
    try {
        $ProgressPreference = 'SilentlyContinue'
        Invoke-WebRequest -UseBasicParsing -Uri $cadenceExpectedUrl -OutFile $cadencePartial -Headers @{ 'User-Agent' = 'Cadence-release-downloader' }
        if ((Get-Item -LiteralPath $cadencePartial).Length -ne $cadenceRelease.bytes -or
            (Get-FileHash -LiteralPath $cadencePartial -Algorithm SHA256).Hash.ToLowerInvariant() -cne $cadenceRelease.sha256) {
            throw 'Downloaded bytes do not match the release manifest. Do not execute the partial file.'
        }
        # File.Move refuses an existing destination; another process cannot be overwritten.
        [IO.File]::Move($cadencePartial, $cadenceFile)
    } catch {
        # Preserve an incomplete download for inspection. Never delete existing user files.
        Write-Warning 'The download did not complete successfully. Any .partial file is not an installer to run.'
        throw
    } finally {
        $ProgressPreference = $cadenceOldProgress
    }
}

[pscustomobject]@{
    Path = $cadenceFile
    SHA256 = $cadenceRelease.sha256
    Bytes = $cadenceRelease.bytes
    Signed = $cadenceRelease.signed
    Verified = $true
    Installed = $false
}
