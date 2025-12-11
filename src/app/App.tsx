import clsx from 'clsx'
import { Link, Outlet } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { useTheme } from '@/app/providers/ThemeProvider'

import './styles/index.scss'

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <ThemeProvider>
            <div className={ clsx('app', theme) }>
                <button onClick={ toggleTheme }>TOGGLE</button>
                <Link to={ '/' }>Главная</Link>
                <Link to={ '/about' }>О сайте</Link>

                <Outlet/>
            </div>
        </ThemeProvider>
    )
}
