# Mac beta verification

Package: `Cadence-0.6.1-mac-arm64-beta.dmg`. Apple Silicon (M1+), macOS 14+.
Built and tested October 27, 2026, in private workflow 40499280058.
The final 0.6.1 DMG was signed, mounted read-only and installed into disposable
storage before 23 workflow checks passed. These include 92 shared
regressions, native project discovery with Open/return, new project form,
playback, decoded MP4 export, offline Whisper inference, save and clean shutdown.

The video/Python/model dependencies are retained from the verified 0.6 package.
Only the reviewed interface and versioned native wrapper were rebuilt.
It is ad-hoc signed, not Apple Developer ID signed or notarized.

Physical audio, recipient upgrades/security prompts, native file-dialog
interaction, full-song performance and sung-word accuracy still need feedback.
See [Mac setup](SETUP-MAC.md). These checks do not establish every recipient path.

SHA-256: `db4dac271fecfee6ffab5e04b9267bd0cf4ea2557c96e5f4b1295b4bf6d8860b`.
Size: `1823105724` bytes.
See [manifest](releases/macos-arm64.json) and [checksums](SHA256SUMS).
