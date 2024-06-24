import React from 'react';
import Cards from './Cards';

const carousel = (props) => {
    return (
        <section>
            {props.title ? <><h2>{props.title}</h2> <p>Laissez vous tentez !</p></> :  null} 
            {props.data.map((data) => {
                return (
                    <div>
                    <Cards image={data.image} title={data.title} description={data.description} />
                    </div>
                )
            })}
        </section>
    );
};

export default carousel;