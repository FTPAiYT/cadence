# Cadence 0.7.3 Mac beta verification

The Apple Silicon DMG passed 25 checks on a macOS 15 runner. The release test mounted the final DMG, verified its ad-hoc code signature, and exercised the packaged app with disposable footage. Checks covered native playback, project switching, saving and reopening a cut, MP4 export, offline Whisper inference, and normal shutdown.

The build targets macOS 14 and later. Testing covered Apple Silicon on macOS 15. Physical audio listening and recipient-machine installation were outside this run.

SHA-256 `766a72fe10829aab700768e2077b3064c8576b78866cbbad7848b878d5e61d7b`
