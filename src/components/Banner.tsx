import React from 'react';

function Banner (props: any)  {
    console.log(props)
    return (
        <section className='banner'>
            <img src={props.data.image} alt={props.data.alt} />
            <p>{props.data.title}</p>
            <h1>{props.data.subtitle}</h1>
        </section>
    );
};

export default Banner;

