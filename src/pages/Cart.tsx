import React from "react";
import Panier from "../components/Panier";

const Cart = (props) => {
    return (
        <main className="mainPanier">
            <h1>Bienvenue dans notre boutique</h1>
            <Panier />
        </main>
    );
};

export default Cart;
