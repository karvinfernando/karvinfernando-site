# Images — how to change them

## The fastest way to swap an image

Each image is a file in `assets/img/` with a fixed name. Replace the file,
**keep the exact same filename**, and the site updates — no code touched,
live in ~1 minute.

**In the browser (nothing to install):**
1. Go to https://github.com/karvinfernando/karvinfernando-site/tree/main/assets/img
2. **Add file → Upload files**, drag your new image in with the *same filename*
3. "Commit changes" → Vercel redeploys automatically

**Locally:** drop files in `assets/img/_incoming/` (git-ignored) and tell Claude,
or just replace the file in `assets/img/` directly and `git push`.

Keep them **JPG**, ideally under ~400 KB. Send bigger and Claude will compress.
The site renders every photo **grayscale** — send colour, it desaturates.

---

## Every slot

| Filename | Page — where | Crop ratio | Export at | Re-crops on mobile? |
|---|---|---|---|---|
| `banner-film.jpg` | Home — "Film" strip | full-bleed (~12:5) | 2400 × 1040 | yes — see below |
| `banner-clear-media.jpg` | Home — "Clear Media" strip | full-bleed (~12:5) | 2400 × 1040 | yes |
| `banner-investments.jpg` | Home — "Investments" strip | full-bleed (~12:5) | 2400 × 1040 | yes |
| `home-closing.jpg` | Home — closing block | 4:5 | 1200 × 1500 | → 3:2 |
| `about-portrait.jpg` | About — beside the bio | 4:5 | 1200 × 1500 | → 3:2 |
| `clear-media-team.jpg` | Clear Media — origin section | 4:5 | 1200 × 1500 | → 3:2 |
| `investments-studio.jpg` | Investments — flagship section | 4:5 | 1200 × 1500 | → 3:2 |
| `film-intro.jpg` | Film — intro block | 16:9 | 1920 × 1080 | no — exact |
| `film-still-1.jpg` … `-5.jpg` | Film — stills carousel | 21:9 | 2000 × 858 | no — exact |
| `og-cover.jpg` | all — link-preview image | 1.91:1 | 1200 × 630 | n/a |

Footer **Instagram / LinkedIn** links are still `#` — not images, just send the
two profile URLs.

---

## Getting the crop exactly right

**Fixed-ratio slots — `film-still-*` (21:9) and `film-intro` (16:9):**
Crop to the ratio and export. What you see is exactly what the site shows,
every screen. WYSIWYG.

**4:5 portrait slots** (`about-portrait`, `clear-media-team`,
`investments-studio`, `home-closing`):
Desktop shows your full 4:5. **Below 900px wide the frame becomes 3:2** — it
keeps a centre horizontal band and clips the **top and bottom** of your image.
→ Keep the subject **vertically centred**; leave the top and bottom ~15% free
of anything essential (top of head, feet, captions).

**Banner slots** (`banner-*`):
Full-bleed, so the visible slice changes with the window — a wide letterbox on
desktop, a near-square centre slice on a phone. It always crops **from the
centre, both axes**.
→ Compose with the subject **centred**, generous margin all around. Assume the
outer ~20% on every edge is "bleed" that may be cut. The caption sits centre-left
over a dark scrim, so that area can be busy — it doesn't need to be empty.
