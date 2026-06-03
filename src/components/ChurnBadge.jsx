const churnStyles = {
  Bajo: { color: '#22C55E', label: 'Bajo' },
  Medio: { color: '#F97316', label: 'Medio' },
  Alto: { color: '#EF4444', label: 'Alto' },
}

// Churn-risk pill: Bajo (green) / Medio (orange) / Alto (red).
export default function ChurnBadge({ level = 'Bajo' }) {
  const s = churnStyles[level] || churnStyles.Bajo
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
      style={{ color: s.color, backgroundColor: `${s.color}1A`, boxShadow: `inset 0 0 0 1px ${s.color}40` }}
    >
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
      {s.label}
    </span>
  )
}
