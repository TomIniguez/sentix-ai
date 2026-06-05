import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const ThemeContext = createContext(null)
const STORAGE_KEY = 'sentix-theme'

// 'sistema' follows the OS; 'claro'/'oscuro' force light/dark.
function resolveTheme(theme, prefersDark) {
  if (theme === 'claro') return 'light'
  if (theme === 'oscuro') return 'dark'
  return prefersDark ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'sistema'
    } catch {
      return 'sistema'
    }
  })

  const getPrefersDark = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

  const [resolved, setResolved] = useState(() => resolveTheme(theme, getPrefersDark()))

  // Apply resolved theme to <html> and keep it in sync.
  useEffect(() => {
    const r = resolveTheme(theme, getPrefersDark())
    setResolved(r)
    document.documentElement.dataset.theme = r
  }, [theme])

  // React to OS changes while in 'sistema' mode.
  useEffect(() => {
    if (theme !== 'sistema') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      const r = e.matches ? 'dark' : 'light'
      setResolved(r)
      document.documentElement.dataset.theme = r
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [theme])

  const setTheme = useCallback((next) => {
    setThemeState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  // Quick toggle used by the profile "Modo claro/oscuro" item.
  const toggleTheme = useCallback(() => {
    setTheme(resolved === 'dark' ? 'claro' : 'oscuro')
  }, [resolved, setTheme])

  return (
    <ThemeContext.Provider value={{ theme, resolved, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
