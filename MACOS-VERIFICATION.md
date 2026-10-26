# Mac beta verification

Package: `Cadence-0.5.0-mac-arm64-beta-r5.dmg`.
Target: Apple Silicon (M1 or newer), macOS 14+.
Built and tested October 26, 2026. The final resource update was re-signed,
its exact DMG mounted read-only, and the app copied from that image into a
disposable installation before verification. Deep, strict ad-hoc signature
verification passed. It is not Developer ID signed or notarized.

## Automated checks that passed

- 92 shared tests using the included Python and Mac video tools.
- Native storage helper and packaged backend startup.
- Agent connection, project creation and import into a named bin.
- Save and reopen an edit.
- MP4 export and decoding: two seconds, 48 frames, 24 fps, 320 x 180.
- Whisper transcription using bundled weights with network calls blocked.
- Actual Tauri/WKWebView interface loading and video playback with no JavaScript
  errors recorded, using synthetic test footage.
- Native shutdown, persisted autosave and cleanup of the owned backend.

The installed final DMG passed all 17 recorded workflow checks, including exact
512-pixel icon identity and native connection-button dismissal/restoration. This does not establish every recipient-machine installation path.

## Beta feedback still needed

Physical audio listening, interaction with native file dialogs, full-song
performance, upgrades on an existing recipient workspace and first-download
Gatekeeper confirmation have not been verified on a recipient's Mac. The export
used a short synthetic clip; the transcription fixture was speech, not a full
sung track. Word accuracy and speed for music will vary.

This app is ad-hoc signed for Apple Silicon executable integrity; it is not
Apple Developer ID signed or notarized. See [Mac setup](SETUP-MAC.md) for the
expected first-launch confirmation.

## Package identity

SHA-256:
`854ae3a8e792d5497d20e0d1e0554c3a2537abae1e88f83686ea682c0864a14b`.
Exact size: `1813087816` bytes. See [Mac manifest](releases/macos-arm64.json)
and [all package checksums](SHA256SUMS).
