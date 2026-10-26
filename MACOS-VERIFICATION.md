# Mac beta verification

Package: `Cadence-0.6.0-mac-arm64-beta.dmg`. Apple Silicon (M1 or newer), macOS 14+.
Built and tested October 26, 2026, in private workflow run 40409944635.
The native app was rebuilt as 0.6.0 using the existing verified video/Python/model
payload. The final disk image was re-signed, mounted read-only, and installed
into disposable storage before verification. Deep strict signature checks passed.
It is ad-hoc signed, not Developer ID signed or notarized.

## Passed checks

22 recorded workflow checks, including 92 shared regressions,
native startup and playback, the 0.6 beta badge, unclipped review-mode text,
the simplified New Project form and an empty project without footage.
Agent import, cut saving/reopening, decoded MP4 export, offline Whisper inference,
autosave and clean native shutdown also passed using synthetic fixtures.

## Beta limits

Physical audio, native file-dialog interaction, recipient upgrades/security prompts,
full-song performance and sung-word accuracy still need beta feedback. These checks
do not establish every recipient installation path. See [Mac setup](SETUP-MAC.md).

## Package identity

SHA-256: `bc3dacdac86ab6485b2d04b0fbf1af9a43368c745b38da6e5932b861679ce786`.
Size: `1819742912` bytes.
See [Mac manifest](releases/macos-arm64.json) and [checksums](SHA256SUMS).
