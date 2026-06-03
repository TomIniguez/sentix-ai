// Reusable titled panel/card wrapper used across views.
export default function Panel({ title, subtitle, action, children, className = '', bodyClassName = '' }) {
  return (
    <section className={`rounded-2xl border border-hairline bg-card shadow-card ${className}`}>
      {(title || action) && (
        <header className="flex items-center justify-between gap-3 border-b border-hairline px-5 py-4">
          <div>
            {title && <h3 className="text-sm font-semibold text-white">{title}</h3>}
            {subtitle && <p className="mt-0.5 text-xs text-faint">{subtitle}</p>}
          </div>
          {action}
        </header>
      )}
      <div className={`p-5 ${bodyClassName}`}>{children}</div>
    </section>
  )
}
