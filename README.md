# Social Circle — Astro site

Astro + React islands + Tailwind CSS v4. No CMS: all content lives in `src/data/site.ts`.

## Setup

1. Copy the old project's `public/` folder into this project's `public/` (it needs `logo.png`, `Video/`, `logos/`, `worksamples/`, `headshots/`).
2. `npm install`
3. `npm run dev`

Build with `npm run build`; the static output in `dist/` can be uploaded anywhere (DreamHost, S3, etc.).

## Pulling the last content out of Sanity

Run this once before deleting the Sanity project, then copy the values into `src/data/site.ts`:

```bash
curl -s "https://4r33cqp7.apicdn.sanity.io/v2023-08-01/data/query/production" \
  --get --data-urlencode 'query=*[_type in ["review","service","myStory","clientLogo","clientMetric"]]{_type, order, title, description, text, name, date, stars, label, value, facebookUrl, cards, "logoUrl": logo.asset->url}' \
  | npx -y json > sanity-export.json
```

Any `logoUrl` values point at `cdn.sanity.io` — download those images into `public/logos/` so the site doesn't depend on Sanity.

## Structure

```
src/
  data/site.ts            all site content (services, reviews, metrics, logos, team…)
  layouts/Layout.astro    <head>, Google Analytics, global CSS
  pages/index.astro       the page
  components/
    Navbar.tsx            React island (mobile menu)       client:load
    Reveal.tsx            framer-motion fade/slide wrapper  client:load / client:visible
    Hero.astro
    OurWork.tsx           React island (lightbox)           client:visible
    Clients.astro         static logo marquee
    Metrics.tsx           React island (count-up numbers)   client:visible
    Services.astro
    Reviews.tsx           React island (carousel)           client:visible
    About.astro           static, CSS hover
    Contact.astro         static
  styles/global.css
```
