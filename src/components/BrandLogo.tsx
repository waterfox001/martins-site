import React from 'react';

interface BrandLogoProps {
  variant?: 'official' | 'horizontal';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'custom';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
}) => {
  // Official Barbearia O Martins Crest SVG (As defined in official identity)
  const renderOfficialCrest = (width: number, height: number) => (
    <svg
      viewBox="0 0 300 360"
      width={width}
      height={height}
      className="filter drop-shadow-md select-none"
      fill="none"
    >
      <defs>
        <linearGradient id="crest-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3dd9b" />
          <stop offset="50%" stopColor="#c59a53" />
          <stop offset="100%" stopColor="#7a5518" />
        </linearGradient>
      </defs>

      {/* Outer Shield Background */}
      <path
        d="M 150 48
           C 175 48 200 40 220 54
           C 240 68 244 95 244 116
           C 244 135 258 152 264 170
           C 272 195 264 220 250 240
           C 230 270 190 304 150 330
           C 110 304 70 270 50 240
           C 36 220 28 195 36 170
           C 42 152 56 135 56 116
           C 56 95 60 68 80 54
           C 100 40 125 48 150 48 Z"
        fill="#14161b"
        stroke="url(#crest-gold-grad)"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Inner Decorative Inset Border */}
      <path
        d="M 150 62
           C 172 62 194 56 210 68
           C 226 80 230 102 230 120
           C 230 138 244 154 248 170
           C 254 190 246 210 234 228
           C 216 254 180 286 150 310
           C 120 286 84 254 66 228
           C 54 210 46 190 52 170
           C 56 154 70 138 70 120
           C 70 102 74 80 90 68
           C 106 56 128 62 150 62 Z"
        fill="none"
        stroke="#d4a750"
        strokeWidth="2"
        opacity="0.75"
      />

      {/* Apex: Barber Pole */}
      <g id="crest-barber-pole" transform="translate(136, 12)">
        <circle cx="14" cy="6" r="6" fill="#d4a750" />
        <rect x="6" y="11" width="16" height="4" rx="2" fill="#d4a750" />
        <rect x="8" y="15" width="12" height="34" rx="2" fill="#ffffff" stroke="#d4a750" strokeWidth="1.5" />
        <clipPath id="crest-pole-clip">
          <rect x="8" y="15" width="12" height="34" rx="2" />
        </clipPath>
        <g clipPath="url(#crest-pole-clip)">
          <path d="M 0 16 L 28 32 L 28 26 L 0 10 Z" fill="#c93838" />
          <path d="M 0 28 L 28 44 L 28 38 L 0 22 Z" fill="#c93838" />
          <path d="M 0 40 L 28 56 L 28 50 L 0 34 Z" fill="#c93838" />
          <path d="M 0 22 L 28 38 L 28 32 L 0 16 Z" fill="#2d6cb5" />
          <path d="M 0 34 L 28 50 L 28 44 L 0 28 Z" fill="#2d6cb5" />
        </g>
        <rect x="6" y="49" width="16" height="4" rx="2" fill="#d4a750" />
        <circle cx="14" cy="54" r="3" fill="#d4a750" />
      </g>

      {/* Arched Text: BARBEARIA */}
      <text
        x="150"
        y="108"
        textAnchor="middle"
        fill="#c59a53"
        fontSize="14"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="700"
        letterSpacing="4"
      >
        BARBEARIA
      </text>

      {/* Central Brand Headline: O MARTINS */}
      <text
        x="150"
        y="158"
        textAnchor="middle"
        fill="#f5e9d3"
        fontSize="36"
        fontFamily="'Oswald', sans-serif"
        fontWeight="800"
        letterSpacing="2"
      >
        O MARTINS
      </text>

      {/* Divider rule */}
      <line x1="78" y1="172" x2="222" y2="172" stroke="#d4a750" strokeWidth="1.5" opacity="0.6" />

      {/* Crossed Barber Comb & Scissors + Razor 'M' */}
      <g id="crest-tools" transform="translate(150, 222)">
        {/* Barber Comb */}
        <g transform="rotate(-34)">
          <rect x="-42" y="-3.5" width="84" height="7" rx="3" fill="#d4a750" opacity="0.85" />
          {[-36, -30, -24, -18, -12, -6, 0, 6, 12, 18, 24, 30, 36].map((tx) => (
            <line
              key={`comb-line-${tx}`}
              x1={tx}
              y1="3.5"
              x2={tx}
              y2="14"
              stroke="#d4a750"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Barber Shears */}
        <g transform="rotate(34)">
          <path d="M -38 -2 L 34 -2 L 40 0 L 34 2 L -38 2 Z" fill="#d4a750" opacity="0.9" />
          <circle cx="-42" cy="-6" r="6" fill="none" stroke="#d4a750" strokeWidth="2.5" />
          <circle cx="-42" cy="6" r="6" fill="none" stroke="#d4a750" strokeWidth="2.5" />
          <circle cx="4" cy="0" r="3" fill="#ffffff" />
        </g>

        {/* Razor Handles M */}
        <g transform="translate(0, -6)">
          <path
            d="M -22 28 L -12 -16 C -11 -21 -4 -21 -3 -16 L 0 6"
            fill="none"
            stroke="#e5c278"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 22 28 L 12 -16 C 11 -21 4 -21 3 -16 L 0 6"
            fill="none"
            stroke="#e5c278"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="-12" cy="-12" r="2.2" fill="#ffffff" />
          <circle cx="12" cy="-12" r="2.2" fill="#ffffff" />
          <circle cx="-20" cy="24" r="1.8" fill="#d4a750" />
          <circle cx="20" cy="24" r="1.8" fill="#d4a750" />
        </g>
      </g>

      {/* Bottom Base: DESDE 2024 */}
      <g id="crest-desde-2024" transform="translate(150, 286)">
        <line x1="-55" y1="-4" x2="-36" y2="-4" stroke="#d4a750" strokeWidth="1.5" />
        <circle cx="-32" cy="-4" r="2" fill="#d4a750" />
        <text
          x="0"
          y="0"
          textAnchor="middle"
          fill="#c59a53"
          fontSize="12"
          fontFamily="'Oswald', sans-serif"
          fontWeight="600"
          letterSpacing="2"
        >
          DESDE 2024
        </text>
        <circle cx="32" cy="-4" r="2" fill="#d4a750" />
        <line x1="36" y1="-4" x2="55" y2="-4" stroke="#d4a750" strokeWidth="1.5" />
      </g>
    </svg>
  );

  // Full official crest
  if (variant === 'official') {
    return (
      <div className={`inline-block ${className}`} title="Barbearia O Martins">
        {renderOfficialCrest(180, 216)}
      </div>
    );
  }

  // Header lockup with official crest
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official mini crest mark */}
      <div className="shrink-0 flex items-center justify-center">
        {renderOfficialCrest(40, 48)}
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span className="text-[10px] tracking-[0.28em] uppercase text-[#c59a53] font-semibold leading-none mb-1">
          BARBEARIA
        </span>
        <span className="font-heading font-black text-xl md:text-2xl tracking-wider text-stone-100 uppercase leading-none group-hover:text-[#d4af37] transition-colors">
          O MARTINS
        </span>
        <span className="text-[9px] tracking-widest text-stone-400 font-mono mt-0.5">
          FORTALEZA • DESDE 2024
        </span>
      </div>
    </div>
  );
};
