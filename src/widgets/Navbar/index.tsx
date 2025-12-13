import { useTheme } from "@/app/providers/ThemeProvider";
import NavbarLink from "@/shared/NavbarLink";
import { Button } from "@/shared/Button";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className="bg-[var(--bg-secondary)] p-2 flex justify-between items-center">
            <div className="menu-items">
                <NavbarLink to="/" text="Main"/>
                <NavbarLink to="/about" text="About" />
            </div>

            <Button
                onClick={ toggleTheme }
            >
                {theme === 'light-mode' ? '🌙' : '☀️'}
            </Button>
        </div>
    )
}
