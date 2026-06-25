# Infinite Battery — website

Static site, scientific-paper aesthetic (Space Grotesk / Source Serif 4 / IBM Plex Mono, violet accent `#5B2BD6`). No build step — plain HTML/CSS/JS.

## Structure

```
infinite-battery-website/
├── index.html              ← the one-pager (CSS inline in <style>)
├── design-system.html      ← brand & design-system reference
├── CNAME                   ← custom domain for GitHub Pages
├── .gitignore
├── spec/                   ← per-model specification sheets
│   ├── spec.html           ← template (renders any model, print-to-PDF)
│   ├── data.js             ← per-model data (add a model here)
│   └── images/             ← hero, pinout & drawing images per model
└── assets/
    └── images/             ← page images, dashboard carousel, abuse tests
```

## Local preview

```bash
python3 -m http.server 8000
# → http://localhost:8000
#   spec sheets: http://localhost:8000/spec/spec.html?model=classic
```

## Hosting — GitHub Pages

The site is served by GitHub Pages from the `main` branch (root), at **https://infinite-battery.com**.

- **Deploy:** push to `main`. GitHub Pages rebuilds automatically.
- **Settings:** repo → Settings → Pages → Source = `main` / root.
- **Custom domain:** set by the `CNAME` file (`infinite-battery.com`). DNS uses the four GitHub Pages A records on the apex plus a `www` CNAME → `la-gouach.github.io`. HTTPS is enabled via *Enforce HTTPS*.

## Day-to-day workflow

```bash
# edit index.html / spec/* (or use Claude Code in this folder)
git add .
git commit -m "…"
git push          # GitHub Pages redeploys automatically
```

## Adding a battery model

Add an entry to `MODELS` in `spec/data.js`, drop its images under `spec/images/<model>/`,
and add its key to `MODEL_ORDER`. The spec template and the product table link pick it up.
