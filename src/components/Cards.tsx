import {useEffect, useState} from "react";
import "../css/style.css";
import Btn from "./Btns";
import wishList from "../assets/wishList.svg";
import shoes from "../assets/chaussure2.jpg";
import { Link } from "react-router-dom"

const Card = (props: any) => {
    console.log(props.dataBase);
    
    const addToCart = () => {
        console.log(props.title);
    };
    const addToWishList = () => {
        console.log(props.title);
    };

    // const [isAuthenticated, setIsAuthenticated] = useState(false)

    if (props.dataBase.isAuthenticated.token) {
        return (
            <div className="card" itemID={props.id} category={props.category} gender={props.gender} brand={props.brand} >
            <Link to={`/sneakers/${props.id}`}>
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
            </Link>

            </div>
        )
    } else {
        return (
            <div className="card" itemID={props.id} category={props.category} gender={props.gender} brand={props.brand} >
            <Link to={`/sneakers/${props.id}`}>
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
            </Link>

            </div>
        )
    }

    };

export default Card;
