export const SITE_URL = "https://shopify.jurryitech.com";
export const SITE_NAME = "Uddit Shopify Development";
export const AUTHOR = "Uddit";

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  imgBg: string;
  read: string;
  /** Human-readable display date */
  date: string;
  /** ISO 8601 date used for sitemaps and structured data */
  dateISO: string;
};

export const posts: Post[] = [
  {
    slug: "best-shopify-stores",
    category: "INSPIRATION",
    title: "39 Beautiful Shopify Stores Worth Stealing Ideas From",
    excerpt:
      "A curated tour of 39 of the best-designed, highest-converting Shopify stores — and the specific design and UX moves that make each one work.",
    imgBg: "linear-gradient(135deg,#C4A890,#8a6f57)",
    read: "14 min read",
    date: "31 May 2026",
    dateISO: "2026-05-31",
  },
  {
    slug: "sso-multi-store-login",
    category: "AUTHENTICATION",
    title: "How Single Sign-On Solves the Multi-Store Login Nightmare for Shopify Merchants",
    excerpt:
      "If you run more than one Shopify store, your customers are logging in multiple times. Here's how SSO fixes it — and why it matters for AU brands scaling internationally.",
    imgBg: "linear-gradient(135deg,#5B7B5E,#3a5a3d)",
    read: "8 min read",
    date: "24 May 2026",
    dateISO: "2026-05-24",
  },
  {
    slug: "b2b-company-assignment",
    category: "B2B AUTOMATION",
    title: "Automating B2B Company Assignment on Shopify Plus: The Complete Guide",
    excerpt:
      "Manual company onboarding breaks at scale. Domain-based contact mapping, admin-approved registration, and granular access control — here's how to automate it.",
    imgBg: "linear-gradient(135deg,#C4704B,#8a4d33)",
    read: "10 min read",
    date: "18 May 2026",
    dateISO: "2026-05-18",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
