# flyintake_public

The public website for [Flyintake](https://app.flyintake.com): vehicle intake software for auto repair shops.

It's a plain static site with no build step. All the website files are in `docs/`. Every push to `main` copies `docs/` to the `gh-pages` branch, and GitHub Pages serves the site from there:

**https://aliw77.github.io/flyintake_public/**

## Editing
- **Pages:** `docs/index.html`, `docs/features.html` and `docs/blog/`.
- **Photos:** CSS variables at the top of `docs/assets/css/style.css` (`--img-hero`, `--img-bay`, `--img-tech`, `--img-counter`).
- **Header/footer** are repeated in each page.
- **New blog post:** copy a file in `docs/blog/`, then add a card to `docs/blog/index.html` and a URL to `docs/sitemap.xml`.

## Preview locally
```sh
cd docs && python3 -m http.server 8000
```

## Custom domain
In **Settings → Pages → Custom domain**, enter `flyintake.com`. Add a `CNAME` file containing `flyintake.com` to `docs/` so the publish workflow keeps it. Then point DNS at GitHub Pages and enable **Enforce HTTPS**.

Marketing strategy (keywords, content plan, messaging) lives in the private `flyintake-marketing` repo.
