import React from 'react';

const Product = (props: any) => {
    return (
        <main>
            <h1>{props.name}</h1>
            <img src={props.image.original} alt={props.name} />
            <p>{props.estimatedMarketValue}</p>
            <p>{props.story}</p>
        </main>
    );
};

export default Product;