import React from "react";
import "../css/style.css";
import Btn from "./Btns";
import wishList from "../assets/wishList.svg";
import shoes from "../assets/chaussure2.jpg";

const Card = (props: any) => {
    const addToCart = () => {
        console.log(props.title);
    };
    const addToWishList = () => {
        console.log(props.title);
    };

    return (
        <div className="card" itemID={props.id} category={props.category} gender={props.gender} brand={props.brand} >
            {props.image! ? <img src={props.image} alt={props.name} className="card-image" /> : <img src={shoes} alt={props.name} className="card-image" />}
            <div className="card-content">
                <h2 className="card-title">{props.name}</h2>
                <p className="card-description">{props.price} €</p>
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
