import React, { useState, useRef } from "react";
import Btn from "./Btns";

interface Modal {
    title: string;
    // x: number;
}

const Modal: React.FC<Modal> = ({ title }) => {
    let inputMail = useRef(null);
    let inputPassword = useRef(null);
    // let x: number | undefined;
    // if (!x) {
    //     x = 0;
    // } else {
    //     x = x + 1;
    // }
    // const LocalStrorageUsers = {
    //     email: `email ${x}`,
    //     password: `password ${x}`,
    // };

    if (!localStorage.getItem("isAuthenticated")) {
        localStorage.setItem("isAuthenticated", "false");
    }

    const [modal, setModal] = useState(false);
    const connexionBtn = () => {
        setModal(!modal);
        console.log("mail : ", inputMail, "password : ", inputPassword);
    };

    const triggerModal = () => {
        if (title === "S'inscrire") {
            if (
                inputMail.current.value != "" &&
                inputPassword.current.value != ""
            ) {
                setModal(true);
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("email", inputMail.current.value);
                localStorage.setItem("password", inputPassword.current.value);
                // x++;
                window.location.reload();
            } else if (
                !inputMail.current.value ||
                !inputPassword.current.value
            ) {
                setModal(false);
                alert("remplissez les informations");
            }
        } else if (title === "Se connecter") {
            if (
                inputMail.current.value === localStorage.getItem("email") &&
                inputPassword.current.value === localStorage.getItem("password")
            ) {
                console.log(
                    "mail : ",
                    inputMail.current.value,
                    "password : ",
                    inputPassword.current.value
                );
                setModal(true);
                localStorage.setItem("isAuthenticated", "true");
                window.location.reload();
            } else if (
                inputMail.current.value != localStorage.getItem("email") ||
                inputPassword.current.value != localStorage.getItem("password")
            ) {
                setModal(false);
                alert("Utilisateur inconnu");
            }
            return;
        }
    };

    if (localStorage.getItem("isAuthenticated") === "false") {
    }

    if (modal === true) {
        return (
            <>
                <div>
                    <h2>{title}</h2>
                    <form action="">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                            ref={inputMail}
                        />
                        <input
                            type="password"
                            id="password"
                            placeholder="Mot de passe"
                            required
                            ref={inputPassword}
                        />
                        <Btn
                            onClick={triggerModal}
                            text={title}
                            className="btn"
                            image=""
                        />
                    </form>
                </div>
            </>
        );
    } else {
        return (
            <>
                <Btn
                    text={title}
                    onClick={connexionBtn}
                    className="btn"
                    image=""
                ></Btn>
            </>
        );
    }
};

export default Modal;
