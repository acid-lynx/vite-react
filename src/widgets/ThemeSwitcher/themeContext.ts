import { createContext } from 'react'

export enum themeType {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface contextProps {
  theme?: themeType
  setTheme?: (theme: themeType) => void
}

export const ThemeContext = createContext<contextProps>({})
