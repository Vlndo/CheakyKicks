import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

interface HeaderProps {
    title: string;
    isAuthenticated: false;
    setModal: boolean;
}

const Header: React.FC<HeaderProps> = ({
    title,
    isAuthenticated,
    setModal,
}) => {
    const triggerModal = () => {
        setModal === true;
        alert("click");
    };

    isAuthenticated === false;

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
                            setModal={false}
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
