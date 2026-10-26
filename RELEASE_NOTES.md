# Cadence 0.6 Beta â€” Windows + Mac

Cadence 0.6 makes getting started clearer and fixes several small interface issues.

- Create a project with just a name. Choose a footage folder now or add clips later.
- Clearer project switching, centered menu arrows, and a visible v0.6 BETA badge.
- A prominent Connect your agent button that hides after connection and can be dismissed.
- Correct high-resolution Cadence icons and fixes for clipped dropdown/Settings text.
- Windows retains the safeguard against Claude/MSIX launches creating a separate workspace.

## Download

- **Windows:** `Cadence-Setup-0.6.0.exe` â€” Windows 10 or newer, x64.
- **Mac:** `Cadence-0.6.0-mac-arm64-beta.dmg` â€” M1 or newer, macOS 14 or newer.

Both packages include the editor, video tools, and the local lyrics engine/model.
Intel Macs and Windows ARM are not supported by these downloads.

You will most likely get a security warning on both Windows and Mac. Cadence
does not have a verified publisher. If you trust me and want to try it, download
the matching file from this release. See the repository's Windows or Mac setup
page for the prompts you may see.

## Updating

Save and close Cadence first. On Windows, run the new installer. On Mac, drag
Cadence into Applications and replace the previous app. Your workspace is stored
separately; keep your projects and original footage. Automatic updates are not included.

The 0.5 release remains available. `SHA256SUMS-0.6.0.txt` identifies the files in this
release. The codec-source ZIPs are supporting source materials, not the app.

This is still a beta. If something does not work, tell me your operating system
and what happened. Native security prompts, physical audio, and every recipient's
installation path are not all covered by the automated checks.

## Package identity

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| `Cadence-Setup-0.6.0.exe` | 1852275519 | `83ca758f60e6af0e893416ead9531f741e09dfb67cba41e1ee7025243b00e3c2` |
| `Cadence-0.6.0-codec-sources.zip` | 133539240 | `346a0237419c9d488b36f3b274a34e466eb9238adea5dd34c3082bd4ca0b339a` |
| `Cadence-0.6.0-mac-arm64-beta.dmg` | 1819742912 | `bc3dacdac86ab6485b2d04b0fbf1af9a43368c745b38da6e5932b861679ce786` |
| `Cadence-0.6.0-mac-codec-sources.zip` | 12818579 | `4fcc58be7452e459dda420998c032d1ef71698dc86bc72b38c3675b2ed84489b` |

## Verification

Windows browser checks cover project creation, switching, imports, controls and text fit. The same workflows passed in the 0.6 native app, and its bundled-engine check passed. The Mac package passed 22 recorded checks, including native video playback, export, offline lyrics, the 0.6 badge and new project form. Both platforms retain beta limits for recipient installations and physical audio.
