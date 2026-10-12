# Flow for Windows — Community Desktop Companion

A Windows desktop shell with a clean Flow-inspired interface and convenient navigation to YouTube and YouTube Music.

## Important scope note

The supplied Flow project is an Android app built with Kotlin, Jetpack Compose and Android Media3. It cannot be directly converted into a native Windows `.exe`. This repository is a **Windows companion shell**, not a full native port. It does not implement FlowNeuro, SponsorBlock, DeArrow, downloads, casting, the Android player, or the local recommendation database. The web content is served by YouTube/YouTube Music and their own account, privacy and availability policies apply.

## Build on Windows

1. Install Node.js 22 LTS from https://nodejs.org/
2. Extract this folder.
3. Open PowerShell in the extracted folder.
4. Run:

```powershell
npm install
npm start
```

To package installer and portable executable:

```powershell
npm run dist
```

Output files will be in `dist/`:
- `Flow-Windows-1.0.0-x64.exe` (installer; exact suffix may vary)
- `Flow-Windows-1.0.0-x64.exe` (portable target may have a different artifact suffix)

## Build through GitHub (no local upload/build needed)

1. Create a new GitHub repository.
2. Upload the contents of this folder (not the parent folder).
3. Open **Actions** → **Build Flow Windows** → **Run workflow**.
4. Download the `Flow-Windows-build` artifact from the completed run.

For a GitHub Release, push a tag such as `v1.0.0`; the workflow will attach the generated Windows packages to that release.

## Security

The app uses Electron with context isolation and Node integration disabled in the UI. YouTube pages run in an isolated persistent session. Review dependencies before distributing builds.
