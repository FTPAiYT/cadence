# Included software

The installer retains third-party notices, licenses and dependency records under
`THIRD-PARTY-NOTICES`. The original package notices remain in the runtime too.

| Component | Included role |
| --- | --- |
| Python | Isolated application and speech runtimes |
| NumPy and Pillow | Numeric and image support |
| PyAV 18 / LGPL-only FFmpeg 8.1.2 / dav1d | Media decoding and processing |
| Standalone FFmpeg 8.1.2 / x264 | H.264/AAC MP4 encoding, GPL 2 or later |
| OpenAI Whisper, CPU PyTorch, large-v3-turbo | Local lyrics transcription and timing |
| Microsoft WebView2 | Desktop webview; reused or installed by setup |
| Tauri | Desktop window and lifecycle |
| NSIS | Windows installer |

The exact video-component sources, build scripts and license texts are included
inside the download. See [source materials](SOURCE_MATERIALS.md). The LGPL DLLs
remain replaceable. Cadence's application terms preserve the libraries'
modification/debugging rights and all separate third-party redistribution rights.

Cadence 0.5 is free to use, including to make commercial or client videos. Its own
terms prohibit selling/sublicensing Cadence or including it in a paid software
bundle without permission. Those restrictions do not apply to the independently
licensed third-party components or your exported videos. Read the installed
`CADENCE-LICENSE.txt` for the application permission displayed by setup.

Upstream references: [FFmpeg](https://ffmpeg.org/legal.html),
[PyAV](https://github.com/PyAV-Org/PyAV/tree/v18.0.0),
[dav1d](https://code.videolan.org/videolan/dav1d/-/tree/1.5.3),
[x264](https://www.videolan.org/developers/x264.html),
[Whisper](https://github.com/openai/whisper#license).
