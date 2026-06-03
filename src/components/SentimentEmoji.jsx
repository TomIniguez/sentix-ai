import { sentimentMap } from '../data/mockData'

// Maps a sentiment key -> emoji inside a soft colored ring.
export default function SentimentEmoji({ value = 'neutral', showLabel = false, size = 'md' }) {
  const s = sentimentMap[value] || sentimentMap.neutral
  const dim = size === 'sm' ? 'h-7 w-7 text-sm' : size === 'lg' ? 'h-11 w-11 text-2xl' : 'h-9 w-9 text-lg'

  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`inline-flex items-center justify-center rounded-full ${dim}`}
        style={{ backgroundColor: `${s.color}1F`, boxShadow: `inset 0 0 0 1px ${s.color}40` }}
        title={s.label}
      >
        <span aria-hidden>{s.emoji}</span>
      </span>
      {showLabel && <span className="text-sm text-muted">{s.label}</span>}
    </span>
  )
}
