# Cadence for Mac

**Requires an M1 or newer Mac running macOS 14 or newer. Intel Macs are not supported.**

## Install

1. [Download Cadence for Mac](https://github.com/FTPAiYT/cadence/releases/download/v0.6.0/Cadence-0.6.0-mac-arm64-beta.dmg) and open the `.dmg` file.
2. Drag **Cadence** into **Applications**.
3. Open **Cadence** from Applications.

The download includes the editor, Python, video tools, Whisper and its lyrics
model. Do not install Python, Homebrew or a separate model. You do not need a
paid Apple developer account to try this beta.

## If macOS blocks the first launch

This beta is not Apple Developer ID signed or notarized. macOS may say it cannot
verify the developer. If you trust Future Tech Pilot and downloaded the file from
this official release, try opening Cadence once, then go to **System Settings →
Privacy & Security → Open Anyway**, if offered, and approve opening Cadence.

This is a decision for the person using the Mac. An agent must not disable
Gatekeeper, remove quarantine attributes or change system security settings.
If the Mac is managed by an organization and the exception is blocked, report
that restriction. [Apple explains these prompts](https://support.apple.com/102445).

## Connect your agent

Click **Connect your agent** at the top, then **Enable and copy instructions**.
If you dismissed the button, use **Cadence ▾ → Connect your agent**. Paste
the instructions into your local agent. The included helper points to the Mac's
own bundled runtime. An agent needs local file/process access to import footage;
a remote chat cannot operate the Mac's files by itself.

## For an agent handling setup

- Inspect the OS and hardware as described in [SETUP.md](SETUP.md). On this Mac,
  `sysctl -n hw.optional.arm64` must return `1` and macOS must be version 14+.
- Read [releases/macos-arm64.json](releases/macos-arm64.json). Require
  `published: true`, the exact release asset, byte count and SHA-256. Download
  from this repository only; do not use the Source code or codec-source ZIP.
- Mount the verified disk image read-only using `hdiutil`. Copy the complete app,
  preserving its contents and symlinks, into Applications using Finder or `ditto`.
  If `/Applications` is not writable under existing authorization, use the user's
  `~/Applications` or request the necessary OS approval. Do not run the app from
  the mounted image or assume it must remain at a particular installation path.
- Before replacing an existing app, have the user save and close it. Preserve
  the existing application until the replacement is ready; do not erase unrelated
  folders, force-kill an edit, or delete the customer workspace.
- Detach the disk image after copying. Open the installed app and wait for its
  interface. If macOS requires a security confirmation, explain the exact prompt
  and let the person approve it. Resume setup after approval.
- Read the connection file supplied by Cadence and invoke the bundled `python`
  and `helper` fields as argument arrays. See [AGENT_CONNECTION.md](AGENT_CONNECTION.md).
  Do not invoke Windows commands or guess a system Python.

Read-only diagnostics, using the installed app's actual location:

```sh
"/Applications/Cadence.app/Contents/MacOS/cadence-desktop" --check-engine
"/Applications/Cadence.app/Contents/MacOS/cadence-desktop" --storage-info
```

These commands do not establish native playback or physical audio output. If
startup fails, inspect its specific error and a small relevant log excerpt before
restarting. Default backend log:
`~/Library/Application Support/Cadence/workspace/logs/backend.log`.

## Your projects

Projects, reviews and settings live separately at
`~/Library/Application Support/Cadence/workspace`. Replacing or deleting the app
keeps that workspace. Original footage stays in its chosen folders. Back up both;
never delete a workspace as routine troubleshooting.

## Beta status

The packaged app and an installation from the DMG passed automated tests on an
Apple Silicon macOS 14 host, including native playback, export, offline lyrics,
agent import, save/reopen and safe shutdown. Physical audio listening, native
file-dialog interaction, recipient upgrades and full-song performance still need
beta feedback. See [Mac verification](MACOS-VERIFICATION.md).
