# Benjamin Lerch — personal website

A lightweight, responsive personal academic/policy website designed for GitHub Pages.

## Fastest way to publish it on GitHub Pages

### Option A — recommended: `USERNAME.github.io`

This gives you the clean URL:

`https://USERNAME.github.io`

1. Create a GitHub account if you do not already have one.
2. In GitHub, click **New repository**.
3. Name the repository **exactly** `USERNAME.github.io`, replacing `USERNAME` with your GitHub username.
4. Set it to **Public** and create the repository.
5. Upload all files from this folder to the root of the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll`
   - the `assets` folder
6. Open the repository's **Settings** → **Pages**.
7. Under **Build and deployment**, choose:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`
   - **Folder:** `/ (root)`
8. Click **Save**.
9. After a minute or two, GitHub will show the public URL.

### Option B — any repository name

If your repository is called `website`, your address will be:

`https://USERNAME.github.io/website/`

The same files work without changes because all local links are relative.

## Updating the website later

The easiest workflow is simply to edit `index.html` in GitHub:

1. Open `index.html` in the repository.
2. Click the pencil icon (**Edit this file**).
3. Make your changes.
4. Click **Commit changes**.
5. GitHub Pages automatically republishes the site.

For larger changes, install Git and use:

```bash
git clone https://github.com/USERNAME/USERNAME.github.io.git
cd USERNAME.github.io
# edit files
git add .
git commit -m "Update website"
git push
```

## Important: self-host the profile photo

The first version deliberately points to the portrait already hosted by your current Google Sites page, so the website works immediately.

For a permanent setup, do this once:

1. Save your portrait as `assets/profile.jpg`.
2. In `index.html`, find the `<img>` inside `portrait-card`.
3. Replace the long Google Sites URL in `src="..."` with:

```html
src="assets/profile.jpg"
```

This avoids depending on Google Sites in the long run.

## Adding a CV button

1. Put your PDF in the repository, for example `assets/Benjamin_Lerch_CV.pdf`.
2. In the hero section of `index.html`, add this next to the existing buttons:

```html
<a class="button secondary" href="assets/Benjamin_Lerch_CV.pdf" target="_blank">CV</a>
```

## What to edit most often

- **Short bio:** `index.html`, section `#about`
- **Research:** `index.html`, section `#research`
- **Policy work:** `index.html`, section `#policy`
- **Events:** `index.html`, section `#events`
- **Contact:** `index.html`, section `#contact`
- **Colours/layout:** `styles.css`

## Optional custom domain

You can later use a domain such as `benjaminlerch.ch` or `benjaminlerch.com`.

In GitHub: **Settings → Pages → Custom domain**. GitHub will tell you which DNS records to add at your domain provider.

## Local preview

You can double-click `index.html`, or (better) run a tiny local web server in the website folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
