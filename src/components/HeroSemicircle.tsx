const icons = [
  {
    label: "SEO",
    desktop: { left: 10, top: 170 },
    svg: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
        <path d="M8 13v-2" />
        <path d="M11 13V8" />
        <path d="M14 13v-3" />
      </>
    ),
  },
  {
    label: "MARKETING",
    desktop: { left: 45, top: 90 },
    svg: (
      <>
        <path d="M3 11l15-7v16L3 13z" />
        <path d="M11 19h2l1-3" />
        <path d="M19 9v6" />
      </>
    ),
  },
  {
    label: "STORE SETUP",
    desktop: { left: 140, top: 31 },
    svg: (
      <>
        <path d="M5 7h14l-1 14H6L5 7z" />
        <path d="M9 7V5a3 3 0 016 0v2" />
        <circle cx="12" cy="13" r="1.3" />
      </>
    ),
  },
  {
    label: "PAYMENTS",
    desktop: { left: 400, top: 31 },
    svg: (
      <>
        <path d="M4 20V11" />
        <path d="M10 20V8" />
        <path d="M16 20V5" />
        <path d="M22 20H2" />
        <path d="M2 4l6 4 4-4 6 4" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "ANALYTICS",
    desktop: { left: 495, top: 90 },
    svg: (
      <>
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M2 10h20" />
        <circle cx="17" cy="15" r="1.5" />
        <path d="M17 16.5v2l-1 1" />
      </>
    ),
  },
  {
    label: "SHIPPING",
    desktop: { left: 530, top: 170 },
    svg: (
      <>
        <path d="M3 8h11v8H3z" />
        <path d="M14 11h4l3 3v2h-7z" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </>
    ),
  },
];

export default function HeroSemicircle() {
  return (
    <>
      {/* Desktop semicircle */}
      <div className="hero-arc-desktop">
        <svg
          viewBox="0 0 540 200"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          style={{ position: "absolute", inset: 0 }}
        >
          <path
            d="M 10,170 A 260,160 0 0,0 530,170"
            fill="none"
            stroke="var(--eucalyptus)"
            strokeWidth="1"
            strokeDasharray="4 5"
            opacity="0.4"
          />
        </svg>

        {icons.map((icon) => (
          <div
            key={icon.label}
            className="hero-arc-icon"
            style={{ left: icon.desktop.left, top: icon.desktop.top }}
          >
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              {icon.svg}
            </svg>
            <span className="hero-arc-label">{icon.label}</span>
          </div>
        ))}
      </div>

      {/* Mobile horizontal scroll */}
      <div className="hero-arc-mobile">
        {icons.map((icon) => (
          <div key={icon.label} className="hero-arc-icon">
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              {icon.svg}
            </svg>
            <span className="hero-arc-label">{icon.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
