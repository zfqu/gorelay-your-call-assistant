export const SITE = "https://gorelay.ai";
export const DEFAULT_IMAGE = `${SITE}/logo-light.png`;

export interface RouteMeta {
  /** Route path, e.g. "/b2b" */
  path: string;
  title: string;
  description: string;
  image?: string;
  twitterCard?: string;
}

/**
 * Single source of truth for route-level head metadata.
 * Consumed at build time by the prerender plugin (vite.config.ts) and
 * at runtime by <PageMeta /> for client-side navigation.
 */
export const routeMeta: RouteMeta[] = [
  {
    path: "/",
    title: "Relay | AI-Native Revenue Engines for B2B & Local Businesses",
    description:
      "Relay powers high-growth B2B companies and local service businesses with owned revenue automation-from B2B outbound prospecting to instant speed-to-lead followup.",
  },
  {
    path: "/b2b",
    title: "Relay B2B | AI-Native Revenue OS, Inbound & Outbound Automation",
    description:
      "Automate B2B lead discovery, enrichment, LLM copy synthesis, real-time inbound lead capture & qualification. SDRs review and approve qualified leads directly inside Slack.",
  },
  {
    path: "/local",
    title: "Relay Local | AI Sales Automation for Local Service Businesses",
    description:
      "Relay helps local service businesses capture every lead, follow up instantly, and reactivate cold leads - so you never lose a customer to slow response again.",
  },
];

export function getRouteMeta(path: string): RouteMeta | undefined {
  return routeMeta.find((r) => r.path === path);
}

export const canonicalFor = (path: string) => `${SITE}${path === "/" ? "" : path}`;
