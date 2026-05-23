import Link from "next/link";
import HeroSemicircle from "@/components/HeroSemicircle";

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

export default function HomePage() {
  return (
    <main>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section
        className="noise"
        style={{
          background: "var(--charcoal)",
          padding: "80px 24px 100px",
          textAlign: "center",
        }}
      >
        <HeroSemicircle />

        <img
          src="/uddit-shopify.png"
          alt="Uddit — Shopify Developer"
          className="hero-photo"
          style={{ marginTop: -8 }}
        />

        <h1
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 48px)",
            color: "var(--cream)",
            maxWidth: 760,
            margin: "32px auto 0",
            lineHeight: 1.15,
          }}
        >
          Custom Shopify Solutions for Australian E-Commerce
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 18,
            color: "var(--coastal)",
            maxWidth: 560,
            margin: "16px auto 0",
            lineHeight: 1.55,
          }}
        >
          AI agents, custom integrations, and automation for stores that have outgrown off-the-shelf apps.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginTop: 32,
            flexWrap: "wrap",
          }}
        >
          <Link href="/contact" className="btn-primary">
            Get a Free Audit
          </Link>
          <Link href="/case-studies" className="btn-secondary">
            View Case Studies
          </Link>
        </div>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "var(--coastal)",
            opacity: 0.7,
            marginTop: 40,
            maxWidth: 720,
            margin: "40px auto 0",
            lineHeight: 1.7,
          }}
        >
          12 Products Shipped · Available AEST Hours · AI-First Development · Xero &amp; Afterpay Ready
        </p>
      </section>

      {/* ============================================================
          TRUST / PROBLEM
      ============================================================ */}
      <section style={{ background: "var(--sand)", padding: "60px 24px" }}>
        <p
          className="font-sans"
          style={{
            fontWeight: 500,
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "var(--charcoal)",
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto",
            lineHeight: 1.55,
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
      <section id="services" style={{ background: "var(--cream)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 36,
              color: "var(--charcoal)",
              textAlign: "center",
              margin: 0,
            }}
          >
            What I Build
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              color: "var(--coastal)",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Shopify solutions for Australian merchants who need more than a template
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginTop: 56,
            }}
          >
            {services.map((s) => (
              <div key={s.title} className="svc-card">
                <svg
                  className="svc-card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
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
      <section
        className="noise"
        style={{ background: "var(--charcoal)", padding: "100px 24px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 36,
              color: "var(--cream)",
              textAlign: "center",
              margin: 0,
            }}
          >
            Work That Shipped
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              color: "var(--coastal)",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Real builds for real merchants.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              marginTop: 56,
            }}
          >
            <article className="cs-card">
              <div className="cs-card-img" style={{ background: "linear-gradient(135deg,#3a3a3a,#525252)" }} />
              <div className="cs-card-body">
                <div className="cs-card-city">MELBOURNE, VIC</div>
                <h3 className="cs-card-title">Fashion Brand — Shopify Plus Migration + AI Size Recommendations</h3>
                <p className="cs-card-text"><strong style={{color:"var(--cream)"}}>Problem:</strong> Stuck on a legacy platform with 30%+ return rates and no virtual sizing.</p>
                <p className="cs-card-text"><strong style={{color:"var(--cream)"}}>Solution:</strong> Full migration to Shopify Plus with custom AI-powered size recommendation engine.</p>
                <p className="cs-card-text"><strong style={{color:"var(--cream)"}}>Result:</strong> 40% drop in returns, 25% higher AOV within 3 months.</p>
                <Link href="/case-studies" className="link-terracotta" style={{ marginTop: 16, display: "inline-block" }}>
                  View case study →
                </Link>
              </div>
            </article>

            <article className="cs-card">
              <div className="cs-card-img" style={{ background: "linear-gradient(135deg,#3a3a3a,#525252)" }} />
              <div className="cs-card-body">
                <div className="cs-card-city">SYDNEY, NSW</div>
                <h3 className="cs-card-title">Wellness Brand — Custom AI Customer Service Agent</h3>
                <p className="cs-card-text"><strong style={{color:"var(--cream)"}}>Problem:</strong> App Store chatbot couldn&rsquo;t answer product-specific questions about supplement ingredients and dosages.</p>
                <p className="cs-card-text"><strong style={{color:"var(--cream)"}}>Solution:</strong> Custom AI agent trained on their entire product knowledge base with ACL-compliant refund handling.</p>
                <p className="cs-card-text"><strong style={{color:"var(--cream)"}}>Result:</strong> Customer service tickets dropped 60%, 80% of queries handled autonomously.</p>
                <Link href="/case-studies" className="link-terracotta" style={{ marginTop: 16, display: "inline-block" }}>
                  View case study →
                </Link>
              </div>
            </article>

            <article className="cs-card">
              <div className="cs-card-img" style={{ background: "linear-gradient(135deg,#3a3a3a,#525252)" }} />
              <div className="cs-card-body">
                <div className="cs-card-city">BRISBANE, QLD</div>
                <h3 className="cs-card-title">B2B Supplier — Automated Company Assignment on Shopify Plus</h3>
                <p className="cs-card-text"><strong style={{color:"var(--cream)"}}>Problem:</strong> Manual B2B onboarding — every new contact required admin verification, no domain mapping.</p>
                <p className="cs-card-text"><strong style={{color:"var(--cream)"}}>Solution:</strong> Automated domain-based company assignment with granular access controls and admin-approved registration.</p>
                <p className="cs-card-text"><strong style={{color:"var(--cream)"}}>Result:</strong> Onboarding time from 48hrs to instant for verified domains.</p>
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
          AUSTRALIAN AWARENESS STRIP
      ============================================================ */}
      <section style={{ background: "var(--sand)", padding: "48px 0", overflow: "hidden" }}>
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
      <section style={{ background: "var(--cream)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 36,
              color: "var(--charcoal)",
              textAlign: "center",
              margin: 0,
            }}
          >
            From the Blog
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 32,
              marginTop: 48,
            }}
          >
            <Link href="/blog/sso-multi-store-login" style={{ textDecoration: "none" }}>
              <article className="blog-card">
                <div className="blog-card-img" style={{ background: "linear-gradient(135deg,#5B7B5E,#3a5a3d)" }} />
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
                <div className="blog-card-img" style={{ background: "linear-gradient(135deg,#C4704B,#8a4d33)" }} />
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
          CTA
      ============================================================ */}
      <section
        className="noise"
        style={{ background: "var(--charcoal)", padding: "100px 24px", textAlign: "center" }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "var(--cream)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Ready to upgrade your Shopify store?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              color: "var(--coastal)",
              marginTop: 12,
              lineHeight: 1.6,
            }}
          >
            Free 30-minute strategy call. No sales pitch. No hourly billing surprises. Just solutions.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: "16px 40px", fontSize: 15 }}
            >
              Book a Free Call
            </Link>
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: "var(--coastal)",
              opacity: 0.6,
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
