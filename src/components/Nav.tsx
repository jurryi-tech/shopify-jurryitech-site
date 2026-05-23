import Link from "next/link";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <>
      <nav className="ud-nav">
        <Link href="/" className="ud-logo">
          UDDIT<span className="ud-logo-dot">·</span>
        </Link>

        <div className="ud-nav-links">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="ud-nav-link">
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/contact" className="ud-nav-cta">
          Get a Free Audit
        </Link>
      </nav>

      <div className="ud-locations">
        Serving Shopify merchants across Sydney · Melbourne · Brisbane · Perth · Gold Coast
      </div>
    </>
  );
}
