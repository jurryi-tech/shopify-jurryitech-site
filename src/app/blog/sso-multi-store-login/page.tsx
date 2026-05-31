import type { Metadata } from "next";
import Link from "next/link";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "How SSO Solves the Multi-Store Shopify Login Nightmare",
  description:
    "Single Sign-On for Shopify merchants running multiple storefronts. SAML, OAuth, OpenID Connect — what to choose, how it works, and why AU brands scaling internationally need it.",
  alternates: { canonical: "/blog/sso-multi-store-login" },
  openGraph: {
    type: "article",
    url: "/blog/sso-multi-store-login",
    images: ["/opengraph-image"],
    title: "How SSO Solves the Multi-Store Shopify Login Nightmare",
    description:
      "Single Sign-On for Shopify merchants running multiple storefronts. SAML, OAuth, OpenID Connect — what to choose, how it works, and why AU brands scaling internationally need it.",
    publishedTime: "2026-05-24",
    authors: ["Uddit"],
  },
};

export default function Post() {
  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <ArticleJsonLd slug="sso-multi-store-login" />
      {/* Cover */}
      <div
        style={{
          width: "100%",
          height: 300,
          background: "linear-gradient(135deg,#5B7B5E,#3a5a3d)",
        }}
      />

      <article style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <img
            src="/lorduddit.png"
            alt="Uddit"
            style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", objectPosition: "top" }}
          />
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-heading)" }}>
              Uddit
            </div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)" }}>
              24 May 2026 · 8 min read
            </div>
          </div>
        </div>

        <div className="blog-card-cat" style={{ marginBottom: 12 }}>
          AUTHENTICATION
        </div>

        <h1
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 36px)",
            color: "var(--text-heading)",
            margin: "0 0 32px",
            lineHeight: 1.2,
          }}
        >
          How Single Sign-On Solves the Multi-Store Login Nightmare for Shopify Merchants
        </h1>

        <div className="post-prose">
          <p>
            If you&rsquo;re running more than one Shopify storefront — a flagship Australian store, an NZ expansion store, a
            B2B portal, maybe a UK store — your customers are dealing with something quietly miserable: multiple logins. They
            sign up on one. They get a password reset email from another. They forget which email they used where. Eventually
            they stop coming back.
          </p>

          <p>
            Single Sign-On (SSO) fixes this. One login. One identity. Every store you own recognises the same customer. This
            article walks through what SSO is on Shopify, which protocol to choose, and how to implement it without breaking
            your existing customer base.
          </p>

          <h2>The actual problem you&rsquo;re solving</h2>

          <p>
            Shopify treats every storefront as a separate customer database by default. A customer of{" "}
            <code>yourbrand.com.au</code> has zero relationship with a customer of <code>yourbrand.co.nz</code>, even if it&rsquo;s
            the same person. They&rsquo;ll need to register twice. Receive marketing emails twice (or worse — only on one).
            Earn loyalty points twice. Get two different order histories.
          </p>

          <p>
            For an AU brand scaling into NZ, UK, or US markets, this means your loyalty programme breaks at the border. A
            customer who spent $2,000 on your AU store and then visits your UK store is treated as a stranger.
          </p>

          <h2>What SSO actually does</h2>

          <p>
            SSO introduces a single identity provider that sits between your customer and all your storefronts. When the
            customer logs in once, every Shopify storefront you own trusts that authentication. Three protocols are commonly
            used:
          </p>

          <ul>
            <li>
              <strong>SAML 2.0</strong> — Enterprise standard. Most identity providers (Okta, Azure AD, Auth0) speak it
              natively. Best for B2B portals where your wholesale buyers might be tied to corporate identity systems.
            </li>
            <li>
              <strong>OAuth 2.0</strong> — Lighter, web-friendly, used by &ldquo;Sign in with Google/Apple/Facebook&rdquo;
              flows. Good for B2C storefronts where you want frictionless social login.
            </li>
            <li>
              <strong>OpenID Connect (OIDC)</strong> — Built on top of OAuth 2.0, adds standardised user info. The default
              choice for new builds in 2026 — broad support, strong ecosystem.
            </li>
          </ul>

          <h2>How it works on Shopify</h2>

          <p>
            Shopify Plus supports Customer Account API with SSO integration through Shopify&rsquo;s new customer accounts
            framework. For Shopify (non-Plus) merchants, SSO requires a custom build using Shopify&rsquo;s headless storefront
            architecture or a private app that handles the authentication handshake.
          </p>

          <p>The flow looks like this:</p>

          <ol>
            <li>Customer clicks &ldquo;Sign In&rdquo; on any of your storefronts.</li>
            <li>They&rsquo;re redirected to your identity provider (your SSO server, Okta, Auth0, etc.).</li>
            <li>They log in once. The IdP issues a signed token.</li>
            <li>Storefront verifies the token, fetches or creates the Shopify customer, and starts the session.</li>
            <li>Next time they visit any of your stores, they&rsquo;re already authenticated.</li>
          </ol>

          <h2>The Australian-specific bit</h2>

          <p>
            If you&rsquo;re an AU merchant expanding into NZ or UK, you have two options for storefront architecture:
          </p>

          <ul>
            <li>
              <strong>Shopify Markets</strong> — One store, multiple regions. Currency switching and language switching
              handled by Shopify. SSO isn&rsquo;t really needed here because there&rsquo;s only one customer database.
            </li>
            <li>
              <strong>Expansion Stores on Shopify Plus</strong> — Separate Shopify stores per region. Better for differentiated
              pricing, region-specific catalogues, and isolated payment processing. This is where SSO becomes essential.
            </li>
          </ul>

          <p>
            For brands selling fashion or wellness products with significantly different pricing between AU and NZ (after GST,
            shipping, and FX), expansion stores are usually the right call — and SSO is what makes that architecture not feel
            broken to your customers.
          </p>

          <h2>Implementation gotchas</h2>

          <p>
            A few things that catch people out when implementing SSO on Shopify:
          </p>

          <ul>
            <li>
              <strong>Existing customer migration.</strong> Your existing Shopify customers don&rsquo;t have IdP accounts.
              You&rsquo;ll need a one-time migration flow — usually a &ldquo;claim your account&rdquo; email sent to all
              existing customers asking them to set up their unified login.
            </li>
            <li>
              <strong>Checkout sessions.</strong> Shopify&rsquo;s checkout runs on Shopify&rsquo;s domain, not yours. The SSO
              token needs to be passed through correctly, or customers get logged out at checkout — the worst possible UX.
            </li>
            <li>
              <strong>Marketing consent.</strong> Australian Spam Act compliance requires explicit consent. If you&rsquo;re
              unifying customer profiles across stores, you need to handle consent state per-region carefully — a customer who
              opted in for AU marketing didn&rsquo;t automatically opt in for NZ.
            </li>
          </ul>

          <h2>When it&rsquo;s worth doing</h2>

          <p>
            SSO is a real engineering project — not a $29 app. It&rsquo;s worth the investment when:
          </p>

          <ul>
            <li>You operate three or more Shopify storefronts and they share customers.</li>
            <li>You run a loyalty programme and want it to work across regions.</li>
            <li>You sell B2B and your wholesale buyers expect corporate identity integration.</li>
            <li>Your customer support team is burning hours on &ldquo;I can&rsquo;t log in&rdquo; tickets across stores.</li>
          </ul>

          <p>
            For a single Shopify store with no expansion plans, SSO is overkill. For a Plus merchant with three regional
            stores and a B2B portal, it&rsquo;s the difference between feeling like one brand and feeling like four
            disconnected websites.
          </p>
        </div>

        {/* CTA banner */}
        <div
          className="noise"
          style={{
            background: "var(--bg-dark-green)",
            borderRadius: 12,
            padding: 40,
            marginTop: 64,
            textAlign: "center",
          }}
        >
          <h3
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 24,
              color: "var(--cream)",
              margin: "0 0 12px",
              lineHeight: 1.3,
            }}
          >
            Need this implemented on your store?
          </h3>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              color: "var(--text-muted)",
              margin: "0 0 24px",
            }}
          >
            Free 30-minute call. Fixed-price quote in AUD.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Free Strategy Call
          </Link>
        </div>
      </article>
    </main>
  );
}
