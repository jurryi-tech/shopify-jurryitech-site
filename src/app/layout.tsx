import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://shopify.uddit.site"),
  title: {
    default: "Custom Shopify Solutions for Australian E-Commerce — Uddit",
    template: "%s — Uddit | Shopify Development",
  },
  description:
    "Custom Shopify development for Australian merchants. AI agents, store migrations, B2B automation, SSO, and integrations with Australia Post, Afterpay, Xero. Fixed-price quotes in AUD.",
  keywords: [
    "Shopify developer Australia",
    "Shopify Plus development Sydney",
    "Shopify expert Melbourne",
    "custom Shopify apps Australia",
    "Shopify migration",
    "Neto to Shopify migration",
    "Shopify B2B automation",
    "Shopify SSO",
    "Australia Post eParcel integration",
    "Afterpay Shopify integration",
    "Xero Shopify integration",
    "Shopify AI agent",
    "Shopify chatbot developer",
    "AEST Shopify developer",
  ],
  authors: [{ name: "Uddit" }],
  creator: "Uddit",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://shopify.uddit.site",
    title: "Custom Shopify Solutions for Australian E-Commerce — Uddit",
    description:
      "Custom Shopify development for Australian merchants. AI agents, migrations, B2B automation, integrations with Australia Post, Afterpay, Xero.",
    siteName: "Uddit Shopify Development",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      <body className="fade-in">
        <Nav />
        {children}
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
