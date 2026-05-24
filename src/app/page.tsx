import Link from "next/link";

const services = [
  {
    title: "AI Chatbot Agents",
    body:
      "Custom AI agents that process refunds, modify orders, and recommend products using your store's actual knowledge base. Not another generic chatbot that sounds corporate.",
    icon: (
      <>
        <path d="M4 6h16v10H8l-4 4V6z" />
        <path d="M9 11l1.5-1.5L12 11l1.5-1.5L15 11" />
        <path d="M18 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
      </>
    ),
  },
  {
    title: "Store Setup & Migration",
    body:
      "From Neto, Magento, or WooCommerce to Shopify. Full migration with zero downtime, SEO preservation, and proper GST configuration from day one.",
    icon: (
      <>
        <path d="M4 8h16l-1 12H5L4 8z" />
        <path d="M8 8V5a4 4 0 018 0v3" />
        <path d="M11 13l3 3-3 3" />
        <path d="M14 16H8" />
      </>
    ),
  },
  {
    title: "Custom App Development",
    body:
      "Private Shopify apps for your exact workflow — inventory automation, custom checkout logic, Australia Post eParcel integration, Xero sync, and Afterpay configuration.",
    icon: (
      <>
        <path d="M8 7l-4 5 4 5" />
        <path d="M16 7l4 5-4 5" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 10v-3" />
      </>
    ),
  },
  {
    title: "SSO & Authentication",
    body:
      "Single Sign-On for merchants with multiple web properties. One login across your storefront, B2B portal, and admin tools. SAML, OAuth, OpenID Connect — all protocols supported.",
    icon: (
      <>
        <circle cx="9" cy="10" r="3" />
        <path d="M9 13v3l-2 2 2 2 2-2-2-2" />
        <path d="M12 4l8 3v5c0 4-3 7-8 8" />
      </>
    ),
  },
  {
    title: "B2B Automation",
    body:
      "Automated company assignment, domain-based contact mapping, admin-approved registration, and granular access control for Shopify Plus B2B stores.",
    icon: (
      <>
        <path d="M3 20V8l6-4 6 4v12" />
        <path d="M3 20h18" />
        <path d="M15 12h6v8" />
        <path d="M7 11h2M7 14h2M7 17h2" />
      </>
    ),
  },
  {
    title: "SEO & Performance",
    body:
      "Core Web Vitals optimisation, structured data, GEO-ready content architecture. Your store found by Google AND AI shopping agents. EOFY and Click Frenzy campaign-ready.",
    icon: (
      <>
        <path d="M5 19l4-4" />
        <path d="M9 8a6 6 0 016 6c0 3-2 5-5 5l-1-1c0-3 2-5 5-5l1-1" />
        <circle cx="9" cy="15" r="1.5" />
      </>
    ),
  },
];

const auStrip = [
  "Australia Post eParcel Integration",
  "Afterpay & Zip Pay Ready",
  "Xero & MYOB Sync",
  "GST-Compliant From Day One",
  "Neto to Shopify Migration",
  "ACL-Compliant Policies",
  "EOFY Campaign Setup",
  "AEST Business Hours",
];

const trustBadges = [
  "12 Products Shipped",
  "AI-First Development",
  "Xero & Afterpay Ready",
  "AEST Hours",
];

