import React, { useEffect, useState } from "react";
import Btn from "./Btns";
import { useNavigate } from "react-router-dom";
import image from "../assets/chaussure2.jpg"

interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

const Panier: React.FC = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        // Récupérer le contenu du panier depuis le localStorage
        const savedCart = JSON.parse(
            localStorage.getItem("cart") || "[]"
        ) as CartItem[];
        setCart(savedCart);
    }, []);

    const updateCart = (updatedCart: CartItem[]) => {
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const deleteItem = (id: number) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        updateCart(updatedCart);
    };

    const incrementQuantity = (id: number) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        updateCart(updatedCart);
    };

    const decrementQuantity = (id: number) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        updateCart(updatedCart);
    };
    const deleteCart = () => {

        setCart([]);
        localStorage.setItem('cart', "[]");
    };

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const localCart = JSON.parse(localStorage.getItem("cart"));

    const navToGallery = () => {
        navigate("/galerie");
    };
    if (localCart.length > 0) {
        return (
            <main className="panierMain">
                <h1>Votre Panier</h1>
                <section className="listOfItem">
                    {cart.map((item) => (
                        <div key={item.id} className="card">
                        {item.image ? <img src={item.image} alt="" className="card-image" /> : <img src={image} alt="" className="card-image" />}
                            {item.name} - Quantité: {item.quantity}
                            <p>Prix : {item.price * item.quantity} €</p>
                            <div className="btnsDiv">
                                <Btn
                                    text="-"
                                    className="btn"
                                    onClick={() => decrementQuantity(item.id)}
                                    image=""
                                />
                                <Btn
                                    text="+"
                                    className="btn"
                                    onClick={() => incrementQuantity(item.id)}
                                    image=""
                                />
                                <Btn
                                    text="Supprimer"
                                    className="btn"
                                    onClick={() => deleteItem(item.id)}
                                    image=""
                                ></Btn>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="btnsDiv">
                    <h3>Total : {totalPrice} €</h3>
                    <Btn
                        text="Vider le panier"
                        onClick={deleteCart}
                        className="btn"
                        image=""
                    ></Btn>
                </section>
            </main>
        );
    } else {
        return (
            <>
                <h1>Votre Panier est vide </h1>
                <Btn
                    className="btn"
                    onClick={navToGallery}
                    text="Galerie de produits"
                    image=""
                ></Btn>
            </>
        );
    }
};

export default Panier;
