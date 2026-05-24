"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Graceful fallback when endpoint isn't configured yet
    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      setErrorMsg(
        "Form is not yet configured. Please email contact@uddit.site directly."
      );
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        formEl.reset();
      } else {
        const data = await res.json().catch(() => ({} as { error?: string }));
        const msg =
          (data && (data as { error?: string }).error) ||
          "Couldn't send. Please try again or email contact@uddit.site.";
        setStatus("error");
        setErrorMsg(msg);
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Network error. Please try again or email contact@uddit.site."
      );
    }
  }

  if (status === "sent") {
    return (
      <div style={{ textAlign: "center", padding: 32 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "var(--bg-mint)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--green-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 700,
            color: "var(--text-heading)",
            marginBottom: 8,
            letterSpacing: "-0.01em",
          }}
        >
          Enquiry sent.
        </div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" }}>
          I&rsquo;ll be in touch within 4 hours during AEST business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <input className="form-input" type="text" name="name" placeholder="Your name" required />
      <input className="form-input" type="email" name="email" placeholder="you@company.com" required />
      <input className="form-input" type="text" name="store" placeholder="yourstore.com (optional)" />
      <textarea
        className="form-input"
        name="message"
        placeholder="Tell me about your store and what you're looking to build..."
        rows={4}
        required
      />

      {/* Honeypot field — bots fill this, humans don't see it. Formspree drops the submission. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        aria-hidden="true"
      />

      <button
        type="submit"
        className="btn-primary"
        style={{ width: "100%", marginTop: 4 }}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>

      {status === "error" && errorMsg && (
        <div
          role="alert"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "#B42318",
            background: "#FEF3F2",
            border: "1px solid #FECDCA",
            borderRadius: 8,
            padding: "10px 12px",
            marginTop: 4,
            lineHeight: 1.5,
          }}
        >
          {errorMsg}
        </div>
      )}

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          color: "var(--text-muted)",
          marginTop: 8,
          textAlign: "center",
        }}
      >
        Or email directly:{" "}
        <a
          href="mailto:contact@uddit.site"
          style={{ color: "var(--green-dark)", textDecoration: "none", fontWeight: 600 }}
        >
          contact@uddit.site
        </a>
      </p>
    </form>
  );
}
