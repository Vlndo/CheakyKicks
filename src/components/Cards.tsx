import React from "react";
import "../css/style.css";
import Btn from "./Btns";
import wishList from "../assets/wishList.svg";
import shoes from "../assets/chaussure2.jpg";
import { useNavigate } from "react-router-dom";

const Card = (props: any) => {
    const navigate = useNavigate()
    const addToCart = () => {
        console.log(props.title);
    };
    const addToWishList = () => {
        console.log(props.title);
    };

    const productDetails = () => {
        navigate(`/sneakers/${props.id}`)
    }

    return (
        <div className="card" itemID={props.id} category={props.category} gender={props.gender} brand={props.brand} >
            {props.image! ? <img src={props.image} onClick={productDetails} alt={props.name} className="card-image" /> : <img onClick={productDetails} src={shoes} alt={props.name} className="card-image" />}
            <div className="card-content">
                <h2 className="card-title" onClick={productDetails}>{props.name}</h2>
                <p className="card-description" onClick={productDetails}>{props.price} €</p>
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
