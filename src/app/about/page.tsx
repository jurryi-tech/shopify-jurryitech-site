import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "No fluff, no hourly billing surprises — just Shopify builds that work. Based in Delhi, available AEST hours, serving Australian merchants with fixed-price quotes in AUD.",
};

const stackColumns = [
  {
    title: "Shopify Core",
    items: [
      "Shopify / Shopify Plus",
      "Liquid",
      "Hydrogen",
      "Storefront API",
      "Admin API",
      "Shopify Functions",
      "Shopify Flow",
      "Shopify MCP Server",
    ],
  },
  {
    title: "AU Integrations",
    items: [
      "Australia Post eParcel",
      "Starshipit",
      "Shippit",
      "Afterpay",
      "Zip Pay",
      "Xero",
      "MYOB",
      "A2X",
      "Klaviyo",
      "Recharge",
    ],
  },
  {
    title: "AI & Custom",
    items: [
      "Custom AI Agents",
      "RAG Pipelines",
      "OpenAI",
      "Claude API",
      "LangChain",
      "SSO (SAML, OAuth, OIDC)",
      "React Native",
      "Swift",
      "Kotlin",
      "Flutter",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Free Strategy Call",
    body: "30 minutes. You tell me the problem. I tell you if I can fix it. No pitch.",
  },
  {
    n: "02",
    title: "Fixed-Price Quote in AUD",
    body: "Scope document + timeline + price. GST-inclusive. No hourly billing.",
  },
  {
    n: "03",
    title: "Build & Ship",
    body: "Weekly updates. You see progress every Friday. Not a black box.",
  },
  {
    n: "04",
    title: "Handoff & Support",
    body: "Documentation, training, 30 days of support after launch. You own everything.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{ background: "var(--bg-white)", padding: "100px 24px", position: "relative", overflow: "hidden" }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(149,191,71,0.10) 0%, transparent 65%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="about-hero-grid"
        >
          <div>
            <div className="section-eyebrow">ABOUT</div>
            <h1
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "var(--text-heading)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                margin: "16px 0 24px",
              }}
            >
              No fluff. No hourly billing surprises. Just Shopify builds that actually work.
            </h1>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                color: "var(--text-body)",
                lineHeight: 1.7,
                maxWidth: 520,
              }}
            >
              <p style={{ margin: "0 0 16px" }}>
                I build custom Shopify solutions — AI agents, store migrations, private apps, and authentication systems.
                I&rsquo;ve shipped 12 products across iOS and Android, and now I focus entirely on helping Shopify merchants
                who&rsquo;ve outgrown what the App Store can do.
              </p>
              <p style={{ margin: "0 0 16px" }}>
                I&rsquo;m based in Delhi, work during AEST business hours, and I&rsquo;ve spent enough time in the Australian
                e-commerce ecosystem to know that your store needs Australia Post eParcel — not a generic courier API. That
                it needs Afterpay at checkout, Xero in the backend, and GST configured properly before you sell a single item.
              </p>
              <p style={{ margin: 0 }}>
                I don&rsquo;t do hourly billing. I quote fixed prices in AUD, scope the work upfront, and deliver on time.
                If something changes, we talk about it like adults — no surprise invoices.
              </p>
            </div>
          </div>

          <div>
            <img
              src="/lorduddit.png"
              alt="Uddit"
              style={{ width: "100%", maxWidth: 360, display: "block", margin: "0 auto" }}
            />
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .about-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
              text-align: center;
            }
          }
        `}</style>
      </section>

      {/* STACK */}
      <section style={{ background: "var(--sand)", padding: "80px 24px" }}>
        <h2
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: 28,
            color: "var(--text-heading)",
            textAlign: "center",
            margin: "0 0 48px",
          }}
        >
          The Stack I Work With
        </h2>

        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 48,
          }}
        >
          {stackColumns.map((col) => (
            <div key={col.title}>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--terracotta)",
                  margin: "0 0 20px",
                }}
              >
                {col.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "var(--text-heading)",
                      padding: "4px 0",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "var(--cream)", padding: "80px 24px" }}>
        <h2
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: 28,
            color: "var(--text-heading)",
            textAlign: "center",
            margin: "0 0 56px",
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 32,
          }}
        >
          {steps.map((s) => (
            <div key={s.n}>
              <div
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: 48,
                  color: "var(--terracotta)",
                  opacity: 0.4,
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {s.n}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "var(--text-heading)",
                  margin: "0 0 8px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
