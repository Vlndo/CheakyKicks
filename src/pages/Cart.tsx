import React from "react";
import Panier from "../components/Panier";
import useScrollToTop from '../components/useScrollToTop';

const Cart = (props) => {

    useScrollToTop();

    return (
        <div className="Cart">
            <h1>Bienvenue dans notre boutique</h1>
            <Panier />
        </div>
    );
};

export default Cart;
