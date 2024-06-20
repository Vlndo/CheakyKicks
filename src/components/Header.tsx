import React from "react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header>
            <nav>
                <NavLink to="/">{title}</NavLink>
                <ul>
                    <NavLink to="/galerie">Galerie</NavLink>
                    <NavLink to="/panier">Panier</NavLink>
                    <NavLink to="/mon-compte">Mon compte</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
