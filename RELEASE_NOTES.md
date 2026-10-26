# Cadence 0.5.0 — Windows early access and Mac beta

**[Downloads and checksums](https://github.com/FTPAiYT/cadence/releases/tag/v0.5.0).** This repository is the setup handoff for both platforms.

## Mac beta

### October 26: Mac r5 icon and agent connection

The same first-run agent connection button, dismissal and centered cross are now
included on Mac. The application/Dock icon uses the approved high-resolution
Cadence logo. The exact re-signed disk image was mounted read-only and installed
into disposable storage before its 17 recorded Mac workflow checks passed.


For M1 or newer Macs running macOS 14+. Download
`Cadence-0.5.0-mac-arm64-beta-r5.dmg`, drag Cadence into Applications and open it.
The editor, video tools, Whisper and its model are included. No Python or
Homebrew setup is needed. This beta is not Developer ID signed or notarized;
see [Mac setup](SETUP-MAC.md) for Apple's first-launch confirmation.

The exact downloaded DMG passed the automated Mac workflow, including native
playback, export, offline lyrics, agent import and safe saving/shutdown.
[Verification and remaining beta feedback items](MACOS-VERIFICATION.md).
Package identity: [Mac manifest](releases/macos-arm64.json).

Intel Macs and macOS versions below 14 are not supported by this package.

## Windows early access

### October 26: Windows r8 icon and agent connection

- Uses the approved Cadence logo in the app/taskbar and installer, with a full-resolution native icon instead of upscaling a small frame. Start-menu and desktop shortcuts explicitly reference the included Cadence.ico file, avoiding the old cached placeholder.
- Shows a clear first-run **Connect your agent** button at the top, with a subtle glow and centered dismiss control.
- Dismissal is remembered. **Cadence → Connect your agent** remains available and restores the prompt when needed.
- Enabling access or copying instructions keeps the button visible. A successful authenticated connection hides it, including after restart.
- Keeps the r6 workspace safeguard. Existing project files are preserved.
- Native onboarding, connection/save/reopen, header layout and high-resolution icon checks passed using disposable data.


### October 26: Windows r6 workspace fix

- Detects redirected AppData writes before starting the workspace, backend or WebView.
- Hands off through Explorer and waits for confirmation; failed or recursive handoff stops safely.
- Retains both older and packaged recovery-profile layouts during explicit migration.
- Refuses silent merges, overwrites and discarded custom-workspace/command-line settings.
- Existing package-cache projects are not moved automatically. See [safe launch and recovery](WINDOWS-WORKSPACE-RECOVERY.md).
- Native launch/save/reopen and exact-package migration checks passed with disposable data.
  Redirected-path checks used simulation plus real Explorer handoff; a fresh actual
  Claude-MSIX launch was not reproduced in this verification session.
- The Mac package and video/lyrics dependencies are unchanged.


## Included behavior

- Dedicated desktop window and a bundled local editing engine.
- Review and Editor share projects, bins and saved moments.
- Agent connection with saved generation/download workflow, named-bin imports,
  repeatable operation receipts and reads of saved review choices.
- Whisper and large-v3-turbo included for local CPU lyrics generation.
- Per-user Windows installation, shortcuts and removal of installed software.
- Customer workspace and original media kept separately from application files.
- Personal-project references and developer build paths removed from the package.

## September 29 corrections

- Restricted local file-serving routes and foreign-browser access.
- Corrected MP3 encoder-delay timing in exports and preserved song resampling phase.
- Completed a full 147.333-second local playback/export review; physical listening is not claimed.

## Package identity

| Field | Released package |
| --- | --- |
| File | `Cadence-Setup-0.5.0-release-r8.exe` |
| Bytes | `1852271328` |
| SHA-256 | `4e04029f16fbc6a893e5018db26e7ce8a7953cece415c5671ced53e364e2f0fa` |
| Installed payload bytes | `2607613528` |
| Publisher signature | Unsigned |
| Platform | Windows x64 |

## Current limits

The package and agent flow have local development evidence. The complete
installer has not been established to work across other people's computers;
early-access recipients report setup issues. A small isolated installer payload
covered installation/uninstallation behavior; it is not evidence that the entire
full package went through every installation path. WebView2 installation when
missing, physical audio, every media format and full-song lyric accuracy are not
promised here.

No automatic updates, GPU lyrics acceleration, perfect transcription,
or generation-service credits are included in this release claim.

## Included notices

Matching video-component sources/notices and the free-use application terms are included. See [THIRD_PARTY.md](THIRD_PARTY.md). This early-access installer is unsigned.
