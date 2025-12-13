import clsx from 'clsx'
import { Outlet } from 'react-router-dom'
import { useTheme } from '@/app/providers/ThemeProvider'
import './styles/index.css'
import Navbar from "@/widgets/Navbar";

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={ clsx('bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen', theme) }>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
