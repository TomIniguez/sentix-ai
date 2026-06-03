import { Flag } from 'lucide-react'
import Dropdown from './Dropdown'
import { PRIORITIES } from '../data/mockData'

const colors = {
  Alta: '#EF4444',
  Normal: '#F59E0B',
  Baja: '#64748B',
}

// Interactive priority selector: a colored flag + dropdown (Alta / Normal / Baja).
export default function PriorityFlag({ value, onChange }) {
  const Trigger = (v) => (
    <span className="inline-flex items-center gap-1.5 font-medium" style={{ color: colors[v] }}>
      <Flag size={14} fill={colors[v]} stroke={colors[v]} />
      {v}
    </span>
  )

  const Option = (opt) => (
    <span className="inline-flex items-center gap-2">
      <Flag size={14} fill={colors[opt]} stroke={colors[opt]} />
      {opt}
    </span>
  )

  return (
    <Dropdown
      value={value}
      options={PRIORITIES}
      onSelect={onChange}
      renderTrigger={Trigger}
      renderOption={Option}
      width="w-36"
    />
  )
}
