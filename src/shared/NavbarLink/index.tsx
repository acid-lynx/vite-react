import { NavLink } from "react-router-dom";

interface NavbarLinkProps {
    to: string;
    text?: string;
}

export default function NavbarLink({to, text, ...rest}: NavbarLinkProps) {
    return (
        <NavLink
            className=""
            to={ to }
            { ...rest }
        >
            { text }
        </NavLink>
    )
}
