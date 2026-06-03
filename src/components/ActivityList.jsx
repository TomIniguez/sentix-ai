import { FileText, Hash } from 'lucide-react'

// Reusable recent-items list (title + meta + time-ago).
export default function ActivityList({ items, icon = 'doc' }) {
  const Icon = icon === 'hash' ? Hash : FileText
  return (
    <ul className="divide-y divide-hairline">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-muted">
            <Icon size={15} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm text-slate-200">{it.title}</p>
            <p className="mt-0.5 text-xs text-faint">
              {it.tickets != null && (
                <span className="text-muted">
                  {it.tickets} {it.tickets === 1 ? 'Ticket' : 'Tickets'} ·{' '}
                </span>
              )}
              {it.time}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
