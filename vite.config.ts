import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { routeMeta, canonicalFor, DEFAULT_IMAGE } from "./src/seo/routeMeta";

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Emits route-specific static HTML shells (dist/b2b/index.html, dist/local/index.html, ...)
 * so crawlers hitting "View Source" get the correct <head> without executing JS.
 */
function staticHeadPrerender(): Plugin {
  return {
    name: "relay-static-head-prerender",
    apply: "build",
    closeBundle() {
      const outDir = path.resolve(__dirname, "dist");
      const shellPath = path.join(outDir, "index.html");
      if (!fs.existsSync(shellPath)) return;
      const shell = fs.readFileSync(shellPath, "utf8");

      for (const route of routeMeta) {
        const title = escapeAttr(route.title);
        const description = escapeAttr(route.description);
        const url = canonicalFor(route.path);
        const image = route.image ?? DEFAULT_IMAGE;
        const card = route.twitterCard ?? "summary_large_image";

        const html = shell
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
          .replace(
            /<meta name="description"[^>]*>/,
            `<meta name="description" content="${description}" />`,
          )
          .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
          .replace(
            /<meta property="og:title"[^>]*>/,
            `<meta property="og:title" content="${title}" />`,
          )
          .replace(
            /<meta property="og:description"[^>]*>/,
            `<meta property="og:description" content="${description}" />`,
          )
          .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
          .replace(
            /<meta property="og:image"[^>]*>/,
            `<meta property="og:image" content="${image}" />`,
          )
          .replace(
            /<meta name="twitter:card"[^>]*>/,
            `<meta name="twitter:card" content="${card}" />`,
          )
          .replace(
            /<meta name="twitter:title"[^>]*>/,
            `<meta name="twitter:title" content="${title}" />`,
          )
          .replace(
            /<meta name="twitter:description"[^>]*>/,
            `<meta name="twitter:description" content="${description}" />`,
          )
          .replace(
            /<meta name="twitter:image"[^>]*>/,
            `<meta name="twitter:image" content="${image}" />`,
          );

        const target =
          route.path === "/"
            ? shellPath
            : path.join(outDir, route.path.replace(/^\//, ""), "index.html");
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, html);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    staticHeadPrerender(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
