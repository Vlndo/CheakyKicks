import React from "react";
import "../css/style.css";
import Btn from "./Btns";
import wishList from "../assets/wishList.svg";
import shoes from "../assets/chaussure2.jpg";
import { useNavigate } from "react-router-dom";

const Card = (props: any) => {
    const LocalItem = {
        id: props.id,
        name: props.name,
        image: props.image,
        price: props.price,
        quantity: props.quantity,
    };

    let localWishlists = JSON.parse(localStorage.getItem("wishList"));
    let localCart = JSON.parse(localStorage.getItem("cart"));

    if (!localWishlists) {
        localWishlists = [];
    }

    if (!localCart) {
        localCart = [];
    }

    const navigate = useNavigate();

    const addToCart = () => {
        const existingIndex = localCart.findIndex(
            (item: any) => item.id === LocalItem.id
        );

        if (existingIndex !== -1) {
            // Si le produit existe déjà dans le panier, incrémentez la quantité
            localCart[existingIndex].quantity += 1;
        } else {
            // Sinon, ajoutez le produit avec une quantité de 1
            localCart.push({ ...LocalItem, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(localCart));
        alert(`${props.name} a bien été ajouté à votre panier`);
        console.log(localCart);
    };
    const addToWishList = () => {
        localWishlists.push(LocalItem);
        localStorage.setItem("wishList", JSON.stringify(localWishlists));
        alert(`${props.name} a bien été ajouté à la liste de souhait`);
    };

    const productDetails = () => {
        navigate(`/sneakers/${props.id}`);
    };

    return (
        <div
            className="card"
            itemID={props.id}
            category={props.category}
            gender={props.gender}
            brand={props.brand}
        >
            {props.image! ? (
                <img
                    src={props.image}
                    onClick={productDetails}
                    alt={props.name}
                    className="card-image"
                />
            ) : (
                <img
                    onClick={productDetails}
                    src={shoes}
                    alt={props.name}
                    className="card-image"
                />
            )}
            <div className="card-content">
                <h2 className="card-title" onClick={productDetails}>
                    {props.name}
                </h2>
                <p className="card-description" onClick={productDetails}>
                    {props.price} €
                </p>
                <div className="btnsDiv">
                    <Btn
                        className="btn"
                        image=""
                        text="Ajouter au panier"
                        onClick={addToCart}
                    ></Btn>
                    <Btn
                        className="btn"
                        text=""
                        image={wishList}
                        onClick={addToWishList}
                    ></Btn>
                </div>
            </div>
        </div>
    );
};

export default Card;
