import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const [modal, setModal] = useState(false);

    const triggerModal = () => {
        setModal(!modal);
        // alert("click");
    };

    const isAuthenticated = false;

    if (isAuthenticated === false) {
        return (
            <header>
                <nav className="container-header">
                    <NavLink to="/">{title}</NavLink>
                    <ul>
                        <NavLink to="/galerie">Galerie</NavLink>
                        <NavLink to="/panier">Panier</NavLink>
                        <Modal
                            title="Se connecter"
                            modal={modal}
                            triggerModal={triggerModal}
                        ></Modal>
                    </ul>
                </nav>
            </header>
        );
    } else {
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
