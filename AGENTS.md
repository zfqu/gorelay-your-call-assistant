# Project architecture

- Public pages use the shared Navigation, Footer, and PageMeta components so navigation and page identity stay consistent.
- Register static page metadata in src/seo/routeMeta.ts for the existing Vite static-head generation and runtime metadata to remain aligned.
- Page images that must render on the live site go in public/ and are referenced by absolute path (e.g. /zheng-founder.jpg), because the site is deployed via GitHub to Cloudflare Pages which cannot serve Lovable Assets pointer URLs.