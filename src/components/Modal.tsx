import React from "react";
import Btn from "./Btns";

interface Modal {
    title: string;
    setModal: boolean;
    triggerModal: () => void;
}

const Modal: React.FC<Modal> = ({ title, setModal, triggerModal }) => {
    setModal === false;

    triggerModal = () => {
        if (setModal === true) {
            setModal = false;
            alert("ya pas de modale");
        } else {
            setModal = true;
            alert("ya une modale");
        }
    };

    const handleClickBtn = () => {
        triggerModal();
    };

    if (setModal === true) {
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
