# Cadence

A desktop music-video editor for working with generated or downloaded footage.
Review takes, save moments, edit to your song, generate editable lyrics locally,
and export an MP4.

## Give this repository to your agent

Copy this repository's URL into an agent that can work with files on your computer:

> Help me get started with Cadence using this repository. Read README.md and
> AGENTS.md, check my operating system, processor and OS version, then find the
> compatible published download and help me install and open it. Stop if my
> computer is unsupported; never download an installer for another OS.
> Connect using Cadence ▾ → Connect your agent. Ask how I make videos, where the
> finished files arrive, and which song or project they are for. Bring the clips
> I choose into a named bin for review. Preserve my files and existing edits.

The agent handles the technical setup. You provide the creative choices and any
required operating-system approval. A remote chat without access to your files cannot
perform the local import.

## Download status

**Cadence 0.5.0 is free early access for Windows and Apple Silicon Mac.**

[Download for Mac](https://github.com/FTPAiYT/cadence/releases/download/v0.5.0/Cadence-0.5.0-mac-arm64-beta-r5.dmg) · [Download for Windows](https://github.com/FTPAiYT/cadence/releases/download/v0.5.0/Cadence-Setup-0.5.0-release-r8.exe) · [Release and checksums](https://github.com/FTPAiYT/cadence/releases/tag/v0.5.0)

Both packages include third-party notices and have matching video-component sources.
Cadence 0.5 is free to use, including for commercial video work; selling Cadence
itself requires permission. Separate third-party license rights are preserved. See
[release status](RELEASE_NOTES.md). Do not download similarly named files from
other repositories or treat GitHub's automatic “Source code” ZIP as the app.

| Package | Status |
| --- | --- |
| Windows 10 or newer, x64 | Available now; unsigned |
| Mac with M1 or newer, macOS 14+ | [Mac beta: download, drag to Applications, open](SETUP-MAC.md); not Apple verified |

Intel Macs, older macOS versions, Linux and native Windows ARM are not supported
by these downloads. GitHub does not choose a platform for you; use the labelled
package above. The same repository link works for your local agent on either
supported platform.

Downloads are **release assets** under this repository's Releases tab. Their exact filenames, sizes and SHA-256 hashes are recorded in
the [Windows manifest](releases/windows-x64.json), [Mac manifest](releases/macos-arm64.json) and [SHA256SUMS](SHA256SUMS).

**On a Mac:** [download the DMG](https://github.com/FTPAiYT/cadence/releases/download/v0.5.0/Cadence-0.5.0-mac-arm64-beta-r5.dmg), drag Cadence into Applications and
open it. Everything is included. macOS may require you to approve this beta under
Privacy & Security because it is not Developer ID signed or notarized.

## What comes in either download

- The Cadence desktop app, review workspace and music-video editor.
- Local agent connection and import helper; no separate MCP server required.
- Whisper and its large-v3-turbo speech model for editable lyrics and timings.
- Private Python runtimes and video-processing dependencies.

The Mac download is **1.82 GB**; the Windows download is **1.85 GB**.
Installation unpacks the downloaded files into a larger app.
Allow room for both during setup, plus your footage, previews and exports.
Transcription runs on CPU; speed depends on your computer. Singing can require
corrections to generated words and timings.

Python, FFmpeg and Whisper need no separate installation. Existing installations
are left untouched. Windows setup reuses Microsoft WebView2, or installs it using an
internet connection if it is missing. Your agent, video-generation services and
their credits are separate.

## Start with your first batch

1. Install and open Cadence using the published release.
2. Open **Cadence ▾ → Connect your agent → Enable and copy instructions**.
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
This is an early-access beta. Future updates and additional supported platforms are not promised.
