# Cadence 0.6.1 Beta — projects appear without restarting

Your agent's projects now show up while Cadence stays open.

- If you're starting with an empty workspace, the first project opens automatically.
- If you're already editing, the project list updates and an Open project notice appears. Your current edit stays put.
- View videos can open footage in another project and take you straight to its bin.
- Cadence saves the current edit before switching. If saving fails, it keeps the current project open so you can retry.
- The connected empty screen explains what to ask your agent to do next. A project form you're filling in stays open.

## Download

- Windows 10+ x64: **Cadence-Setup-0.6.1.exe**.
- Apple Silicon Mac (M1 or newer), macOS 14+: **Cadence-0.6.1-mac-arm64-beta.dmg**.

Both downloads include the editor, video tools and local lyrics engine/model.
You will most likely get a security warning on both Windows and Mac because
Cadence does not have a verified publisher. If you trust me and want to try it,
use the matching file from this release and follow the repository's setup page.

## Updating

Save and close Cadence. Run the new Windows installer, or drag the Mac app into
Applications and replace the previous app. Your workspace is kept separately.
Keep your original footage. Automatic updates are not included.

The 0.6.0 and 0.5.0 releases remain available. `SHA256SUMS-0.6.1.txt` identifies
these downloads. The codec-source ZIPs are supporting sources, not the app.

This remains a beta. Recipient security prompts, physical audio, full-song
performance and sung-word accuracy still need feedback.

## Verification

Ten Windows native checks cover the actual connected-agent workflow, including nine bins, edit restoration, failed-save retry, cross-project footage and in-progress forms. The exact Mac disk image passed 23 workflow checks, including 92 regressions, live project discovery, native video playback, export and offline lyrics.

## Package identity

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| `Cadence-Setup-0.6.1.exe` | 1852277932 | `1653e8f3a749a39ba3f8d089de317802bd0938705e485cacd2a56d700fbb9f4f` |
| `Cadence-0.6.1-codec-sources.zip` | 133539240 | `346a0237419c9d488b36f3b274a34e466eb9238adea5dd34c3082bd4ca0b339a` |
| `Cadence-0.6.1-mac-arm64-beta.dmg` | 1823105724 | `db4dac271fecfee6ffab5e04b9267bd0cf4ea2557c96e5f4b1295b4bf6d8860b` |
| `Cadence-0.6.1-mac-codec-sources.zip` | 12818579 | `96eeb235313ba70a927d22402d832221822d45b1b16cc9a800642af4f92e0195` |
