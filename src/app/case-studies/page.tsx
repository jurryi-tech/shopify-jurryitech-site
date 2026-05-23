import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real Shopify builds for Australian merchants. Shopify Plus migrations, custom AI agents, B2B automation. Shipped, live, generating results.",
};

const studies = [
  {
    bg: "var(--sand)",
    city: "MELBOURNE, VIC",
    title: "Fashion Brand — Shopify Plus Migration + AI Size Recommendations",
    industry: "Fashion & Apparel",
    challenge:
      "A Melbourne-based contemporary fashion label was stuck on a legacy platform with return rates exceeding 30%. No virtual sizing. Manual inventory sync. Their Neto store couldn't handle international expansion to NZ and UK markets.",
    solution:
      "Full migration to Shopify Plus with three expansion stores for international pricing. Custom AI-powered size recommendation engine trained on their return data. Australia Post eParcel integration with postcode-based smart shipping rules. Afterpay and Zip Pay at checkout. Xero sync for clean BAS lodgement.",
    results: [
      { stat: "40%", label: "Drop in returns" },
      { stat: "25%", label: "Higher AOV" },
      { stat: "3", label: "International storefronts launched" },
    ],
    tech: ["Shopify Plus", "AI/ML", "Australia Post", "Afterpay", "Xero"],
    imgBg: "linear-gradient(135deg,#d4c4b0,#a8907a)",
  },
  {
    bg: "var(--cream)",
    city: "SYDNEY, NSW",
    title: "Wellness Brand — Custom AI Customer Service Agent",
    industry: "Health & Supplements",
    challenge:
      "A Sydney wellness brand selling bio-fermented supplements had an AI chatbot from the App Store that couldn't answer product-specific questions. Customers asked about ingredient interactions, dosages for specific conditions, and contraindications — the chatbot gave generic answers or escalated everything to human agents.",
    solution:
      "Custom AI agent built on their complete product knowledge base — ingredient lists, clinical studies, dosage guides, and contraindication data. ACL-compliant refund handling built into the agent's decision logic. The agent processes returns, checks order status, and recommends products based on the customer's health goals — all without human intervention.",
    results: [
      { stat: "60%", label: "Drop in support tickets" },
      { stat: "80%", label: "Queries handled autonomously" },
      { stat: "$0", label: "Additional monthly app fees" },
    ],
    tech: ["Claude API", "RAG Pipeline", "Shopify Admin API", "ACL Compliance"],
    imgBg: "linear-gradient(135deg,#a8c4a8,#7a9a7d)",
  },
  {
    bg: "var(--sand)",
    city: "BRISBANE, QLD",
    title: "B2B Supplier — Automated Company Assignment on Shopify Plus",
    industry: "Wholesale Distribution",
    challenge:
      "A Brisbane-based wholesale supplier selling to gyms, clinics, and retail chains across Queensland and NSW was manually onboarding every B2B contact. Each new company required admin to create a profile, verify domains, assign users, and set catalogue visibility rules. With 50+ new B2B contacts per month, the admin team spent more time on onboarding than selling.",
    solution:
      "Automated three-pillar B2B system: admin-approved company registration, domain-based automated contact assignment (@verified-domain.com.au employees auto-mapped to their company), and granular access controls — wholesale pricing visible only to verified B2B contacts, general catalogue visible to everyone else. SSO integration with their existing corporate identity provider.",
    results: [
      { stat: "Instant", label: "Onboarding for verified domains" },
      { stat: "3×", label: "Faster B2B contact processing" },
      { stat: "Zero", label: "Manual assignment needed" },
    ],
    tech: ["Shopify Plus B2B", "SSO", "Domain Mapping", "Shopify Functions"],
    imgBg: "linear-gradient(135deg,#c4a890,#a08570)",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{ background: "var(--bg-white)", padding: "80px 24px", textAlign: "center" }}
      >
        <div className="section-eyebrow">Case Studies</div>
        <h1
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 48px)",
            color: "var(--text-heading)",
            margin: "12px 0 0",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
          }}
        >
          Work that shipped.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            color: "var(--text-muted)",
            maxWidth: 640,
            margin: "16px auto 0",
            lineHeight: 1.6,
          }}
        >
          Real builds for Australian merchants. No mockups. No concepts. Shipped, live, and generating results.
        </p>
      </section>

      {/* CASE STUDIES */}
      {studies.map((cs, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={cs.title}
            style={{ background: cs.bg, padding: "80px 24px" }}
          >
            <div
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
                alignItems: "center",
                direction: reversed ? "rtl" : "ltr",
              }}
              className="cs-grid"
            >
              <div
                style={{
                  direction: "ltr",
                  height: 360,
                  borderRadius: 8,
                  background: cs.imgBg,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                }}
              />

              <div style={{ direction: "ltr" }}>
                <div className="section-eyebrow">{cs.city}</div>
                <h2
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: 28,
                    color: "var(--text-heading)",
                    margin: "12px 0 8px",
                    lineHeight: 1.25,
                  }}
                >
                  {cs.title}
                </h2>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    color: "var(--text-muted)",
                    marginBottom: 24,
                  }}
                >
                  {cs.industry}
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: 13,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--terracotta)",
                      marginBottom: 6,
                    }}
                  >
                    Challenge
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      color: "var(--text-heading)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {cs.challenge}
                  </p>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: 13,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--terracotta)",
                      marginBottom: 6,
                    }}
                  >
                    Solution
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      color: "var(--text-heading)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {cs.solution}
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 16,
                    marginBottom: 24,
                  }}
                >
                  {cs.results.map((r) => (
                    <div key={r.label}>
                      <div
                        className="font-display"
                        style={{ fontWeight: 700, fontSize: 28, color: "var(--terracotta)", lineHeight: 1 }}
                      >
                        {r.stat}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 12,
                          color: "var(--text-heading)",
                          opacity: 0.7,
                          marginTop: 4,
                          lineHeight: 1.4,
                        }}
                      >
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  {cs.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section
        style={{ background: "var(--bg-dark-green)", padding: "80px 24px", textAlign: "center" }}
      >
        <h2
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 38px)",
            color: "var(--text-on-dark)",
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          Your store could be next.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            color: "var(--text-on-dark-muted)",
            margin: "12px auto 32px",
            maxWidth: 520,
            lineHeight: 1.6,
          }}
        >
          Free 30-minute call. AUD pricing. AEST hours. No hourly billing.
        </p>
        <Link href="/contact" className="btn-primary" style={{ padding: "16px 40px", fontSize: 15 }}>
          Book a Free Call
        </Link>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .cs-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            direction: ltr !important;
          }
        }
      `}</style>
    </main>
  );
}
