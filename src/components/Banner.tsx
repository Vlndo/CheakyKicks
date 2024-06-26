import React from 'react';

function Banner (props: any)  {
    return (
        <section className='banner'>
            <img src={props.data.image} alt={props.data.alt} />
            <div className='shadow'></div>
            <p>{props.data.title}</p>
            <h1>{props.data.subtitle}</h1>
        </section>
    );
};

export default Banner;

