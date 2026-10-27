# Mac beta verification

Package: `Cadence-0.6.2-mac-arm64-beta.dmg`. Apple Silicon (M1+), macOS 14+.
Built and tested October 27, 2026, in private workflow 40505679098.
The exact final 0.6.2 DMG was signed, mounted read-only and installed into
disposable storage before 24 workflow checks passed. These include the native
mounted transparent drag-image contract, 92 shared regressions, live project
discovery/Open/return, playback, decoded MP4 export and offline Whisper inference.
The shared drag helper is included and its resource hash matches the reviewed source.

The video/Python/model dependencies are retained from the verified 0.6.1 package.
Only the reviewed interface and versioned native wrapper were rebuilt.
It is ad-hoc signed, not Apple Developer ID signed or notarized.

Physical Mac drag/cursor appearance, audio listening, recipient upgrades/security
prompts, native file dialogs, full-song performance and sung-word accuracy remain
beta feedback boundaries. Synthetic/native contract checks do not establish those.
See [Mac setup](SETUP-MAC.md), [manifest](releases/macos-arm64.json) and [checksums](SHA256SUMS).

SHA-256: `8ae5c4dce105498a1750b3ea1bb0ea16d2f15c0c1ce34ebd962fdad7bc9c0279`.
Size: `1826883959` bytes.
