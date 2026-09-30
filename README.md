# Cadence

A desktop music-video editor for working with generated or downloaded footage.
Review takes, save moments, edit to your song, generate editable lyrics locally,
and export an MP4.

## Give this repository to your agent

Copy this repository's URL into an agent that can work with files on your computer:

> Help me get started with Cadence using this repository. Read README.md and
> AGENTS.md, find the published Windows installer, and help me install and open it.
> Connect using File → Connect your agent. Ask how I make videos, where the
> finished files arrive, and which song or project they are for. Bring the clips
> I choose into a named bin for review. Preserve my files and existing edits.

The agent handles the technical setup. You provide the creative choices and any
required Windows approval. A remote chat without access to your files cannot
perform the local import.

## Download status

**Cadence 0.5.0 is available as free Windows early access.**

[Download for Windows](https://github.com/FTPAiYT/cadence/releases/download/v0.5.0/Cadence-Setup-0.5.0-release-r5.exe) · [Release and checksums](https://github.com/FTPAiYT/cadence/releases/tag/v0.5.0)

The Windows package includes matching video-component sources and notices.
Cadence 0.5 is free to use, including for commercial video work; selling Cadence
itself requires permission. Separate third-party license rights are preserved. See
[release status](RELEASE_NOTES.md). Do not download similarly named files from
other repositories or treat GitHub's automatic “Source code” ZIP as the app.

| Package | Status |
| --- | --- |
| Windows 10 or newer, x64 | Available now; unsigned |
| macOS | No package available yet |

The installer is a **release asset** under this repository's Releases tab. The exact filename, size and SHA-256 are recorded in
[the package manifest](releases/windows-x64.json) and [SHA256SUMS](SHA256SUMS).

## What comes in the Windows download

- The Cadence desktop app, review workspace and music-video editor.
- Local agent connection and import helper; no separate MCP server required.
- Whisper and its large-v3-turbo speech model for editable lyrics and timings.
- Private Python runtimes and video-processing dependencies.

The download is **1.85 GB to download**, approximately **2.61 GB installed**.
Allow room for both during setup, plus your footage, previews and exports.
Transcription runs on CPU; speed depends on your computer. Singing can require
corrections to generated words and timings.

Python, FFmpeg and Whisper need no separate installation. Existing installations
are left untouched. Setup reuses Microsoft WebView2, or installs it using an
internet connection if it is missing. Your agent, video-generation services and
their credits are separate.

## Start with your first batch

1. Install and open Cadence using the published release.
2. Open **File → Connect your agent → Enable and copy instructions**.
3. Paste those instructions into your local agent. Tell it how you make videos
   and where the completed clips arrive.
4. Ask it to bring a specific batch into a named bin. In Cadence, choose
   **View videos**, review the takes, and save the moments you want.

Website downloads and local generations use the same workflow. Cadence references
your original clips without moving them. Importing a bin does not overwrite a cut
or automatically put footage on the timeline.

[Installation](SETUP.md) · [First import](FIRST_IMPORT.md) ·
[Agent helper](AGENT_CONNECTION.md) · [Troubleshooting](TROUBLESHOOTING.md) ·
[Data and privacy](PRIVACY.md) · [Included software](THIRD_PARTY.md)

This repository holds distribution instructions and the landing page with selected demo artwork and screenshots. It does not contain the private development checkout, personal project files, original footage, connection credentials or development history.
Pricing, future updates and Mac availability are not promised by this preview.
