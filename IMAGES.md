# Images — what goes where

## How to send images to Claude

1. Open this project folder in Finder:
   `/Users/karvinfernando/Personal Website Dev`
2. Drop your files into **`assets/img/_incoming/`** — any filename, any size.
   Phone photos, exports, screenshots all fine. That folder is git-ignored,
   so nothing is published until it's processed.
3. Tell Claude which slot each file is for (use the IDs in the table below).
   Claude crops, converts to grayscale-friendly, compresses, renames, and
   wires each one into the page.

You can also paste/attach images straight into the chat if you only have one
or two.

## Slots

| ID | Page | Where | Current | Target crop | Notes |
|----|------|-------|---------|-------------|-------|
| `banner-film` | Home | Full-bleed "Film" strip | **sample stock** | ~21:9, ≥2000px wide | Director/DP at work — on set, camera, crew, atmosphere |
| `banner-clear-media` | Home | Full-bleed "Clear Media" strip | **sample stock** | ~21:9, ≥2000px wide | The team + operation at scale — a populated production floor |
| `banner-investments` | Home | Full-bleed "Investments" strip | **sample stock** | ~21:9, ≥2000px wide | Big infrastructure — the CPS soundstage / lighting grid, scale |
| `home-closing` | Home | Closing "Start a project" block | placeholder box | 4:5 portrait | Portrait or behind-the-scenes of Karvin |
| `film-intro-video` | Film | Intro video | placeholder box | 16:9 video file (mp4) | Karvin on the state of film in Sri Lanka |
| `film-still-1` … `film-still-5` | Film | Stills carousel | placeholder boxes | ~21:9, ≥1800px wide | Production stills / BTS frames from Homecoming + DP work |
| `clear-media-photo` | Clear Media | Origin section | placeholder box | 4:5 portrait | Team or studio photo |
| `investments-photo` | Investments | Flagship section | placeholder box | 4:5 portrait | Colombo Production Studio facility |
| `about-portrait` | About | Hero, beside bio | placeholder box | 4:5 portrait | Portrait of Karvin |
| `og-cover` | all | Link-preview image | missing | 1200×630 exactly | Used when the site is shared on social / messaging |
| `instagram-url` / `linkedin-url` | all | Footer links | `#` | — | Not images — just send the two profile URLs |

## Design treatment (applied automatically)

- All photos are rendered **grayscale** with slightly raised contrast to match
  the monochrome system. Send them in colour; the site desaturates them.
- Banners get a left-side dark scrim so the overlaid text stays readable, plus
  a slow zoom on hover.
- Shoot/select with a **quiet zone on one side** (wall, sky, floor) where text
  can sit, and enough contrast to survive the scrim.
