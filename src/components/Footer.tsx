import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
    year: number;
    companyName: string;
}

const Footer: React.FC<FooterProps> = ({ year, companyName }) => {
    let isAuth = false    

    if (localStorage.getItem("isAuthenticated") === "true") {
        isAuth = true
    }

    return (
        <footer>
            <div className="containerFooter">
                <div className="footerDonnées">
                    <h3>Vos données</h3>
                    <ul>
                        <li><Link to="politique_de_confidentialité" >Politique de confidentialité</Link></li>
                        <li><Link to="politique_de_gestion_de_vos_données" >Politique de gestion de vos données</Link></li>
                        <li><Link to="conditions_d'utilisations">Conditions d'utilisations</Link></li>
                    </ul>
                </div>
                <div className="footerNav">
                    <h3>Naviguer</h3>
                    <ul>
                        <li><Link to="/" >Accueil</Link></li>
                        <li><Link to="Galerie" >Galerie</Link></li>
                        <li><Link to="panier" >Panier</Link></li>
                    </ul>
                </div>
                <div className="footerNavUser">  
                    <h3>Votre compte</h3>
                    <ul>
                        {isAuth ? <li><Link to="mon-compte" >Mon compte</Link></li> : <p>Connectez-vous</p>}
                    </ul>
                </div>
            </div>
            <p>
                &copy; {year} {companyName}
            </p>
        </footer>
    );
};

export default Footer;
