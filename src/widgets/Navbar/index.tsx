import { useTheme } from "@/app/providers/ThemeProvider";
import NavbarLink from "@/shared/NavbarLink";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className="bg-[var(--bg-secondary)] p-2 flex justify-between items-center">
            <div className="menu-items">
                <NavbarLink to="/" text="Main"/>
                <NavbarLink to="/about" text="About" />
            </div>

            <button
                onClick={ toggleTheme }
                className="bg-gray-800 border border-yellow-800 px-6 py-1 rounded-2xl"
            >
                {theme === 'light-mode' ? '🌙' : '☀️'}
            </button>
        </div>
    )
}
