# Illyrian Brains Atlas

Practical country guides and learning games for the Albanian diaspora, published at [atlas.illyrianbrains.org](https://atlas.illyrianbrains.org).


## Local development

```sh
npm install
npm run dev
```

Run `npm run build` to create the static production site in `dist/`.

## Deployment

Pushes to `main` deploy automatically through `.github/workflows/deploy.yml`.

One-time repository setup:

1. Open **Settings → Pages** in the GitHub repository.
2. Set **Source** to **GitHub Actions**.
3. Set the custom domain to `atlas.illyrianbrains.org` and enable **Enforce HTTPS** after DNS validation succeeds.
4. At the DNS provider for `illyrianbrains.org`, create a `CNAME` record for `atlas` pointing to `illyrianbrains.github.io`.

The Astro `site` setting and `public/CNAME` are already configured for the custom domain. Do not add a repository-name `base` path while this domain is in use.

## Content sync

`npm run atlas:sync` refreshes country-guide content and images from the Illyrian Brains community forum. Review the resulting diff before committing it.
