# Cadence 0.5.0 — Windows early access

**[Windows download available](https://github.com/FTPAiYT/cadence/releases/tag/v0.5.0).** This repository is the setup handoff. No Mac installer is available yet.

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
| File | `Cadence-Setup-0.5.0-release-r5.exe` |
| Bytes | `1851984762` |
| SHA-256 | `7497a7a7cdc2c1668d9a1edba3e2983dd9ec3003710d90c22db6afe8b03658fe` |
| Installed payload bytes | `2607131772` |
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

No automatic updates, Mac package, GPU lyrics acceleration, perfect transcription,
or generation-service credits are included in this release claim.

## Included notices

Matching video-component sources/notices and the free-use application terms are included. See [THIRD_PARTY.md](THIRD_PARTY.md). This early-access installer is unsigned.
