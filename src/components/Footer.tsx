import Link from "next/link";

export default function Footer() {
  return (
    <footer className="ud-footer">
      <div className="ud-footer-grid">
        <div>
          <div className="ud-footer-logo">
            UDDIT<span style={{ color: "var(--eucalyptus)" }}>·</span>
          </div>
          <p className="ud-footer-desc">
            Custom Shopify development for Australian merchants. AI agents, integrations, migrations.
          </p>
        </div>

        <div>
          <div className="ud-footer-col-title">Navigate</div>
          <Link href="/#services" className="ud-footer-link">Services</Link>
          <Link href="/case-studies" className="ud-footer-link">Case Studies</Link>
          <Link href="/blog" className="ud-footer-link">Blog</Link>
          <Link href="/about" className="ud-footer-link">About</Link>
          <Link href="/contact" className="ud-footer-link">Contact</Link>
        </div>

        <div>
          <div className="ud-footer-col-title">Contact</div>
          <a href="mailto:contact@jurryi.com" className="ud-footer-link" style={{ color: "var(--cream)" }}>
            contact@jurryi.com
          </a>
          <div className="ud-footer-link">Available AEST business hours</div>
        </div>
      </div>

      <div className="ud-footer-bottom">
        © 2026 Uddit · Shopify Development Expert
      </div>
    </footer>
  );
}
