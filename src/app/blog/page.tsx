import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical Shopify guides for Australian merchants. SSO, B2B automation, custom AI agents, migrations. No fluff.",
};

const posts = [
  {
    slug: "sso-multi-store-login",
    category: "AUTHENTICATION",
    title: "How Single Sign-On Solves the Multi-Store Login Nightmare for Shopify Merchants",
    excerpt:
      "If you run more than one Shopify store, your customers are logging in multiple times. Here's how SSO fixes it — and why it matters for AU brands scaling internationally.",
    imgBg: "linear-gradient(135deg,#5B7B5E,#3a5a3d)",
    read: "8 min read",
    date: "24 May 2026",
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
  },
];

export default function BlogIndex() {
  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh", padding: "80px 24px 100px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <h1
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: 36,
            color: "var(--text-heading)",
            margin: 0,
          }}
        >
          Blog
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            color: "var(--text-muted)",
            margin: "8px 0 48px",
            lineHeight: 1.6,
          }}
        >
          Practical guides for Australian Shopify merchants. No fluff.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: 28,
                  background: "var(--sand)",
                  borderRadius: 12,
                  padding: 24,
                  alignItems: "center",
                }}
                className="blog-list-item"
              >
                <div
                  style={{
                    width: "100%",
                    height: 140,
                    borderRadius: 8,
                    background: p.imgBg,
                  }}
                />
                <div>
                  <div className="blog-card-cat">{p.category}</div>
                  <h2
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: 20,
                      color: "var(--text-heading)",
                      margin: "8px 0",
                      lineHeight: 1.35,
                    }}
                  >
                    {p.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      color: "var(--text-heading)",
                      opacity: 0.7,
                      margin: "0 0 12px",
                      lineHeight: 1.55,
                    }}
                  >
                    {p.excerpt}
                  </p>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      color: "var(--text-muted)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {p.date} · {p.read}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .blog-list-item {
            grid-template-columns: 1fr !important;
          }
          .blog-list-item > div:first-child {
            height: 180px !important;
          }
        }
      `}</style>
    </main>
  );
}
