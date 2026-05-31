import { ImageResponse } from "next/og";

export const alt = "Uddit — Custom Shopify Development for Australian E-Commerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #14301f 0%, #1f3d2b 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", color: "#E8E2D4", fontSize: 30, fontWeight: 700, letterSpacing: "-0.01em" }}>
          Uddit
          <span style={{ color: "#9DBF9F", fontWeight: 500, marginLeft: 14, fontSize: 26 }}>
            Shopify Development
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#C4704B",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            For Australian E-Commerce
          </div>
          <div
            style={{
              color: "#F4F0E6",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            Custom Shopify builds that ship.
          </div>
        </div>

        <div style={{ display: "flex", color: "#9DBF9F", fontSize: 26, fontWeight: 500 }}>
          AI agents · Migrations · B2B automation · Afterpay · Australia Post · Xero
        </div>
      </div>
    ),
    { ...size },
  );
}
