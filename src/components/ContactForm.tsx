"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 700);
  }

  if (status === "sent") {
    return (
      <div style={{ textAlign: "center", padding: 32 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: "var(--cream)", marginBottom: 12 }}>
          Enquiry sent.
        </div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--coastal)" }}>
          I&rsquo;ll be in touch within 4 hours during AEST business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <input className="form-input" type="text" name="name" placeholder="Your name" required />
      <input className="form-input" type="email" name="email" placeholder="you@company.com.au" required />
      <input className="form-input" type="text" name="store" placeholder="yourstore.com.au (optional)" />
      <textarea
        className="form-input"
        name="message"
        placeholder="Tell me about your store and what you're looking to build..."
        rows={4}
        required
      />
      <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: 4 }} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          color: "var(--coastal)",
          marginTop: 8,
          textAlign: "center",
        }}
      >
        Or email directly:{" "}
        <a href="mailto:enquiries@uddit.site" style={{ color: "var(--cream)", textDecoration: "none" }}>
          enquiries@uddit.site
        </a>
      </p>
    </form>
  );
}
