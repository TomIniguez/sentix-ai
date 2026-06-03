import { Sparkles } from 'lucide-react'

// Reusable "Próximamente" page for not-yet-built sections.
export default function Placeholder({ icon: Icon = Sparkles, title, description }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <span className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-brandFrom/20 to-brandTo/20 shadow-glow">
        <Icon size={34} className="text-brandTo" />
        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brandFrom to-brandTo">
          <Sparkles size={12} className="text-white" />
        </span>
      </span>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <span className="mt-3 inline-flex items-center rounded-full border border-stroke bg-card px-3 py-1 text-xs font-medium text-muted">
        Próximamente
      </span>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{description}</p>
    </div>
  )
}
