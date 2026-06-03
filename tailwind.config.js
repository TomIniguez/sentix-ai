/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Base surfaces (deep navy / slate dark theme)
        base: '#0B0F19',
        panel: '#111827',
        card: '#1E293B',
        elevated: '#243044',
        hairline: '#1F2937',
        stroke: '#334155',
        muted: '#94A3B8',
        faint: '#64748B',
        // Brand gradient anchors
        brandFrom: '#3B82F6',
        brandTo: '#8B5CF6',
        // Category palette (matches data spec)
        usabilidad: '#8B5CF6',
        operaciones: '#10B981',
        friccion: '#F97316',
        oportunidad: '#3B82F6',
        problemas: '#EF4444',
        positivos: '#22C55E',
        // Sentiment / accents
        accent: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -12px rgba(0,0,0,0.5)',
        glow: '0 0 0 1px rgba(139,92,246,0.25), 0 8px 30px -8px rgba(59,130,246,0.35)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.35s ease-out',
      },
    },
  },
  plugins: [],
}
