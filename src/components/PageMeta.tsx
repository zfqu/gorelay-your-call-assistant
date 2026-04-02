import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
}

export function PageMeta({ title, description, path }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = `${title} | Relay`;
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", `https://gorelay.ai${path}`);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.href = `https://gorelay.ai${path}`;

    return () => {
      document.title = "Never Miss a Lead | Missed Call Text Back & Lead Follow-Up for Contractors | Relay";
      setMeta("name", "description", "Automatically text back missed calls, respond to website leads instantly, and get more 5-star reviews. Relay helps contractors capture more leads and win more jobs.");
      if (canonical) canonical.href = "https://gorelay.ai";
    };
  }, [title, description, path]);

  return null;
}
