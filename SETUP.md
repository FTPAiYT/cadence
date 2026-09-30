# Install Cadence for Windows

[Download Cadence 0.5.0 for Windows](https://github.com/FTPAiYT/cadence/releases/download/v0.5.0/Cadence-Setup-0.5.0-release-r5.exe).
The exact package identity is recorded in [releases/windows-x64.json](releases/windows-x64.json).

## Requirements and download

- Windows 10 or newer, x64. No Mac package is available yet.
- Approximately 1.85 GB download and 2.61 GB installed. Keep additional room for
  both during setup and for your own media, previews and exports.
- Internet is needed for the initial download and, if absent, Microsoft WebView2.
  The Whisper engine and speech model are already included.
- An agent needs local filesystem/process access to help with setup/import.

Obtain the `.exe` from this repository's Releases tab. Do not use the automatically
generated source ZIP; that contains the setup documents and landing page, not the app. The manifest specifies
the exact tag, asset, size, SHA-256 and signature status. Do not substitute a file
from another repository when a release asset is missing.

An agent can use the reviewed [Get-Cadence.ps1](Get-Cadence.ps1) script to download
and hash-check a published release. Pass the actual owner/name of this repository:

```powershell
.\Get-Cadence.ps1 -Repository 'FTPAiYT/cadence' -Destination 'C:\Chosen\Download folder' -Download
```

Replace the destination with your chosen download folder.
The script never runs the installer, creates a project or changes security settings.
Without `-Download` it only reads the local manifest and reports release status.
If script execution is restricted, inspect it and use its equivalent download/hash
steps through permitted tools; do not change execution policy just to run it.

The installer is **unsigned**. Windows may identify an unknown publisher or show
SmartScreen. Explain this accurately, verify the source/hash, and let the user
decide whether to approve. A checksum is not a signing certificate.

## Install and open

Run the verified installer. Default location:

```text
%LOCALAPPDATA%\Programs\Cadence
```

Setup is per-user. It creates a Start menu shortcut and offers a desktop shortcut.
If WebView2 is already installed it is reused; otherwise Microsoft's included
bootstrapper installs it. Python, video tools and Whisper remain private to Cadence.

For an agent whose user has already authorized installation, quiet setup is
available with `/S`. Invoke the chosen verified path as a process argument, wait
for completion and check its exit code. A nonzero exit means investigate before
claiming installation succeeded. Do not override the install location casually.
Setup does not launch Cadence. Open the installed shortcut after completion.

## Connect

1. In Cadence, open **File → Connect your agent**.
2. Choose **Enable and copy instructions**.
3. Paste into the local agent. Keep Cadence open while it works.

The copied instructions contain the guide and connection-file locations for that
installation, not the connection token. The agent reads them locally and invokes
the included helper. See [AGENT_CONNECTION.md](AGENT_CONNECTION.md).

## Updating, removing, and backups

Save work and close Cadence before running a newer installer. Setup refuses to
force-close it. Automatic updates are not included. After an interrupted install,
rerun the same verified installer before opening the app.

Uninstall through Windows Installed apps. It removes the installed application
and keeps the separate customer workspace:

```text
%LOCALAPPDATA%\Cadence\workspace
```

Original footage stays at its existing paths. Back up the workspace and original
media together. Reinstalling is not a reset and should not erase existing projects.

Older portable copies require explicit migration before retirement. The installed
`BUNDLED_ENGINE.md` describes the preview-first `--migrate-data-from` workflow.
Do not guess an old path or use `--apply` before inspecting the migration preview.
