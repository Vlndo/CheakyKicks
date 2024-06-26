import React from "react";
import Card from "./Cards";

const carousel = (props: any) => {
    return (
        <section className="carousel">
            {props.title ? (
                <>
                    <h2>{props.title}</h2>
                    <p>Laissez vous tentez !</p>
                </>
            ) : null}
            <div className="cardContainer">
                {props.data.map((data: any, index: string) => {
                    return (
                            <Card
                                key={index}
                                name={data.name}
                                image={data.image.original}
                                category={data.category}
                                gender={data.gender}
                                brand={data.brand}
                                price={data.estimatedMarketValue}
                                id={data.id}
                            />
                    );
                })}
            </div>

        </section>
    );
};

export default carousel;
