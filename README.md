# Roya Mohammadsadegh — npm/Vite website

This is the npm/Vite rewrite of the previous Jekyll Academic Pages site.

## Local development

Requirements: Node.js 20.19+ or 22.12+.

```powershell
npm install
npm run dev
```

If Windows PowerShell blocks `npm.ps1`, use the executable directly:

```powershell
npm.cmd install
npm.cmd run dev
```

Vite will print the local address, normally `http://localhost:5173/`.

## Production check

```powershell
npm.cmd run build
npm.cmd run preview
```

The production preview normally opens at `http://localhost:4173/`.

## GitHub Pages deployment

The repository includes `.github/workflows/deploy.yml`. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**. A push to `main` or `master` will then build and deploy the `dist` folder.

## Main editable files

- `index.html` — About Me
- `publications/index.html` — Publications
- `talks/index.html` — Talks
- `teaching/index.html` — Teaching
- `cv/index.html` — CV tabs
- `assets/js/site.js` — header, profile/sidebar, links, theme toggle
- `assets/css/site.css` — styling
- `public/images/Roya_profile_2026.jpg` — profile photo
- `public/files/` — CV files
