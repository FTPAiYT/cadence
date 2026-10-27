# Cadence 0.6.2 Beta — clip dragging fixes

- **Windows:** clips and selected in/out ranges can be dragged from the source viewer or bin onto the timeline. The native window no longer intercepts the editor's drops.
- **Windows and Mac:** the large image following the cursor is removed. The timeline still shows where the clip will land.
- The project discovery and agent workflow improvements from 0.6.1 are included.

## Downloads and updating

Choose **Cadence-Setup-0.6.2.exe** for Windows 10+ x64, or
**Cadence-0.6.2-mac-arm64-beta.dmg** for Apple Silicon (M1+), macOS 14+.
Save and close Cadence before updating. Run the Windows installer, or replace
the Mac app in Applications. Your workspace is stored separately. Automatic
updates are not included.

Both downloads include the editor, video tools and local lyrics model. You will
most likely get a security warning on both Windows and Mac because Cadence does
not have a verified publisher. If you trust me and want to try it, use the matching
download from this release. See the platform setup instructions in the repository.

The codec-source ZIPs are supporting sources, not the app. The 0.6.1 and older
releases remain available. Package identity is recorded in SHA256SUMS-0.6.2.txt.

## Verification

The user confirmed a real Windows mouse drag works with the native correction.
An automated Chrome mouse drag preserved the selected in/out range and supplied
a mounted, fully transparent cursor image, with no JavaScript errors. The Windows
release executable is rebuilt with 0.6.2 metadata and the same scoped correction.
Mac verification details are recorded below.
Physical Mac drag appearance and recipient-machine behavior still need beta
feedback; these checks do not establish every hardware or installation path.

The final Mac DMG passed 24 workflow checks, including native transparent cursor-image setup, 92 shared regressions, video playback, live projects, export and offline lyrics.

## Package identity

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| `Cadence-Setup-0.6.2.exe` | 1852277396 | `0f992c767b7738236d51974ef551dfcdc87d5860047d828721b755504b14be9f` |
| `Cadence-0.6.2-codec-sources.zip` | 133539240 | `346a0237419c9d488b36f3b274a34e466eb9238adea5dd34c3082bd4ca0b339a` |
| `Cadence-0.6.2-mac-arm64-beta.dmg` | 1826883959 | `8ae5c4dce105498a1750b3ea1bb0ea16d2f15c0c1ce34ebd962fdad7bc9c0279` |
| `Cadence-0.6.2-mac-codec-sources.zip` | 12818579 | `9f5a5b27feb052da930e2a69adc5deb5278505931c208b68b31abffdf04a4c02` |
