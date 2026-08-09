import { useEffect } from "react";
import { SITE, DEFAULT_IMAGE, getRouteMeta } from "@/seo/routeMeta";

const root = getRouteMeta("/")!;
const DEFAULT_TITLE = root.title;
const DEFAULT_DESCRIPTION = root.description;

interface PageMetaProps {
  /** Page title. Suffixed with " | Relay" unless exactTitle is true. */
  title: string;
  description: string;
  /** Route path, e.g. "/b2b". Used for canonical + og:url. */
  path: string;
  /** Use the title verbatim (no " | Relay" suffix). */
  exactTitle?: boolean;
  /** Absolute https URL for og:image / twitter:image. */
  image?: string;
  twitterCard?: string;
}

function setMeta(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.href = href;
}

export function PageMeta({
  title,
  description,
  path,
  exactTitle = false,
  image = DEFAULT_IMAGE,
  twitterCard = "summary_large_image",
}: PageMetaProps) {
  useEffect(() => {
    const fullTitle = exactTitle ? title : `${title} | Relay`;
    const url = `${SITE}${path === "/" ? "" : path}`;

    document.title = fullTitle;

    setMeta("name", "author", "Relay");
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:card", twitterCard);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setCanonical(url);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta("name", "description", DEFAULT_DESCRIPTION);
      setMeta("property", "og:title", DEFAULT_TITLE);
      setMeta("property", "og:description", DEFAULT_DESCRIPTION);
      setMeta("property", "og:url", SITE);
      setMeta("property", "og:image", DEFAULT_IMAGE);
      setMeta("name", "twitter:card", "summary_large_image");
      setMeta("name", "twitter:title", DEFAULT_TITLE);
      setMeta("name", "twitter:description", DEFAULT_DESCRIPTION);
      setMeta("name", "twitter:image", DEFAULT_IMAGE);
      setCanonical(SITE);
    };
  }, [title, description, path, exactTitle, image, twitterCard]);

  return null;
}
