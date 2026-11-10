# Mac beta verification

Package: `Cadence-0.7.1-mac-arm64-beta.dmg`. Apple Silicon (M1+), macOS 14+.
Built and verified November 9, 2026 on an Apple Silicon macOS 15 runner.
The exact final DMG was mounted read-only, copied into disposable storage and
its ad-hoc signature verified before 25 workflow checks passed.

Checks include shared regressions, native WKWebView video playback, live project
discovery and switching, agent import into a named bin, save/reopen, decoded MP4
export, offline Whisper inference and backend cleanup after native close.
The native wrapper is rebuilt at 0.7.1 and the current product resources are included.
The model and dependency versions are unchanged from 0.6.2. Obsolete CI build-path
metadata was normalized and the affected binaries re-signed.

The app is ad-hoc signed, not Apple Developer ID signed or notarized.
macOS 14 execution, physical listening, native dialogs, recipient upgrades/security
prompts and long-edit performance were not independently verified in this run.

SHA-256: `9f7737ee9f0c2384b73b719c5c0c1bbf5321adf569a3b56581f38029fd0bcac0`.
Size: `1813365100` bytes.
