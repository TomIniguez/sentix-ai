/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Themeable surfaces & text — driven by CSS vars (see index.css).
        // RGB-channel form so Tailwind opacity modifiers (e.g. bg-base/30) keep working.
        base: 'rgb(var(--c-base) / <alpha-value>)',
        panel: 'rgb(var(--c-panel) / <alpha-value>)',
        card: 'rgb(var(--c-card) / <alpha-value>)',
        elevated: 'rgb(var(--c-elevated) / <alpha-value>)',
        hairline: 'rgb(var(--c-hairline) / <alpha-value>)',
        stroke: 'rgb(var(--c-stroke) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        faint: 'rgb(var(--c-faint) / <alpha-value>)',
        content: 'rgb(var(--c-content) / <alpha-value>)',
        'content-soft': 'rgb(var(--c-content-soft) / <alpha-value>)',
        overlay: 'rgb(var(--c-overlay) / <alpha-value>)',
        // Brand gradient anchors (theme-independent)
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
