import { categories } from '../../data/mockData'

// Horizontal segmented (100%-stacked) bar of finding categories + a legend
// listing each category's percentage and incident count.
export default function CategoryBarChart() {
  return (
    <div>
      {/* Segmented bar */}
      <div className="flex h-4 w-full overflow-hidden rounded-full bg-overlay/5">
        {categories.map((c) => (
          <div
            key={c.name}
            className="h-full transition-all"
            style={{ width: `${c.pct}%`, backgroundColor: c.color }}
            title={`${c.name} · ${c.pct}%`}
          />
        ))}
      </div>

      {/* Legend grid */}
      <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
        {categories.map((c) => (
          <div key={c.name} className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: c.color }} />
            <div className="min-w-0">
              <p className="truncate text-sm text-content-soft">{c.name}</p>
              <p className="text-xs text-faint">
                <span className="font-semibold text-muted">{c.pct}%</span> · {c.count} incidentes
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
