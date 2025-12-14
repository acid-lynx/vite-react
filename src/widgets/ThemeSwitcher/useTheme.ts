import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from './themeProvider'
import { ThemeContext, themeType } from './themeContext'

interface ThemeProps {
  toggleTheme: () => void
  theme: themeType
}

export function useTheme(): ThemeProps {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === themeType.DARK ? themeType.LIGHT : themeType.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
