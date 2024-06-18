import React from "react";
import { Link } from "react-router-dom";

interface CredentialsProps {
    email: string;
    password: string;
}

const Account: React.FC<CredentialsProps> = ({ email, password }) => {
    console.log(password);
    return (
        <div>
            <h1>Account</h1>
            <p>This is the account page</p>
            <p>Email: {email}</p>
            <Link to="/" className="btn">
                Déconnexion
            </Link>
        </div>
    );
};

export default Account;
