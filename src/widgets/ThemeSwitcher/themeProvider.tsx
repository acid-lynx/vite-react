import { FC, useMemo, useState } from 'react'
import { ThemeContext, themeType } from './themeContext'

export const LOCAL_STORAGE_THEME_KEY = 'theme'
const activeTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as themeType || themeType.LIGHT

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(activeTheme)
  const data = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={ data }>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
