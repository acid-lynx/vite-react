import { NavLink } from "react-router-dom";

interface NavbarLinkProps {
    to: string;
    text?: string;
}

export default function NavbarLink({to, text, ...rest}: NavbarLinkProps) {
    return (
        <NavLink
            className="mx-4"
            to={ to }
            { ...rest }
        >
            { text }
        </NavLink>
    )
}
