# Copyright Risk Audit for Game Files

This folder contains browser games copied from third-party sources. A visual
reskin does not, by itself, clear copyright risk for copied source code, images,
audio, compiled game packages, or level data.

## Current status

| Folder | License file found | Risk status | Notes |
| --- | --- | --- | --- |
| `bubbleGame` | No | Permission unknown | Contains copied HTML/CSS/JS and image assets. |
| `goGame` | No | Permission unknown | Contains platformer code, sprites, audio, levels, and copied backup files. |
| `grrGame` | No project license | Permission unknown | Contains compiled Godot export files, including `.wasm` and `.pck`; source project/license is not present. |
| `racingGame` | No | Permission unknown | README references a public GitHub Pages game and original contributors, but no license file is present in this copy. |
| `railrushGame` | No | Permission unknown | Contains copied HTML/JS plus image and audio assets. |
| `snakeGame` | No | Permission unknown | Contains copied HTML/CSS/JS; original author label was visible before reskin. |
| `spaceShotter` | No | Permission unknown | Contains copied HTML/JS and image assets. |
| `tetrixGame` | No game license | Permission unknown | Includes third-party library CDN references and local game assets/audio; bundled Tauri metadata is not a game license. |
| `yumGame` | No | Permission unknown | Contains copied match-3 code and candy/background assets. |

## Required cleanup before production

1. Locate the original source URL for each game.
2. Confirm the exact license for the code and each bundled asset type: images,
   sprite sheets, audio, fonts, compiled packages, and level/background data.
3. Keep a copy of each license in this repository under a dedicated
   `third-party-notices` or `licenses` folder.
4. If a license is missing, unclear, incompatible, or not found, replace that
   game with an original implementation or remove it from the shipped app.
5. Do not rely on renaming, CSS filters, color changes, or layout changes as a
   copyright clearance strategy.
6. Remove copied backup files such as `main copy*.js`, `physics copy*.js`, and
   unused assets after deciding which games are allowed to remain.
7. For any game kept under an open-source license, preserve required notices and
   comply with conditions such as attribution, source disclosure, license text,
   or share-alike terms.
8. For any fully rewritten replacement, keep a short provenance note stating
   that the code/assets were created for WePlay2Help and listing any libraries or
   asset packs used.

## Recommended codebase policy

- Treat every game in this folder as quarantined until its license is verified.
- Prefer original rewrites for the core gameplay and original/paid/licensed
  assets for all sprites, audio, and backgrounds.
- Keep mechanics generic, but avoid copying distinctive character designs,
  level layouts, UI composition, sound effects, names, and source structure from
  the copied versions.
- Add a per-game `LICENSES.md` file only after the license has been confirmed.
  Do not add attribution as a substitute for permission.

## Practical next pass

The safest technical path is:

1. Build small original game engines for the simple games (`snakeGame`,
   `bubbleGame`, `yumGame`, `railrushGame`, `spaceShotter`, `racingGame`) using
   fresh code and fresh assets.
2. Replace `grrGame` with either the original Godot project under a verified
   license or a new exported Godot game created for this project.
3. Replace `tetrixGame` with an original block puzzle implementation or verify
   its source license and all bundled skins/sounds.
4. Delete any copied folders that cannot be verified.
