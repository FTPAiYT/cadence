# Install Cadence

Choose the download for your computer. Both include the editor, video tools,
Whisper and its lyrics model. No separate Python or model installation is needed.

| Your computer | Download | Setup |
| --- | --- | --- |
| Mac with M1 or newer, macOS 14+ | [Mac disk image (.dmg)](https://github.com/FTPAiYT/cadence/releases/download/v0.6.1/Cadence-0.6.1-mac-arm64-beta.dmg) | [Download, drag to Applications, open](SETUP-MAC.md) |
| Windows 10+, x64 | [Windows installer (.exe)](https://github.com/FTPAiYT/cadence/releases/download/v0.6.1/Cadence-Setup-0.6.1.exe) | [Windows setup](SETUP-WINDOWS.md) |

Intel Macs, macOS versions below 14, Linux and native Windows ARM are not supported
by these packages. Do not try the Windows file on a Mac or use GitHub's automatic
Source code ZIP as the application.

## Using an agent

Give your local agent this repository link. It should read [AGENTS.md](AGENTS.md),
inspect the computer's actual OS, native processor and OS version, then use the
matching manifest in `releases/`. A Mac agent should use `sw_vers -productVersion`
and `sysctl -n hw.optional.arm64`; the latter must report `1`. `uname -m` alone
can report x86_64 for an Apple Silicon Mac running a translated terminal.

Confirm the selected manifest is published and its exact asset exists under the
specified release tag. Compare the downloaded file's byte count and SHA-256 with
the manifest. Stop on an unsupported computer or a missing/mismatched asset;
never substitute an installer for another OS or compile this documentation repo.

The agent handles downloading, verification, installation and launch using its
authorized tools. The user supplies only creative choices and required OS
approvals. Use the platform-specific setup above; never run PowerShell setup on
macOS or install extra developer tools to use the packaged application.

## After opening Cadence

Click **Connect your agent** at the top, then **Enable and copy instructions**, and paste those
instructions into your local agent. Tell it where your completed clips are and
which project they belong to. It can import them into a named bin for review.

You can also use Cadence yourself without connecting an agent. Original footage
and existing projects must be preserved during setup and updates.

If you dismissed the top button, reopen it through **Cadence ▾ → Connect your agent**. The button disappears after your agent connects.
