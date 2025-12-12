import { useTheme } from "@/app/providers/ThemeProvider";
import NavbarLink from "@/shared/NavbarLink";

export default function Navbar() {
    const { toggleTheme } = useTheme()
    return (
        <div className="bg-bgSecondary">
            <button
                onClick={ toggleTheme }
                className="bg-amber-600 text-white border border-yellow-800 px-6 py-1 rounded-2xl"
            >
                Theme
            </button>
            <NavbarLink to="/" text="Main"/>
            <NavbarLink to="/about" text="About" />
        </div>
    )
}
