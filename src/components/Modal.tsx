import React, { useState } from "react";
import Btn from "./Btns";

interface Modal {
    title: string;
    modal: boolean;
    triggerModal: () => void;
}

const Modal: React.FC<Modal> = ({ title, triggerModal, modal }) => {
    const handleClickBtn = () => {
        triggerModal();
        localStorage.setItem("isAuthenticated", "true");
    };

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
                        />
                        <input type="password" placeholder="Mot de passe" />
                        <Btn
                            onClick={handleClickBtn}
                            text="Se connecter"
                            className="btn"
                        />
                    </form>
                </div>
            </>
        );
    } else {
        return (
            <>
                <Btn
                    text="Se connecter"
                    onClick={triggerModal}
                    className="btn"
                ></Btn>
            </>
        );
    }
};

export default Modal;
