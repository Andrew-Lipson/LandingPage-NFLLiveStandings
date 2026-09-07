# NFL Live Standings landing page

The search-facing website at [nfllivestandings.com](https://nfllivestandings.com). It explains live NFL standings, playoff positions, and first-round draft order, then links visitors to the separately maintained standings app.

Built with Astro 4 and Tailwind CSS, based on [AstroWind](https://github.com/onwidget/astrowind).

## Development

```sh
npm ci
npm run dev
```

| Command                       | Purpose                                              |
| ----------------------------- | ---------------------------------------------------- |
| `npm run dev`                 | Start the local development server                   |
| `npm run build`               | Generate the static site in `dist/`                  |
| `npm run preview`             | Serve the built site locally                         |
| `npm run check`               | Run Astro type checks, ESLint, and Prettier          |
| `npm run generate:seo-assets` | Regenerate the committed PNG favicon and social card |

## Content and SEO

The primary search phrases are "real-time NFL standings" and "realtime NFL standings". The title, main heading, description, and visible copy use these naturally while keeping the product name "NFL Live Standings" consistent.

- `src/pages/index.astro` contains the landing page and its JSON-LD graph. The website and page URLs identify the landing page; the application URL identifies the linked product.
- `src/config.yaml` defines the canonical site, default description, social metadata, locale, and Search Console verification tag.
- `src/data/landing.ts` holds shared product facts and common questions used by the visible page and machine-readable summaries. Publish only confirmed claims. Pricing, publisher details, and a scores-provider attribution are intentionally absent until confirmed.
- `src/pages/llms.txt.ts` generates `/llms.txt`. It is an optional discovery guide for agents.
- `src/pages/index.md.ts` generates `/index.md`, a Markdown overview linked from the homepage and llms.txt. It has a canonical response link to the homepage and `noindex` hosting headers so search results target the HTML landing page.
- `public/robots.txt` allows crawling and advertises `/sitemap-index.xml`. Astro generates the sitemap index and `/sitemap-0.xml`; the sitemap filter includes only the homepage. Update that filter if new indexable HTML pages are added.
- `src/pages/404.astro` emits `noindex,follow`. Hosting headers also mark direct `/404` and `/404.html` requests `noindex`.

The app is an outbound destination, not an SEO target for this repository. Nothing here configures its crawling or indexing.

## Images

`src/components/StandingsPreview.astro` renders the illustrative AFC example as an accessible HTML table. Its compact rows, movement badges, conference header, and playoff cutoff follow `TeamCard.tsx` and `StandingsBoard.tsx` in the sibling `NFLLIVESTANDINGS-UI` project. The four logos in `public/team-logos/` come from that app. The preview uses local Latin subsets of Sora and Barlow Semi Condensed from Google Fonts, with licenses in `src/assets/fonts/`. It adapts to the available column width and the page's theme without JavaScript. Example records are static and labeled as illustrative.

`src/components/ThemeScreenshot.astro` imports the light and dark screenshots from `public/screenshots/` through the homepage. Astro generates responsive WebP variants at build time. The component uses semantic `picture` and `img` elements, native lazy loading below the fold, and a high-priority hero image. Its source selection follows the page's theme toggle and saved preference. With JavaScript disabled, the browser selects an image using its color-scheme preference.

To change the favicon or sharing image:

1. Edit `public/favicon.svg` or `src/assets/images/social-card.svg`. The sharing card also uses `public/screenshots/division-desktop-light.png`.
2. Run `npm run generate:seo-assets`.
3. Review and commit `public/favicon.png` and `public/og-image.png` with the sources.

The PNG favicon is 96 × 96; the Open Graph image is 1200 × 630. The SVG remains available for browser use. Asset generation uses Sharp and local system fonts, so review the card if regenerating it on another machine.

## Deploy and verify

The site is hosted on Netlify. Run `npm run check` and `npm run build`, then deploy through the existing Netlify workflow. `netlify.toml` sets the build command and publishes `dist/`. Astro copies `public/_headers` into `dist/_headers`, where Netlify reads the response-header rules. Astro preview does not apply Netlify's hosting configuration.

After deployment:

- Confirm the homepage's title, canonical, JSON-LD, sharing image, and favicon in the public response.
- Confirm `/robots.txt`, both sitemap XML files, `/llms.txt`, and `/index.md` return their actual content rather than an HTML fallback.
- Confirm `/index.md` returns its Markdown content type, canonical link, and `X-Robots-Tag: noindex`.
- Check a nonexistent URL returns HTTP 404. Netlify may serve `/404` itself with 200; the page and response `noindex` directives cover that direct URL.
- Check real search-crawler requests in Netlify's logs and review any access controls. A permissive robots file does not override hosting restrictions.
- Confirm the landing page and sitemap in Google Search Console and Bing Webmaster Tools. A verification tag in source does not prove account verification or indexing.
- Measure the deployed site's mobile performance and field Core Web Vitals. Local Lighthouse results are lab measurements.

See [SEO-AUDIT.md](SEO-AUDIT.md) for the audit, implementation status, and external checks.

## License

Based on AstroWind by [onWidget](https://onwidget.com), under the [MIT license](LICENSE.md).
