// The site's signature element: a hand-drawn route line linking the city to
// its surrounding destinations, echoing a road trip. Used once, with restraint.
export default function RouteThread({ className = '' }) {
  const stops = [
    { x: 40, y: 380, label: 'CSN' },
    { x: 150, y: 300, label: 'Ellora' },
    { x: 230, y: 340, label: 'Daulatabad' },
    { x: 320, y: 220, label: 'Ajanta' },
    { x: 250, y: 120, label: 'Shirdi' },
    { x: 400, y: 70, label: 'Pune' },
  ]

  const d = `M${stops.map((s) => `${s.x},${s.y}`).join(' L')}`

  return (
    <svg
      viewBox="0 0 460 420"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d={d}
        stroke="#C99A44"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1400"
        strokeDashoffset="1400"
        className="animate-dash"
      />
      {stops.map((s, i) => (
        <g key={s.label}>
          <circle
            cx={s.x}
            cy={s.y}
            r={i === 0 ? 6 : 4}
            fill={i === 0 ? '#C1592F' : '#F2E8D5'}
            stroke="#1B1815"
            strokeWidth="1.5"
          />
          <text
            x={s.x + 10}
            y={s.y + 4}
            fill="#E7D9BC"
            fontSize="12"
            fontFamily="Inter, system-ui, sans-serif"
            opacity="0.85"
          >
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
