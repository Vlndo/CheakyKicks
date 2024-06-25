import React from "react";
import Card from "./Cards";

const carousel = (props: any) => {
    return (
        <section className="carousel">
            {props.title ? (
                <>
                    <h2>{props.title}</h2> <p>Laissez vous tentez !</p>
                </>
            ) : null}
            <div className="cardContainer">
                {props.data.map((data: any) => {
                    return (
                        <div>
                            <Card
                                image={data.image}
                                title={data.title}
                                description={data.description}
                            />
                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default carousel;
