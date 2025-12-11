import clsx from 'clsx'
import { Link, Outlet } from 'react-router-dom'
import { useTheme } from '@/app/providers/ThemeProvider'
import './styles/index.css'

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={ clsx('app', theme) }>
            <div className="text-5xl">
                <button onClick={ toggleTheme }>TOGGLE</button>
                <Link to={ '/' }>Главная</Link>
                <Link to={ '/about' }>О сайте</Link>
            </div>

            <Outlet/>
        </div>
    )
}
