import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../components/Btns";
import useScrollToTop from '../components/useScrollToTop';

interface CredentialsProps {
    // email: string;
    // password: string;
}

const Account: React.FC<CredentialsProps> = () => {
    useScrollToTop();
    let passwordForDeleteBtn = useRef(null);
    const navigate = useNavigate();
    const handleBtnClick = () => {
        localStorage.setItem("isAuthenticated", "false");
        navigate("/");
        window.location.reload();
    };
    const deleteAccount = () => {
        console.log(
            "mot de passe écrit dans le champ : ",
            passwordForDeleteBtn.current.value
        );
        console.log(
            "mot de passe dans le local storage : ",
            localStorage.getItem("password")
        );
        if (
            passwordForDeleteBtn.current.value ===
            localStorage.getItem("password")
        ) {
            localStorage.setItem("isAuthenticated", "false");
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            navigate("/");
            window.location.reload();
        } else {
            alert("Mauvais mot de passe");
            window.location.reload();
        }
    };

    return (
        <main>
            <h1>Account</h1>
            <p>This is the account page</p>
            {/* <p>Email: {email}</p> */}
            <Btn
                onClick={handleBtnClick}
                className="btn"
                text="Déconnexion"
                image=""
            />
            <form action="">
                <input type="password" required ref={passwordForDeleteBtn} />
                <Btn
                    onClick={deleteAccount}
                    className="btn"
                    text="Supprimer mon compte"
                    image=""
                />
            </form>
        </main>
    );
};

export default Account;
