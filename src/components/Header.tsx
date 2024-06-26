import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    if (!localStorage.getItem("isAuthenticated")) {
        localStorage.setItem("isAuthenticated", "false");
    }

    if (localStorage.getItem("isAuthenticated") === "false") {
        return (
            <header>
                <nav className="container-header">
                    <NavLink to="/">{title}</NavLink>
                    <ul>
                        <NavLink to="/galerie">Galerie</NavLink>
                        <NavLink to="/panier">Panier</NavLink>
                        <Modal title="Se connecter" />
                        <Modal title="S'inscrire" />
                    </ul>
                </nav>
            </header>
        );
    } else if (localStorage.getItem("isAuthenticated") === "true") {
        return (
            <header>
                <nav className="container-header">
                    <NavLink to="/">{title}</NavLink>
                    <ul>
                        <NavLink to="/galerie">Galerie</NavLink>
                        <NavLink to="/panier">Panier</NavLink>
                        <NavLink to="/mon-compte">Mon compte</NavLink>
                    </ul>
                </nav>
            </header>
        );
    }
};

export default Header;
