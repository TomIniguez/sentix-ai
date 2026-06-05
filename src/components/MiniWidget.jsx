import { ChevronRight } from 'lucide-react'

// Small "Recientes" widget card with an icon header and a short list.
export default function MiniWidget({ title, icon: Icon, accent = '#8B5CF6', items, onOpen }) {
  return (
    <div className="rounded-2xl border border-hairline bg-card p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${accent}1A`, color: accent }}
          >
            {Icon && <Icon size={15} />}
          </span>
          <h4 className="text-sm font-semibold text-content">{title}</h4>
        </div>
        <button onClick={onOpen} className="text-faint transition-colors hover:text-muted">
          <ChevronRight size={16} />
        </button>
      </div>
      <ul className="space-y-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-center justify-between gap-2">
            <span className="truncate text-sm text-content-soft">{it.title}</span>
            <span className="shrink-0 text-xs text-faint">{it.meta}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
