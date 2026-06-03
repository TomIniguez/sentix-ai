// Generic KPI card: icon chip + label + big value, optional delta / emoji slot.
export default function KpiCard({ icon: Icon, label, value, accent = '#3B82F6', sub, children }) {
  return (
    <div className="rounded-2xl border border-hairline bg-card p-5 shadow-card transition-colors hover:border-stroke">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted">{label}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-3xl font-bold tracking-tight text-white">{value}</span>
            {children}
          </div>
          {sub && <p className="mt-1 text-xs text-faint">{sub}</p>}
        </div>
        {Icon && (
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${accent}1A`, color: accent, boxShadow: `inset 0 0 0 1px ${accent}33` }}
          >
            <Icon size={20} />
          </span>
        )}
      </div>
    </div>
  )
}
