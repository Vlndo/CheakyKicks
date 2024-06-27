import React from "react";
import Panier from "../components/Panier";

const Cart = (props) => {
    return (
        <div className="Cart">
            <h1>Bienvenue dans notre boutique</h1>
            <Panier />
        </div>
    );
};

export default Cart;
