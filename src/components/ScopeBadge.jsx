import { Rocket } from 'lucide-react'

// Small pill marking a feature as outside the current MVP scope (roadmap / post-MVP).
export default function ScopeBadge({ label = 'Post-MVP', icon: Icon = Rocket }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide"
      style={{ color: '#F59E0B', backgroundColor: 'rgba(245,158,11,0.12)' }}
    >
      {Icon && <Icon size={11} />}
      {label}
    </span>
  )
}
