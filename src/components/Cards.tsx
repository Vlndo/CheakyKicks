import React from "react";
import "../css/style.css";
import Btn from "./Btns";
import wishList from "../assets/wishList.svg";

const Card = (props: any) => {
    const addToCart = () => {
        console.log(props.title);
    };
    const addToWishList = () => {
        console.log(props.title);
    };

    console.log(props);
    return (
        <div className="card">
            <img src={props.image} alt={props.title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.description}</p>
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
    );
};

export default Card;
