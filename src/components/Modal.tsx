import React, { useState, useRef } from "react";
import Btn from "./Btns";

interface Modal {
    title: string;
}

const Modal: React.FC<Modal> = ({ title }) => {
    let inputMail = useRef(null);
    let inputPassword = useRef(null);

    if (!localStorage.getItem("isAuthenticated")) {
        localStorage.setItem("isAuthenticated", "false");
    }

    const [modal, setModal] = useState(false);
    const connexionBtn = () => {
        setModal(!modal);
        console.log("mail : ", inputMail, "password : ", inputPassword);
    };

    const triggerModal = () => {
        if (
            inputMail.current.value != "" &&
            inputPassword.current.value != ""
        ) {
            console.log(
                "mail : ",
                JSON.stringify(inputMail.current.value),
                "password : ",
                JSON.stringify(inputPassword.current.value)
            );
            setModal(true);
            localStorage.setItem("isAuthenticated", "true");
            window.location.reload();
        } else if (!inputMail.current.value || !inputPassword.current.value) {
            setModal(false);
            alert("remplissez les informations");
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
