import React from "react";
import { Link } from "react-router-dom";

interface CredentialsProps {
    email: string;
    password: string;
}

const Account: React.FC<CredentialsProps> = ({ email, password }) => {
    let btnMdp = document.querySelector(".mdp");

    if (btnMdp != null) {
        btnMdp.addEventListener("click", () => {
            console.log({ password });
        });
    } else {
        console.log("btnMdp is null");
    }

    return (
        <div>
            <h1>Account</h1>
            <p>This is the account page</p>
            <p>Email: {email}</p>
            <Link to="/" className="btn">
                Déconnexion
            </Link>
            <button className="mdp">Mot de passe</button>
        </div>
    );
};

export default Account;
