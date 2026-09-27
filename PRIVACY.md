# Files and local access

## The download

The customer package is assembled from an explicit application-file allowlist
and pinned third-party runtimes/model files. Personal projects, songs, footage,
reviews, browser profiles, logs, connection credentials and development Git
history are excluded. A new customer workspace starts without projects.

The recorded payload scan covers filenames, recognizable credentials, selected
private markers in UTF-8/UTF-16 and embedded ZIP members. No matches were found
in the current candidate. This is bounded scanning evidence, not a guarantee
against every possible encoding or a review of all third-party code/model weights.
Third-party license attributions remain included.

This documentation repository is assembled separately. It contains no project
fixtures, screenshots of private work, developer path records or source history.

## While using Cadence

The app and local agent helper communicate over loopback on the same computer.
Agent access is off until enabled in **File → Connect your agent**. The generated
connection file contains a credential; keep it private. The user can disconnect
or reset access in the app. Only connect an agent trusted to access local files.

The included Whisper engine processes the song on the computer. If the user gives
files or context to another AI service, that service's behavior and privacy terms
are separate from Cadence. Local operation of Cadence does not imply that every
agent or video generator is offline.

Footage remains at its original paths. Project documents, cuts, bins, reviews,
saved workflow answers, recovery files, previews, logs and profile settings are
stored separately from the application, normally under:

```text
%LOCALAPPDATA%\Cadence\workspace
```

Uninstalling keeps that workspace and the original media. Reinstalling preserves
existing work; it does not create a blank replacement over the user's projects.
Back up the workspace and original files together.

Do not upload full workspaces, footage or connection JSON to GitHub issues. Have
the local agent extract the smallest relevant error and redact personal values.
