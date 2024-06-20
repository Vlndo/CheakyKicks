import React from "react";

interface BanniereProps {
    title: string;
    description: string;
    image: string;
}

const Home: React.FC<BanniereProps> = ({ title, description, image }) => {
    return (
        <div>
            <p>barre de recherche</p>
            <div>
                <img src={image} alt={description} />
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Home;
