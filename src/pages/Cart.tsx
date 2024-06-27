import React from "react";
import Panier from "../components/Panier";
import useScrollToTop from '../components/useScrollToTop';

const Cart = (props) => {

    useScrollToTop();

    return (
        <main className="mainPanier">
            <Panier />
        </main>
    );
};

export default Cart;
