# Setup and connection help

Inspect the specific failure before restarting or reinstalling. Keep the user's
work intact and avoid repeated visible app launches.

| What happened | Next step |
| --- | --- |
| No published Windows asset | The release is not available. Do not use an unrelated repository or automatic source ZIP. |
| Download size/hash differs | Do not run it. Keep the mismatch report, download a fresh copy from the same official release into a new filename, and compare again. |
| Windows shows an unknown publisher | This candidate is unsigned. Explain the prompt and let the user make the Windows approval decision; do not disable security tools. |
| Setup says Cadence is open | Ask the user to save and close it, then retry setup. Never force-kill an active edit. |
| WebView2 setup fails | Check internet access and the Microsoft runtime error. Use Microsoft's supported installer/recovery instructions; do not fetch a random runtime. |
| Setup refuses a destination | Use the default per-user location or a recognized Cadence installation. Do not clear an unrelated nonempty folder to force installation. |
| App cannot start | Read the on-screen error and its named backend log. Default log: `%LOCALAPPDATA%\Cadence\workspace\logs\backend.log`. Inspect only the relevant excerpt. |
| Engine missing or interrupted update | Save/close if possible, then rerun the same verified installer. Do not install packages into the private runtime with pip. |
| Port occupied | Inspect the named port and owning process. If it is another Cadence instance, bring that instance forward. Never terminate an unknown process. |
| Connection file missing | Keep Cadence open and enable **File → Connect your agent**. Use the exact path it supplies. |
| Connection rejected or session changed | Reread the connection file after restart/reset. Reconnect with the included helper; do not guess ports or show the token. |
| Connection disabled | The user can enable it again in Cadence. Do not edit the JSON to bypass that choice. |
| A clip is rejected | Read the per-file reason. Confirm it is a completed, readable video rather than a partial download or active render. |
| Import response interrupted | Inspect the same operation ID and bin. Do not blindly reapply under a new ID. |
| Clips are present but not showing | Use **View videos** or open the named bin in Review. An import does not populate the editing timeline. |
| Lyrics are imperfect | Edit generated words/timings. Singing, backing vocals and layered mixes can need corrections. |
| Lyrics feel slow | This package uses CPU. It does not promise GPU acceleration; do not install CUDA or replace its runtime as a generic fix. |
| Existing projects are missing | Confirm the Windows account and workspace location. Check whether the user used an older portable copy. Preview the documented migration before applying it; never reset the workspace. |

## Collect a useful report

With the user's permission, describe the Cadence version, Windows version and
architecture, the exact step, and the visible error. A narrowly selected log
excerpt may help. Redact usernames, personal paths, project names and credentials.

Never post `agent/connection.json`, a complete profile/workspace, raw footage or
full logs. A local agent can inspect them without transmitting them. Do not claim
to have heard playback or seen an exported file based only on a health response.

## Native engine diagnostic

The installed executable supports `--check-engine` without opening a window. Run
it only if needed to investigate the engine and preserve its output locally.
This diagnostic does not establish that the UI, speaker output or every media
format works. Its output may include local paths; redact before sharing.

For an old workspace, `--migrate-data-from` defaults to a preview. The installed
`BUNDLED_ENGINE.md` explains `--apply`; preserve the original workspace until the
user has confirmed the migrated work.
