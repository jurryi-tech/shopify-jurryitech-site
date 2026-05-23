import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automating B2B Company Assignment on Shopify Plus",
  description:
    "Domain-based contact mapping, admin-approved registration, granular access control. The complete guide to automating B2B onboarding on Shopify Plus.",
};

export default function Post() {
  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: 300,
          background: "linear-gradient(135deg,#C4704B,#8a4d33)",
        }}
      />

      <article style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <img
            src="/uddit-shopify.png"
            alt="Uddit"
            style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", objectPosition: "top" }}
          />
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-heading)" }}>
              Uddit
            </div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)" }}>
              18 May 2026 · 10 min read
            </div>
          </div>
        </div>

        <div className="blog-card-cat" style={{ marginBottom: 12 }}>
          B2B AUTOMATION
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
          Automating B2B Company Assignment on Shopify Plus: The Complete Guide
        </h1>

        <div className="post-prose">
          <p>
            If you sell wholesale on Shopify Plus B2B, you&rsquo;ve probably hit this wall: every new business contact who signs
            up needs to be manually assigned to the right company. Approved by an admin. Given the right catalogue permissions.
            Connected to the right price list. At 10 new signups a week, it&rsquo;s annoying. At 50 a week, it&rsquo;s a
            full-time job for someone on your team.
          </p>

          <p>
            This guide covers the three pillars of automating that workflow on Shopify Plus: admin-approved company
            registration, domain-based automated contact assignment, and granular access controls. It&rsquo;s written for
            Australian wholesale merchants and B2B suppliers, but most of it applies anywhere.
          </p>

          <h2>Pillar 1: Admin-approved company registration</h2>

          <p>
            By default, anyone who signs up on your B2B portal gets the same generic experience. That&rsquo;s wrong for two
            reasons: you don&rsquo;t want random consumers seeing wholesale pricing, and you don&rsquo;t want every new B2B
            applicant to immediately get full access without verification.
          </p>

          <p>
            The right pattern is a two-stage registration:
          </p>

          <ol>
            <li>
              <strong>Application stage.</strong> Prospective B2B customer fills in a form: business name, ABN, business email,
              expected order volume, who referred them. They get a confirmation: &ldquo;Application received — we&rsquo;ll review
              within 24 hours.&rdquo;
            </li>
            <li>
              <strong>Approval stage.</strong> Your team reviews. ABN gets validated against the ABR (Australian Business
              Register). Once approved, an account is created and the contact is automatically linked to the right company
              record.
            </li>
          </ol>

          <p>
            This stage is implementable on Shopify Plus using the B2B Customer API and Shopify Functions. Validation against the
            ABR can be done via the free{" "}
            <a href="https://abr.business.gov.au/" target="_blank" rel="noopener noreferrer">
              ABN Lookup
            </a>{" "}
            API — a 30-second integration that filters out the obvious junk applications.
          </p>

          <h2>Pillar 2: Domain-based automated contact assignment</h2>

          <p>
            Once a company is approved, the next problem starts: other employees from that company also need accounts. Your
            sales rep signs up. Then their colleague does. Then a procurement person. Each one currently requires manual
            approval and manual linkage to the same company record.
          </p>

          <p>
            The fix is domain mapping. When you approve a company, you store its verified business domain (e.g.{" "}
            <code>verified-domain.com.au</code>). Now any signup with an email matching that domain gets auto-assigned to that
            company with the right permissions. No manual approval needed.
          </p>

          <p>The flow:</p>

          <ol>
            <li>New user signs up with <code>jess@verified-domain.com.au</code>.</li>
            <li>System checks the domain against approved companies.</li>
            <li>Match found → user is auto-created, linked to that company, given the company&rsquo;s catalogue access.</li>
            <li>Welcome email sent. Sales rep notified.</li>
          </ol>

          <p>
            For free-email domains like <code>gmail.com</code> or <code>outlook.com</code>, fall back to manual approval — you
            don&rsquo;t want random Gmail users getting auto-approved into a company.
          </p>

          <h2>Pillar 3: Granular access controls</h2>

          <p>
            Not every B2B contact at a company should see the same thing. A purchasing officer might need ordering rights but
            shouldn&rsquo;t see payment terms. An accounts payable contact might need to see invoices but not place orders. A
            director might need full visibility.
          </p>

          <p>
            Shopify Plus B2B supports role-based permissions per company. Common roles to set up:
          </p>

          <ul>
            <li>
              <strong>Buyer.</strong> Can browse catalogue, place orders, see assigned price list. Cannot see invoices or
              payment terms.
            </li>
            <li>
              <strong>Accounts.</strong> Can see invoices, payment history, payment terms. Cannot place orders.
            </li>
            <li>
              <strong>Administrator.</strong> Full access including managing other users at the company.
            </li>
          </ul>

          <p>
            You can also use Shopify Functions to enforce catalogue-level visibility — wholesale pricing only visible to verified
            B2B contacts, public-facing pricing visible to anonymous browsers. This is enforced at the cart and checkout level, so
            a B2C customer can never accidentally see wholesale prices even if they somehow find the URL.
          </p>

          <h2>The Australian-specific bit</h2>

          <p>
            A few AU-specific considerations:
          </p>

          <ul>
            <li>
              <strong>ABN validation.</strong> Hook up to ABR Lookup. Reject applications with invalid or cancelled ABNs at the
              form stage — saves your team review time. GST registration status is also returned by ABR Lookup, which is useful
              for setting whether the buyer gets GST-inclusive or GST-exclusive pricing.
            </li>
            <li>
              <strong>Payment terms.</strong> Most AU B2B buyers expect Net 30 terms. Shopify Plus B2B supports payment terms,
              but you&rsquo;ll need to integrate with Xero or MYOB for invoice generation and reconciliation. Don&rsquo;t try to
              run B2B accounting inside Shopify alone — Xero is what your accountant uses, integrate with it from day one.
            </li>
            <li>
              <strong>Freight.</strong> B2B freight is usually negotiated per company, not per order. Standard Shopify shipping
              rules don&rsquo;t handle this well — you&rsquo;ll need Shopify Functions for shipping to apply per-company freight
              rules at checkout.
            </li>
          </ul>

          <h2>What this looks like in practice</h2>

          <p>
            A Brisbane-based wholesale supplier I worked with had 50+ new B2B contact signups per month. Before automation, every
            signup required ~15 minutes of admin time — that&rsquo;s 12+ hours per month, every month, on a task that adds zero
            business value.
          </p>

          <p>
            After implementing the three pillars above, onboarding for verified domains became instant. New contacts from
            already-approved companies got auto-assigned in seconds. Manual review only kicked in for completely new companies
            or free-email signups. The admin team got 10 hours per month back, and B2B contact processing got 3× faster.
          </p>

          <h2>The build effort</h2>

          <p>
            This isn&rsquo;t a $29 app. It&rsquo;s a real B2B automation build — typically 3–5 weeks of work for a Shopify Plus
            merchant with existing company structures to migrate. The deliverables:
          </p>

          <ul>
            <li>Custom application form with ABN validation</li>
            <li>Admin approval dashboard (often built into the Shopify admin via embedded app UI)</li>
            <li>Domain-mapping logic running on signup events</li>
            <li>Role-based permission setup</li>
            <li>Catalogue and price list visibility enforced via Shopify Functions</li>
            <li>Xero/MYOB integration for invoicing</li>
            <li>Documentation and training for your admin team</li>
          </ul>

          <p>
            If you&rsquo;re doing more than 20 B2B signups a month and your team is still manually processing them, the build
            pays for itself in under 12 months — usually less.
          </p>
        </div>

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
