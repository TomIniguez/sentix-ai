import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// Minimal accessible-ish popover dropdown used by PriorityFlag & StatusDropdown.
// `renderTrigger(open)` draws the button content; options call onSelect.
export default function Dropdown({ value, options, onSelect, renderOption, renderTrigger, align = 'left', width = 'w-44' }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm transition-colors hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-stroke"
      >
        {renderTrigger ? renderTrigger(value) : value}
        <ChevronDown size={14} className={`text-faint transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          {/* click-away backdrop */}
          <div className="fixed inset-0 z-20" onClick={() => setOpen(false)} />
          <div
            className={`absolute z-30 mt-1 ${width} ${align === 'right' ? 'right-0' : 'left-0'} overflow-hidden rounded-xl border border-stroke bg-elevated py-1 shadow-card animate-fade-in`}
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onSelect(opt)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-white/5 ${
                  opt === value ? 'text-white' : 'text-muted'
                }`}
              >
                {renderOption ? renderOption(opt) : opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
