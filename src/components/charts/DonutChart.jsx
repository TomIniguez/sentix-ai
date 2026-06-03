import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

// Palette used for Top-10 breakdowns (cycled if more slices than colors).
const PALETTE = [
  '#8B5CF6', '#3B82F6', '#10B981', '#F97316', '#EF4444',
  '#22C55E', '#06B6D4', '#EC4899', '#F59E0B', '#6366F1',
]

function DonutTooltip({ active, payload, total }) {
  if (!active || !payload?.length) return null
  const p = payload[0]
  const pct = total ? Math.round((p.value / total) * 100) : 0
  return (
    <div className="max-w-[220px] rounded-lg border border-stroke bg-elevated px-3 py-2 text-xs shadow-card">
      <p className="font-medium text-white">{p.name}</p>
      <p className="text-muted">
        {p.value} · {pct}%
      </p>
    </div>
  )
}

// Reusable donut + ranked legend. `data`: [{ name, value }].
export default function DonutChart({ data, valueLabel = '', height = 240, legend = true, maxLegend = 7 }) {
  const total = data.reduce((sum, d) => sum + d.value, 0)
  const colored = data.map((d, i) => ({ ...d, color: PALETTE[i % PALETTE.length] }))

  return (
    <div className={`flex flex-col gap-4 ${legend ? 'lg:flex-row lg:items-center' : ''}`}>
      <div style={{ height }} className="relative w-full lg:w-1/2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={colored}
              dataKey="value"
              nameKey="name"
              innerRadius="62%"
              outerRadius="92%"
              paddingAngle={2}
              stroke="none"
            >
              {colored.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
            <Tooltip content={<DonutTooltip total={total} />} />
          </PieChart>
        </ResponsiveContainer>
        {/* Center total */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">{total}</span>
          <span className="text-xs text-faint">{valueLabel}</span>
        </div>
      </div>

      {legend && (
        <ol className="w-full space-y-2 lg:w-1/2">
          {colored.slice(0, maxLegend).map((d, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm">
              <span className="w-4 text-right text-xs font-semibold text-faint">{i + 1}</span>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: d.color }} />
              <span className="min-w-0 flex-1 truncate text-slate-200">{d.name}</span>
              <span className="shrink-0 font-semibold text-muted">{d.value}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
