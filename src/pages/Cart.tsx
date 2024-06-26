import React from "react";
import Panier from "../components/Panier";

const Cart = () => {
  return (
    <div className="Cart">
      <header className="App-header">
        <h1>Bienvenue dans notre boutique</h1>
      </header>
      <main>
        <Panier />
      </main>
    </div>
  );
};

export default Cart;
