# Project architecture

- Public pages use the shared Navigation, Footer, and PageMeta components so navigation and page identity stay consistent.
- Register static page metadata in src/seo/routeMeta.ts for the existing Vite static-head generation and runtime metadata to remain aligned.
- Uploaded page media uses imported Lovable Assets JSON pointers so binary uploads stay outside the source repository.