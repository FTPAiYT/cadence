# Cadence 0.5.0 — Windows early-access candidate

**Download publication pending.** This repository is the setup handoff. No Mac
installer or published Windows release is claimed by the documentation alone.

## Included behavior

- Dedicated desktop window and a bundled local editing engine.
- Review and Editor share projects, bins and saved moments.
- Agent connection with saved generation/download workflow, named-bin imports,
  repeatable operation receipts and reads of saved review choices.
- Whisper and large-v3-turbo included for local CPU lyrics generation.
- Per-user Windows installation, shortcuts and removal of installed software.
- Customer workspace and original media kept separately from application files.
- Personal-project references and developer build paths removed from the package.

## Package identity

| Field | Current candidate |
| --- | --- |
| File | `Cadence-Setup-0.5.0-clean.exe` |
| Bytes | `1733604251` |
| SHA-256 | `95d40e1e3d569e45c5693b54c734707374165dc38545a58ae4e103214333ce14` |
| Installed payload bytes | `2560806500` |
| Publisher signature | Unsigned |
| Platform | Windows x64 |

## Current limits

The package and agent flow have local development evidence. The complete
installer has not been established to work across other people's computers;
early-access recipients report setup issues. A small isolated installer payload
covered installation/uninstallation behavior; it is not evidence that the entire
1.73 GB package went through every installation path. WebView2 installation when
missing, physical audio, every media format and full-song lyric accuracy are not
promised here.

No automatic updates, Mac package, GPU lyrics acceleration, perfect transcription,
or generation-service credits are included in this release claim.

## Before attaching the public download

- Complete the exact native-library corresponding-source/build materials and
  associated distribution notices. See [THIRD_PARTY.md](THIRD_PARTY.md).
- Decide Cadence's release terms without changing third-party rights. This draft
  does not grant source-code rights or promise pricing, lifetime updates or a
  subscription.
- Publish the chosen asset, verify its identity, then change the manifest's
  `published` field. If the binary changes, update the hash and size everywhere.

Code signing remains a product decision; this draft explicitly identifies the
unsigned candidate rather than presenting a signature as already obtained.
