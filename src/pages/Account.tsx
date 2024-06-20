import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../components/Btns";

interface CredentialsProps {
    email: string;
    password: string;
}

const Account: React.FC<CredentialsProps> = ({ email, password }) => {
    const navigate = useNavigate();
    const handleBtnClick = () => {
        console.log({ password });
        navigate("/");
    };

    return (
        <div>
            <h1>Account</h1>
            <p>This is the account page</p>
            <p>Email: {email}</p>
            <Btn onClick={handleBtnClick} className="btn" text="Déconnexion" />
        </div>
    );
};

export default Account;
