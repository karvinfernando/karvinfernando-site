# karvinfernando.com

Personal site for Karvin Fernando — director of photography, film director, founder.
Plain HTML/CSS/JS. **No build step, no framework.** Open any `.html` file directly, or
deploy the folder as-is.

## Structure

```
index.html            Homepage
film.html             Film — directing & DP, Homecoming, credentials
clear-media.html      Clear Media company page
investments.html      Investments — Colombo Production Studio + portfolio
about.html            Bio / positioning
contact.html          Contact form (Formspree)
404.html              Not-found page
favicon.svg           Monogram favicon
robots.txt            Crawl rules + sitemap pointer
sitemap.xml           Page list (update if pages are added/renamed)
vercel.json           Security headers + asset caching
assets/css/style.css  Shared design system — monochrome, Space Grotesk + Inter
assets/js/main.js     Nav toggle, active link, carousel, contact-form submit
assets/img/           Photos / video / OG image go here (currently empty)
```

## Local preview

```bash
npx serve .
```

or any static server. Opening files directly with `file://` also works.

## Deploying to Vercel (continuous deployment)

The repo is Git-ready. To wire up auto-deploys:

1. Push this repo to GitHub (or GitLab/Bitbucket):
   ```bash
   git remote add origin git@github.com:<you>/karvinfernando-site.git
   git push -u origin main
   ```
2. Go to <https://vercel.com/new>, import the repo. Framework preset: **Other**.
   Build command: none. Output directory: `.` (root). Deploy.
3. Every push to `main` now deploys to production; every branch/PR gets a preview URL.

CLI alternative (from this folder): `vercel` for a preview, `vercel --prod` for production.

## Domain (karvinfernando.com)

Not registered yet. Once it is:

1. In Vercel → Project → **Settings → Domains**, add `karvinfernando.com` and
   `www.karvinfernando.com`.
2. At the registrar, set the DNS records Vercel shows — typically:
   - `A` record for `@` → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`
3. Vercel issues the SSL cert automatically once DNS resolves.

## Contact form (Formspree)

`contact.html` posts to Formspree via AJAX (no page redirect), form ID `mgaenedy`
(endpoint `https://formspree.io/f/mgaenedy`). Submissions email the Formspree account
owner (karvinfernando@gmail.com).

The form includes a hidden `_gotcha` honeypot field for spam filtering.

To point it at a different form, replace both occurrences of the endpoint (the `action`
and `data-endpoint` attributes on `<form class="contact-form">`) in `contact.html`.

Swap Formspree for a serverless function later if volume or routing needs grow — the
form markup is standard `multipart/form-data`.

## Placeholders to replace before launch

All marked in the HTML with dashed boxes / `ph-label` text.

- **Homepage** — closing-section portrait / behind-the-scenes photo.
- **Film** — intro video; 5 production stills for the carousel; final Homecoming
  "Story" copy (currently a safe placeholder logline).
- **Clear Media** — team / studio photo.
- **Investments** — Colombo Production Studio facility photo.
- **About** — portrait photo.
- **Social** — `assets/img/og-cover.jpg` (1200×630) for link previews; real
  Instagram / LinkedIn URLs in every page footer (currently `#`).

Drop images into `assets/img/` and replace the `<div class="media-frame">…</div>`
placeholder blocks with `<img>` tags.

## Notes

- Design system is monochrome by intent (SpaceX-style spec sheet). Change the palette
  via the CSS variables in `:root` at the top of `style.css` — not per page.
- Nav highlights the current page automatically from the filename.
- No external JS libraries. Carousel and mobile nav are self-contained in `main.js`.
