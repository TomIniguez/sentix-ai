import { useTheme } from '../../context/ThemeContext'

// Theme-aware colors for recharts axes / grid / tooltips (recharts needs
// concrete color strings, so we resolve them from the active theme here).
export default function useChartColors() {
  const { resolved } = useTheme()
  if (resolved === 'light') {
    return {
      grid: '#E2E8F0',
      axis: '#94A3B8',
      tooltipBg: '#FFFFFF',
      tooltipBorder: '#E2E8F0',
      cursor: 'rgba(15,23,42,0.05)',
    }
  }
  return {
    grid: '#1F2937',
    axis: '#64748B',
    tooltipBg: '#243044',
    tooltipBorder: '#334155',
    cursor: 'rgba(255,255,255,0.04)',
  }
}
