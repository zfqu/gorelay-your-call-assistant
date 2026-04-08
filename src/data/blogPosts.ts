export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  thumbnail: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "speed-to-lead-home-services",
    title: "Why Speed to Lead Matters for Home Service Businesses (And How to Fix It)",
    excerpt: "Most contractors don't need more leads — they need to respond faster. Here's why speed to lead directly impacts how many jobs you win.",
    date: "2026-04-08",
    thumbnail: "/src/assets/blog-speed-to-lead.jpg",
  },
  {
    slug: "get-more-google-reviews-home-services-contractors",
    title: "How to Get More Google Reviews for Trades",
    excerpt: "Most customers don't leave reviews because they forget. Here's how to ask at the right time and consistently get more 5-star reviews.",
    date: "2026-04-06",
    thumbnail: "/src/assets/blog-google-reviews.jpg",
  },
  {
    slug: "missed-call-text-back-hvac-plumbing",
    title: "How to Automatically Text Back Missed Calls for HVAC & Plumbing Businesses",
    excerpt: "If you miss a call, chances are they're already calling the next company. Here's how to respond instantly and win more jobs.",
    date: "2026-04-04",
    thumbnail: "/src/assets/blog-missed-call.jpg",
  },
];
