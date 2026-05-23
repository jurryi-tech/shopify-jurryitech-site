import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Free 30-minute Shopify strategy call. AEST business hours. Fixed-price quotes in AUD. Response within 4 hours during AU business days.",
};

const infoBlocks = [
  {
    title: "Available AEST Business Hours",
    body: "Mon–Fri, 9am–6pm AEST. I'm in Delhi, but my calendar runs on your timezone.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "All Quotes in AUD",
    body: "Fixed-price, GST-inclusive. No hidden fees. No scope-creep invoices.",
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M17 7H9.5a2.5 2.5 0 000 5h5a2.5 2.5 0 010 5H7" />
      </>
    ),
  },
  {
    title: "Response Time",
    body: "Most enquiries answered within 4 hours during business days.",
    icon: (
      <>
        <path d="M4 6h16v10H8l-4 4V6z" />
        <path d="M9 11h6M9 8h6" />
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <main
      className="noise"
      style={{ background: "var(--charcoal)", minHeight: "100vh", padding: "100px 24px" }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
        className="contact-grid"
      >
        <div>
          <h1
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "var(--cream)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Let&rsquo;s talk about your store.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              color: "var(--coastal)",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "16px 0 40px",
            }}
          >
            Free 30-minute strategy call. No obligation. I&rsquo;ll tell you what I&rsquo;d build, how long it takes,
            and what it costs — before you commit to anything.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 480 }}>
            {infoBlocks.map((b) => (
              <div key={b.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="var(--eucalyptus)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, marginTop: 2 }}
                >
                  {b.icon}
                </svg>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: 15,
                      color: "var(--cream)",
                      marginBottom: 4,
                    }}
                  >
                    {b.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "var(--coastal)",
                      lineHeight: 1.6,
                    }}
                  >
                    {b.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "var(--charcoal-card)",
            borderRadius: 12,
            padding: 32,
          }}
        >
          <ContactForm />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </main>
  );
}
