# Infinite Battery — one-pager

Static one-page site. Scientific-paper aesthetic (Space Grotesk / Source Serif 4 / IBM Plex Mono, violet accent `#5B2BD6`). No build step — plain HTML/CSS.

## Structure

```
infinite-site/
├── index.html              ← the whole page (CSS inline in <style>)
├── netlify.toml            ← Netlify config (no build, just serves root)
├── .gitignore
└── assets/
    ├── rendercad_main.png  ← Fig. 1 product render
    ├── datasheets/         ← drop product PDFs here
    └── 3d/                 ← drop STEP files here
```

## Local preview

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Put it online (first time)

### 1. Create the repo and push

```bash
cd infinite-site
git init
git add .
git commit -m "Initial one-pager"
git branch -M main
# create an empty repo on github.com first, then:
git remote add origin git@github.com:YOUR_USER/infinite-site.git
git push -u origin main
```

### 2. Connect to Netlify (auto-deploy on push)

1. Go to https://app.netlify.com → "Add new site" → "Import an existing project"
2. Pick GitHub → select `infinite-site`
3. Build command: *(leave empty)* · Publish directory: `.`
4. Deploy. You get a `*.netlify.app` URL immediately.

### 3. Custom domain (optional)

Netlify → Site → Domain management → add `infinite.gouach.com`, then add the
CNAME record Netlify gives you to your DNS. HTTPS is automatic.

## Day-to-day workflow

```bash
# edit index.html (or use Claude Code in this folder)
git add .
git commit -m "Add Cargo datasheet + specs"
git push
# Netlify rebuilds and deploys automatically
```

## To-do / placeholders still in the page

- [ ] Product table specs (voltage, capacity, current, weight, dimensions)
- [ ] Decide Mega = one column or two (M50 / M58)
- [ ] Wire datasheet PDF links → `assets/datasheets/`
- [ ] Wire 3D STEP links → `assets/3d/`
- [ ] "Request a sample" button → Notion form URL
- [ ] Confirm footer email
- [ ] Confirm YouTube explainer link (`vfiH7PKu-XE`)
