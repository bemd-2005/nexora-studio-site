export default function Logo({ withWord = true }) {
  return (
    <span className="logo">
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="nx-logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff00c8" />
            <stop offset="1" stopColor="#00ffcc" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="36" height="36" rx="9" fill="none" stroke="url(#nx-logo-g)" strokeWidth="2" />
        <text
          x="20"
          y="26"
          textAnchor="middle"
          fontFamily="Unbounded, Arial Black, sans-serif"
          fontSize="15"
          fontWeight="700"
          fill="url(#nx-logo-g)"
        >
          NS
        </text>
      </svg>
      {withWord && (
        <span className="logo-word">
          Nexora
          <small>Studio</small>
        </span>
      )}
    </span>
  );
}
