import { categoryColors } from '../data/mockData'

// Colored pill keyed by category name -> palette color.
export default function CategoryBadge({ category }) {
  const color = categoryColors[category] || '#64748B'
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap"
      style={{
        color,
        backgroundColor: `${color}1A`, // ~10% opacity
        boxShadow: `inset 0 0 0 1px ${color}33`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      {category}
    </span>
  )
}
