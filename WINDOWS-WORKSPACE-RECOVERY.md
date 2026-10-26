# Windows: projects appear missing after an agent launch

Some MSIX agent hosts can redirect Cadence's AppData writes into their own
package cache. Opening Cadence normally can then show a different workspace.
The projects may still exist in that other location. Preserve both folders.

Windows release-r6 checks the actual destination of a new file before starting
the backend or WebView. If redirected, it opens through Explorer and waits for
that copy to confirm an unredirected location. Failed handoff stops with an
explanation. Custom workspace overrides and arguments are never silently dropped.
The Mac package is unchanged.

## Safe launch, including older builds

```powershell
Start-Process -FilePath "$env:SystemRoot\explorer.exe" -ArgumentList ('"' + "$env:LOCALAPPDATA\Programs\Cadence\Cadence.exe" + '"')
```

Use the actual installation path if different. No Windows security settings need
changing. The app's new launch guard also handles normal GUI launches itself.

## Recover existing work

1. Ask the user to save and close Cadence. Never force-close it or copy a live
   WebView profile. Back up both complete workspaces to distinct folders.
2. Check physical paths from outside the packaged host. Normal data lives in
   `%LOCALAPPDATA%\Cadence\workspace`; redirected data can be under
   `%LOCALAPPDATA%\Packages\<host-family>\LocalCache\Local\Cadence\workspace`.
   Do not assume an empty virtualized view means the original is absent.
3. From an unredirected process, preview recovery with the r6 executable. Use
   the actual source path and original port from `desktop/connection.json`:

   ```powershell
   & "$env:LOCALAPPDATA\Programs\Cadence\Cadence.exe" --migrate-data-from 'C:\actual\old\workspace' --source-port 8196
   ```

4. Review the source, destination, count and port. If the destination is empty
   and recovery is authorized, repeat with `--apply`. This copies and verifies
   projects and the recovery profile, retains the source and rewrites only known
   internal media paths. Both packaged `desktop/profile` and older
   `cache/desktop/profile` are supported. Ambiguous profiles stop for inspection.
5. Reopen normally and check saved edits, review choices and media references.
   External media stays in place. Agent credentials are not copied; reconnect.

**A nonempty destination is refused, never merged or overwritten.** Preserve both
copies and ask which workspace/project to recover. Do not delete the destination
to make migration run. An explicit new `CADENCE_DATA_DIR` outside the installation
can be used for a disposable preview; that does not change normal startup.
Never share `agent/connection.json` or its credential.

## Verification scope

The exact r6 native window passed direct launch, save, close and reopen checks
with disposable data. Its migration CLI retained cuts, autosave, recovery profile,
internal media paths, saved port and original source. Launch-guard checks covered
normal startup, repeated Explorer handoff, pending handoff, custom overrides and
failure to open Explorer.

Redirected-path tests used simulated AppData paths and real Explorer handoff.
A fresh launch from Claude's actual MSIX context was not reproduced in this
session; the original patch author reported one successful Claude launch.
This is early access, not a universal compatibility claim or a migration of
personal projects.
