import "../styles/NavBar.scss";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setOpen(false);
    };

    const isActive = (path) => {
        if (path === "/") return location.pathname === "/";
        return location.pathname.startsWith(path);
    };

    return (
        <header className="nav-bar">
            <img src="/logo.png" alt="" />

            <button className="menu" onClick={() => setOpen(!open)}>
                {open ? <X /> : <Menu />}
            </button>

            <nav className={`nav-links ${open ? "open" : ""}`}>
                <ul>
                    <li className={isActive("/") ? "active" : ""}>
                        <NavLink to="/" end onClick={handleClick}>
                            Home
                        </NavLink>
                    </li>

                    <li className={isActive("/about") ? "active" : ""}>
                        <NavLink to="/about" onClick={handleClick}>
                            About
                        </NavLink>
                    </li>

                    <li className={isActive("/services") ? "active" : ""}>
                        <NavLink to="/services" onClick={handleClick}>
                            Services
                        </NavLink>
                    </li>

                    <li className={isActive("/gallery") ? "active" : ""}>
                        <NavLink to="/gallery" onClick={handleClick}>
                            Gallery
                        </NavLink>
                    </li>

                    <li className={isActive("/contact") ? "active" : ""}>
                        <NavLink to="/contact" onClick={handleClick}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}