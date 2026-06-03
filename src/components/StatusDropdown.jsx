import Dropdown from './Dropdown'
import { STATUSES } from '../data/mockData'

const styles = {
  Abierto: { color: '#3B82F6', dot: '#3B82F6' },
  'En progreso': { color: '#F59E0B', dot: '#F59E0B' },
  Resuelto: { color: '#22C55E', dot: '#22C55E' },
}

// Interactive estado selector: a colored status pill + dropdown.
export default function StatusDropdown({ value, onChange }) {
  const Pill = (v) => {
    const s = styles[v] || styles.Abierto
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
        style={{ color: s.color, backgroundColor: `${s.color}1A`, boxShadow: `inset 0 0 0 1px ${s.color}33` }}
      >
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.dot }} />
        {v}
      </span>
    )
  }

  const Option = (opt) => Pill(opt)

  return (
    <Dropdown
      value={value}
      options={STATUSES}
      onSelect={onChange}
      renderTrigger={Pill}
      renderOption={Option}
      width="w-40"
    />
  )
}
