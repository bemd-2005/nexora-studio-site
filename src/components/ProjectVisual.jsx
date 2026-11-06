const QR = [
  [0, 0], [1, 0], [2, 0], [4, 0],
  [0, 1], [2, 1], [3, 1],
  [0, 2], [1, 2], [2, 2], [4, 2],
  [1, 3], [3, 3], [4, 3],
  [0, 4], [2, 4], [3, 4],
];
const ROUTE = "M14 96 L58 58 L102 72 L150 30 L188 44";

// Un schéma animé par réalisation, dessiné en SVG (pas d'images à charger).
export default function ProjectVisual({ slug }) {
  const props = {
    viewBox: "0 0 200 120",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.2,
    "aria-hidden": true,
    className: "pv",
  };

  switch (slug) {
    case "shalom":
      return (
        <svg {...props}>
          <circle cx="100" cy="60" r="16" />
          <circle cx="100" cy="60" r="36" opacity=".6" />
          <circle cx="100" cy="60" r="56" opacity=".35" />
          <g className="pv-spin pv-a">
            <circle cx="136" cy="60" r="3.5" fill="currentColor" stroke="none" />
          </g>
          <g className="pv-spin pv-b">
            <circle cx="100" cy="44" r="3.5" fill="currentColor" stroke="none" />
          </g>
          <g className="pv-spin pv-c">
            <circle cx="44" cy="60" r="3.5" fill="currentColor" stroke="none" />
          </g>
          <circle cx="100" cy="60" r="4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "douane-plus":
      return (
        <svg {...props}>
          <rect x="22" y="14" width="96" height="92" rx="2" />
          <path d="M34 32h48M34 44h72M34 56h60M34 68h72M34 80h40" opacity=".7" />
          <g fill="currentColor" stroke="none">
            {QR.map(([x, y]) => (
              <rect key={`${x}-${y}`} x={132 + x * 8} y={50 + y * 8} width="6" height="6" />
            ))}
          </g>
        </svg>
      );
    case "atl-track":
      return (
        <svg {...props}>
          <path d={ROUTE} strokeDasharray="3 4" opacity=".6" />
          <g fill="currentColor" stroke="none">
            <circle cx="14" cy="96" r="3.5" />
            <circle cx="58" cy="58" r="3.5" />
            <circle cx="102" cy="72" r="3.5" />
            <circle cx="150" cy="30" r="3.5" />
            <circle cx="188" cy="44" r="3.5" />
          </g>
          <circle r="4.5" fill="currentColor" stroke="none">
            <animateMotion dur="5s" repeatCount="indefinite" path={ROUTE} />
          </circle>
          <path d="M14 112h172" opacity=".35" />
        </svg>
      );
    case "surveillance-ia":
      return (
        <svg {...props}>
          <path d="M20 38V20h18M162 20h18v18M180 82v18h-18M38 100H20V82" />
          <circle cx="100" cy="60" r="20" opacity=".6" />
          <path d="M100 34v12M100 74v12M74 60h12M114 60h12" opacity=".6" />
          <rect x="118" y="44" width="34" height="26" strokeDasharray="3 3" />
          <rect x="24" y="22" width="152" height="2" fill="currentColor" stroke="none" className="pv-scan" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <rect x="20" y="16" width="160" height="88" rx="4" />
          <path d="M20 34h160" />
          <circle cx="32" cy="25" r="2.2" fill="currentColor" stroke="none" />
          <circle cx="41" cy="25" r="2.2" fill="currentColor" stroke="none" opacity=".6" />
          <circle cx="50" cy="25" r="2.2" fill="currentColor" stroke="none" opacity=".3" />
          <rect x="32" y="46" width="70" height="8" fill="currentColor" stroke="none" opacity=".8" />
          <path d="M32 66h96M32 76h80M32 86h60" opacity=".55" />
          <rect x="128" y="48" width="40" height="44" strokeDasharray="3 3" />
        </svg>
      );
  }
}
