# flyintake_public

The public website for [Flyintake](https://app.flyintake.com): vehicle intake software for auto repair shops.

It's a plain static site with no build step. All the website files are in `docs/`. Every push to `main` copies `docs/` to the `gh-pages` branch, and GitHub Pages serves the site from there:

**https://aliw77.github.io/flyintake-marketing-public/**

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
The site is served at **https://flyintake.com** (`docs/CNAME`). DNS lives in Cloudflare: four `A` records on the apex point to GitHub Pages (185.199.108–111.153), and `www` is a `CNAME` to `aliw77.github.io`, all set to DNS only. Keep `docs/CNAME` in place, because the publish workflow replaces `gh-pages` on every run.

Marketing strategy (keywords, content plan, messaging) lives in the private `flyintake-marketing` repo.
