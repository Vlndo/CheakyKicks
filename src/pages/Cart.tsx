import React from "react";
import Panier from "../components/Panier";
import useScrollToTop from '../components/useScrollToTop';

const Cart = (props) => {

    useScrollToTop();

    return (
        <main className="mainPanier">
            <h1>Bienvenue dans notre boutique</h1>
            <Panier />
        </main>
    );
};

export default Cart;
