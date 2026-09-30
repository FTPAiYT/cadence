# Video-component source materials

The current Windows package includes
`CODEC-SOURCES/Cadence-0.5.0-codec-sources.zip` in the installed application folder.
Its SHA-256 is `346a0237419c9d488b36f3b274a34e466eb9238adea5dd34c3082bd4ca0b339a`.
No extra download or compilation is required to use Cadence.

The archive contains exact FFmpeg 8.1.2, PyAV 18.0.0, dav1d 1.5.3 and pinned x264
sources, plus matching GCC/MinGW runtime sources, licenses, rebuild scripts,
configuration, tool versions, loader changes and binary/source hashes. Its README
explains how to rebuild and replace the LGPL libraries. The two supporting build
scripts and loader addition have MIT permission; Cadence's application code has
its own separate terms.

Both editor and lyrics runtimes use LGPL-only shared FFmpeg libraries. H.264
encoding happens in a separate FFmpeg/x264 executable through standard media
files/pipes. The GPL encoder retains its GPL rights and source availability.
These materials replace the earlier incomplete Gyan/PyAV binary collection.

The matching archive is also available as a separate [release asset](https://github.com/FTPAiYT/cadence/releases/download/v0.5.0/Cadence-0.5.0-codec-sources.zip).
The Windows installer is unsigned.
See [third-party components](THIRD_PARTY.md) and [release status](RELEASE_NOTES.md).
