# Bring in the first batch

This flow is the same for downloaded videos, local generations, camera footage,
or a mixture. It does not require an account with any specific generation service.

## Start with a conversation

Use what the user already said. Read existing projects/workflow before asking:

- How are you making the videos?
- Where do the completed files arrive?
- Which song/project is this batch for?

If they make videos on a website, they or their authorized download workflow save
the completed files locally first. If they generate locally, wait until the jobs
have actually finished. Cadence imports local files; it does not generate or fetch
videos from cloud accounts.

For a new project, agree a title and an existing media folder. Reuse the existing
project for later batches. Save the generation/download workflow so it does not
need to be asked again unless it changes.

## Use the helper supplied by Cadence

After enabling the connection, use the path in the app's copied instructions.
All example paths, project IDs and bin names below must be replaced with values
chosen for this user's current request. Do not print the connection object.

```powershell
$cadenceConnectionPath = 'C:\path\supplied\by\Cadence\connection.json'
$cadenceConnection = Get-Content -Raw -LiteralPath $cadenceConnectionPath | ConvertFrom-Json
$cadenceArguments = @('-I', '-B', $cadenceConnection.helper, '--connection', $cadenceConnectionPath)
& $cadenceConnection.python @cadenceArguments status
& $cadenceConnection.python @cadenceArguments projects
```

For an existing project, inspect its saved workflow:

```powershell
$cadenceProject = 'PROJECT_ID_RETURNED_BY_CADENCE'
& $cadenceConnection.python @cadenceArguments workflow --project $cadenceProject
```

If a new project is needed, create it using the agreed, existing folder; read the
returned project ID before continuing:

```powershell
& $cadenceConnection.python @cadenceArguments create-project --title 'My song' --media 'C:\Videos\My song'
```

Record source answers with `save-workflow --project ID --file WORKFLOW_JSON`; see
[the helper guide](AGENT_CONNECTION.md) for the JSON schema and mixed-source support.

## Preview and import

Select only the intended files. Directory imports recurse, so avoid broad folders.

```powershell
$cadenceBin = 'Chorus - batch 02'
$cadenceFiles = @('C:\Videos\My song\take-01.mp4', 'C:\Videos\My song\take-02.mp4')
& $cadenceConnection.python @cadenceArguments import --project $cadenceProject --bin $cadenceBin @cadenceFiles
```

Review the accepted/rejected results. When the user's request authorizes importing
these files, choose and retain an operation ID **before** applying:

```powershell
$cadenceOperation = [guid]::NewGuid().ToString()
& $cadenceConnection.python @cadenceArguments import --project $cadenceProject --bin $cadenceBin --apply --operation-id $cadenceOperation @cadenceFiles
```

After a lost or interrupted response, recover the same operation:

```powershell
& $cadenceConnection.python @cadenceArguments operation $cadenceOperation
& $cadenceConnection.python @cadenceArguments bins --project $cadenceProject
```

Do not invent another ID and apply again while the original outcome is unknown.
Keep the ID in the agent's task context until a completed receipt is confirmed.

## Put the videos in front of the user

After success, report the actual accepted count and the project/bin name. Cadence
offers **View videos** to open that bin in Review without interrupting an edit.
The user compares takes, rates clips, leaves notes and saves moments there.

On later requests, use `reviews` and `selects` with `--project` to read those saved
choices. Preserve existing cuts and original media. Importing footage does not
insert it into the timeline or overwrite review decisions.
