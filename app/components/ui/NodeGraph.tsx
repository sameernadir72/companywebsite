import { Code2, Layers, Sparkles, Blocks, Wand2, Palette } from "lucide-react";

const nodes = [
  { code: "WEB", label: "Web", Icon: Code2, x: 200, y: 55 },
  { code: "SAAS", label: "SaaS", Icon: Layers, x: 325.6, y: 127.5 },
  { code: "AI", label: "AI", Icon: Sparkles, x: 325.6, y: 272.5 },
  { code: "CHAIN", label: "Web3", Icon: Blocks, x: 200, y: 345 },
  { code: "MOTION", label: "Motion", Icon: Wand2, x: 74.4, y: 272.5 },
  { code: "BRAND", label: "Brand", Icon: Palette, x: 74.4, y: 127.5 },
];

const center = { x: 200, y: 200 };

export function NodeGraph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Diagram showing Vertex's six disciplines — web, SaaS, AI, Web3, motion and brand — converging into one shipped product"
    >
      <defs>
        <linearGradient id="ng-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity={0.9} />
          <stop offset="100%" stopColor="#7aff9c" stopOpacity={0.9} />
        </linearGradient>
        <radialGradient id="ng-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7aff9c" stopOpacity={0.55} />
          <stop offset="100%" stopColor="#7aff9c" stopOpacity={0} />
        </radialGradient>
        <radialGradient id="ng-core-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7aff9c" stopOpacity={0.18} />
          <stop offset="100%" stopColor="#7aff9c" stopOpacity={0} />
        </radialGradient>
        <filter id="ng-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="ng-lift" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>

      <circle cx={center.x} cy={center.y} r={145} fill="url(#ng-core-halo)" />
      <circle cx={center.x} cy={center.y} r={92} fill="url(#ng-core-glow)" />

      {nodes.map((n) => (
        <path
          key={`path-${n.code}`}
          id={`ng-flow-${n.code}`}
          d={`M ${n.x} ${n.y} L ${center.x} ${center.y}`}
          fill="none"
        />
      ))}

      {nodes.map((n) => (
        <line
          key={`line-${n.code}`}
          x1={center.x}
          y1={center.y}
          x2={n.x}
          y2={n.y}
          stroke="url(#ng-line)"
          strokeWidth={1.2}
          strokeDasharray="1 7"
          strokeLinecap="round"
          opacity={0.7}
          filter="url(#ng-glow)"
          className="motion-safe:animate-dash"
        />
      ))}

      <g className="motion-reduce:hidden">
        {nodes.map((n, i) => (
          <circle key={`packet-${n.code}`} r={3.5} fill="#7aff9c" filter="url(#ng-glow)" opacity={0}>
            <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${i * 0.4}s`} rotate="auto">
              <mpath href={`#ng-flow-${n.code}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.12;0.82;1"
              dur="2.6s"
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
            />
          </circle>
        ))}
      </g>

      {nodes.map((n, i) => (
        <g key={n.code} className="ng-node" filter="url(#ng-lift)">
          <circle
            cx={n.x}
            cy={n.y}
            r={24}
            fill="rgba(255,255,255,0.1)"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth={1}
          />
          <circle
            cx={n.x}
            cy={n.y}
            r={24}
            fill="none"
            stroke="url(#ng-line)"
            strokeWidth={1}
            opacity={0.45}
            className="motion-safe:animate-pulse-dot"
            style={{ animationDelay: `${i * 0.3}s`, transformOrigin: `${n.x}px ${n.y}px` }}
          />
          <foreignObject x={n.x - 10} y={n.y - 10} width={20} height={20}>
            <n.Icon size={20} className="text-white/90" strokeWidth={1.75} />
          </foreignObject>
          <text
            x={n.x}
            y={n.y + (n.y < center.y ? -32 : 40)}
            textAnchor="middle"
            className="fill-white/85 font-mono"
            fontSize="11"
            letterSpacing="0.5"
          >
            {n.label}
          </text>
        </g>
      ))}

      <g className="ng-core" filter="url(#ng-lift)">
        <circle cx={center.x} cy={center.y} r={34} fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" />
        <circle
          cx={center.x}
          cy={center.y}
          r={26}
          fill="none"
          stroke="url(#ng-line)"
          strokeWidth={1.4}
          className="motion-safe:animate-spin-slow"
          strokeDasharray="4 10"
        />
        <text
          x={center.x}
          y={center.y + 4}
          textAnchor="middle"
          className="fill-white font-mono font-medium"
          fontSize="12"
        >
          VTX
        </text>
      </g>
    </svg>
  );
}