export default function HomePage() {
  return (
    <main>
      {/* ============================================================
          HERO — two-column with embedded photo as strategic vector
      ============================================================ */}
      <section
        style={{
          background: "var(--bg-white)",
          padding: "80px 24px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(149,191,71,0.10) 0%, transparent 65%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: -180,
            left: -160,
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(0,128,96,0.08) 0%, transparent 65%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div
          className="hero-grid"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 56,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left: text + CTAs */}
          <div>
            <div className="section-eyebrow" style={{ marginBottom: 16 }}>
              Shopify Development · Australia
            </div>

            <h1
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: "clamp(34px, 5vw, 54px)",
                color: "var(--text-heading)",
                margin: 0,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Custom Shopify solutions for{" "}
              <span style={{ color: "var(--green-dark)", whiteSpace: "nowrap" }}>
                Australian e{"‑"}commerce
              </span>
              .
            </h1>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                color: "var(--text-muted)",
                maxWidth: 540,
                margin: "20px 0 0",
                lineHeight: 1.6,
              }}
            >
              AI agents, custom integrations, and automation for stores that have outgrown
              off-the-shelf apps. AEST business hours.
            </p>

            <div
              className="hero-ctas"
              style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}
            >
              <Link href="/contact" className="btn-primary">
                Get a Free Audit
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Case Studies
              </Link>
            </div>

            <div
              className="hero-trust"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px 24px",
                marginTop: 36,
                paddingTop: 24,
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              {trustBadges.map((t) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--text-muted)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--green-primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: full hero photo as embedded visual */}
          <div className="hero-photo-wrap">
            <img
              src="/lorduddit.png"
              alt="Uddit — Custom Shopify Development for Australian Merchants"
              className="hero-photo"
              loading="eager"
            />
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
              text-align: center;
            }
            .hero-ctas { justify-content: center; }
            .hero-trust { justify-content: center; }
          }
        `}</style>
      </section>

      {/* ============================================================
          TRUST / PROBLEM
      ============================================================ */}
      <section style={{ background: "var(--bg-cream)", padding: "72px 24px" }}>
        <p
          className="font-display"
          style={{
            fontWeight: 600,
            fontSize: "clamp(20px, 2.4vw, 26px)",
            color: "var(--text-heading)",
            textAlign: "center",
            maxWidth: 820,
            margin: "0 auto",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          52,000+ Shopify stores in Australia. The best ones need custom builds, not $29 apps.
        </p>

        <div className="stat-row">
          <div className="stat-block">
            <div className="stat-number">$51B</div>
            <div className="stat-label">AU E-Commerce Market</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">21%</div>
            <div className="stat-label">Fashion &amp; Apparel Share</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">12.8%</div>
            <div className="stat-label">Food &amp; Bev CAGR Growth</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">30%+</div>
            <div className="stat-label">Fashion Return Rates</div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES
      ============================================================ */}
      <section id="services" style={{ background: "var(--bg-white)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <div className="section-eyebrow">What I Build</div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                color: "var(--text-muted)",
                marginTop: 12,
              }}
            >
              Fixed scope. Delivered on time.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: 20,
              marginTop: 56,
            }}
          >
            {services.map((s) => (
              <div key={s.title} className="svc-card">
                <div className="svc-card-icon-wrap">
                  <svg
                    className="svc-card-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.7}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </div>
                <h3 className="svc-card-title">{s.title}</h3>
                <p className="svc-card-desc">{s.body}</p>
                <Link href="/contact" className="link-terracotta svc-card-link">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES PREVIEW
      ============================================================ */}
      <section style={{ background: "var(--bg-cream)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <div className="section-eyebrow">Recent Work</div>
            <h2
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: "clamp(28px, 3.6vw, 40px)",
                color: "var(--text-heading)",
                margin: "12px 0 0",
                letterSpacing: "-0.02em",
              }}
            >
              Work that shipped.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                color: "var(--text-muted)",
                marginTop: 12,
              }}
            >
              Real builds for real merchants.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              marginTop: 56,
            }}
          >
            <article className="cs-card">
              <div className="cs-card-img" />
              <div className="cs-card-body">
                <div className="cs-card-city">MELBOURNE, VIC</div>
                <h3 className="cs-card-title">Fashion Brand — Shopify Plus Migration + AI Size Recommendations</h3>
                <p className="cs-card-text"><strong>Problem:</strong> Stuck on a legacy platform with 30%+ return rates and no virtual sizing.</p>
                <p className="cs-card-text"><strong>Solution:</strong> Full migration to Shopify Plus with custom AI-powered size recommendation engine.</p>
                <p className="cs-card-text"><strong>Result:</strong> 40% drop in returns, 25% higher AOV within 3 months.</p>
                <Link href="/case-studies" className="link-terracotta" style={{ marginTop: 16, display: "inline-block" }}>
                  View case study →
                </Link>
              </div>
            </article>

            <article className="cs-card">
              <div className="cs-card-img" />
              <div className="cs-card-body">
                <div className="cs-card-city">SYDNEY, NSW</div>
                <h3 className="cs-card-title">Wellness Brand — Custom AI Customer Service Agent</h3>
                <p className="cs-card-text"><strong>Problem:</strong> App Store chatbot couldn&rsquo;t answer product-specific questions about supplement ingredients and dosages.</p>
                <p className="cs-card-text"><strong>Solution:</strong> Custom AI agent trained on their entire product knowledge base with ACL-compliant refund handling.</p>
                <p className="cs-card-text"><strong>Result:</strong> Customer service tickets dropped 60%, 80% of queries handled autonomously.</p>
                <Link href="/case-studies" className="link-terracotta" style={{ marginTop: 16, display: "inline-block" }}>
                  View case study →
                </Link>
              </div>
            </article>

            <article className="cs-card">
              <div className="cs-card-img" />
              <div className="cs-card-body">
                <div className="cs-card-city">BRISBANE, QLD</div>
                <h3 className="cs-card-title">B2B Supplier — Automated Company Assignment on Shopify Plus</h3>
                <p className="cs-card-text"><strong>Problem:</strong> Manual B2B onboarding — every new contact required admin verification, no domain mapping.</p>
                <p className="cs-card-text"><strong>Solution:</strong> Automated domain-based company assignment with granular access controls and admin-approved registration.</p>
                <p className="cs-card-text"><strong>Result:</strong> Onboarding time from 48hrs to instant for verified domains.</p>
                <Link href="/case-studies" className="link-terracotta" style={{ marginTop: 16, display: "inline-block" }}>
                  View case study →
                </Link>
              </div>
            </article>
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/case-studies" className="link-terracotta">
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          AU AWARENESS STRIP
      ============================================================ */}
      <section style={{ background: "var(--bg-mint)", padding: "32px 0", overflow: "hidden" }}>
        <div className="marquee-track">
          {[...auStrip, ...auStrip].map((item, i) => (
            <span key={`${item}-${i}`} className="au-strip-item">
              <span className="au-strip-dot" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ============================================================
          BLOG PREVIEW
      ============================================================ */}
      <section style={{ background: "var(--bg-white)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <div className="section-eyebrow">From the Blog</div>
            <h2
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: "clamp(28px, 3.6vw, 40px)",
                color: "var(--text-heading)",
                margin: "12px 0 0",
                letterSpacing: "-0.02em",
              }}
            >
              Practical guides. No fluff.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginTop: 48,
            }}
          >
            <Link href="/blog/sso-multi-store-login" style={{ textDecoration: "none" }}>
              <article className="blog-card">
                <div className="blog-card-img" />
                <div className="blog-card-body">
                  <div className="blog-card-cat">AUTHENTICATION</div>
                  <h3 className="blog-card-title">
                    How Single Sign-On Solves the Multi-Store Login Nightmare for Shopify Merchants
                  </h3>
                  <p className="blog-card-excerpt">
                    If you run more than one Shopify store, your customers are logging in multiple times. Here&rsquo;s how SSO
                    fixes it — and why it matters for AU brands scaling internationally.
                  </p>
                  <div className="link-terracotta" style={{ marginTop: 16 }}>Read more →</div>
                </div>
              </article>
            </Link>

            <Link href="/blog/b2b-company-assignment" style={{ textDecoration: "none" }}>
              <article className="blog-card">
                <div className="blog-card-img" />
                <div className="blog-card-body">
                  <div className="blog-card-cat">B2B AUTOMATION</div>
                  <h3 className="blog-card-title">
                    Automating B2B Company Assignment on Shopify Plus: The Complete Guide
                  </h3>
                  <p className="blog-card-excerpt">
                    Manual company onboarding breaks at scale. Domain-based contact mapping, admin-approved registration, and
                    granular access control — here&rsquo;s how to automate it.
                  </p>
                  <div className="link-terracotta" style={{ marginTop: 16 }}>Read more →</div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA — dark green block
      ============================================================ */}
      <section
        style={{
          background: "var(--bg-dark-green)",
          padding: "100px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(149,191,71,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <h2
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "var(--text-on-dark)",
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to upgrade your Shopify store?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              color: "var(--text-on-dark-muted)",
              marginTop: 16,
              lineHeight: 1.6,
            }}
          >
            Free 30-minute strategy call. No sales pitch. No hourly billing surprises. Just solutions.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--green-light)",
                color: "var(--bg-dark-green)",
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: 15,
                padding: "16px 40px",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              Book a Free Call
            </Link>
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: "var(--text-on-dark-muted)",
              opacity: 0.8,
              marginTop: 24,
            }}
          >
            Available during AEST business hours · All quotes in AUD · GST-inclusive pricing
          </p>
        </div>
      </section>
    </main>
  );
}
