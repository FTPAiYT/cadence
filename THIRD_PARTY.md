# Included software and distribution status

The installer contains `THIRD-PARTY-NOTICES`, package-supplied notices, Python
licenses, dependency locks and build information. These apply to their respective
components independently of any future Cadence license. Do not remove them.

| Component | Included role |
| --- | --- |
| Python | Private application and speech runtimes |
| NumPy, PyAV, Pillow | Numeric, audio/video and image support |
| FFmpeg and bundled codec libraries | Media decoding/processing/export |
| OpenAI Whisper, CPU PyTorch, large-v3-turbo | Local speech transcription and timing |
| Microsoft WebView2 | Windows webview runtime; reused or installed by setup |
| Tauri and native dependencies | Desktop window and application lifecycle |
| NSIS | Windows installer |

## Native source materials are still being assembled

The shipped FFmpeg executable identifies itself as
`7.1-essentials_build-www.gyan.dev` and enables GPL/version3 components. PyAV's
binary wheel also includes FFmpeg libraries, which need review independently of
the Python wrapper's BSD license. Generic repository links and license texts alone
are not the complete corresponding-source package for those exact binaries.

The download remains unpublished while those source/build materials and Cadence's
release terms are resolved. This page does not claim that all redistribution
obligations have already been met, or that Cadence has been released under an
open-source license.

Primary provenance and guidance:

- [FFmpeg licensing and distribution](https://ffmpeg.org/legal.html)
- [Gyan FFmpeg builds](https://www.gyan.dev/ffmpeg/builds/)
- [imageio-ffmpeg 0.6.0](https://github.com/imageio/imageio-ffmpeg/tree/v0.6.0)
- [PyAV 18.0.0](https://github.com/PyAV-Org/PyAV/tree/v18.0.0)
- [PyAV FFmpeg build recipes](https://github.com/PyAV-Org/pyav-ffmpeg)
- [OpenAI Whisper licensing](https://github.com/openai/whisper#license)

This distribution repository is not a source replacement for any of those projects.
