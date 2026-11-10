# Cadence 0.7.1 Beta — effects workflow and editor polish

- Open **Effects** directly beside Playback and Clip. Select a timeline clip to adjust it.
- Clip and Effects use the existing sidebar space and hide the master meter/gain strip. Switching tabs keeps the picture and timeline the same size.
- Faded Broadcast presets, main controls, advanced adjustments and saved looks are available in the Effects panel.
- Ending credits support separate timing and fades. Review and lyrics workflows include the current improvements.
- Dark panel scrollbars, centered undo/redo icons and centered review decision labels match the app.

## Downloads and updating

Use **Cadence-Setup-0.7.1.exe** for Windows 10+ x64, or
**Cadence-0.7.1-mac-arm64-beta.dmg** for Apple Silicon (M1+), macOS 14+.
Save and close Cadence before updating. Run the Windows installer, or replace
Cadence in Applications on Mac. Workspaces are stored separately. Automatic updates
are not included. The [0.6.2 release](https://github.com/FTPAiYT/cadence/releases/tag/v0.6.2)
remains available if you need the previous package. Keep a workspace backup before
trying an older build with newer edits.

Both packages include the editor, video tools, Whisper and its lyrics model.
Windows is unsigned. Mac is ad-hoc signed, without Developer ID signing or
notarization. See the platform setup instructions for first-launch approval.
Cadence is free to use, including for commercial videos; selling Cadence itself
requires permission. Separate third-party rights remain unchanged.

The codec-source ZIPs support the bundled video components; they are not the app.
Dependency versions and model weights are retained from 0.6.2. Mac build-path
metadata was normalized and its affected binaries re-signed. The codec sources
are unchanged, so their hashes match the previous release.

## Verification

Windows: rebuilt 0.7.1 executable and installer, full payload hash/privacy checks,
included runtime/model diagnostics, local agent import into a named bin,
save/reopen, decoded synthetic MP4 export, and Faded Broadcast with credits export.
The packaged UI passed 12 headless checks, including panel geometry at four widths,
playback, effects, undo/redo, save/load looks and cut persistence.

Mac: the exact rebuilt DMG passed 25 workflow checks on an Apple Silicon
macOS 15 runner, including the shared regressions, native WKWebView playback,
agent import, project switching, decoded MP4 export, offline Whisper inference and
clean shutdown. See [Mac verification](MACOS-VERIFICATION.md).

These checks do not establish recipient-machine installation, physical audio
listening, native dialog approval or every long-edit workflow. Those remain beta
feedback boundaries.

## Package identity

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| `Cadence-Setup-0.7.1.exe` | 1852338154 | `2fc8ed3ea98596e30307ff78d4f79b2b91ae07650a07c05f2ebb244878d9b4c7` |
| `Cadence-0.7.1-codec-sources.zip` | 133539240 | `346a0237419c9d488b36f3b274a34e466eb9238adea5dd34c3082bd4ca0b339a` |
| `Cadence-0.7.1-mac-arm64-beta.dmg` | 1813365100 | `9f7737ee9f0c2384b73b719c5c0c1bbf5321adf569a3b56581f38029fd0bcac0` |
| `Cadence-0.7.1-mac-codec-sources.zip` | 12818579 | `9f5a5b27feb052da930e2a69adc5deb5278505931c208b68b31abffdf04a4c02` |
