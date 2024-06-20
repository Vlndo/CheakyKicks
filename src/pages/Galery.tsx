import React from "react";
import Card from '../components/Cards';
import SearchBar from "../components/Search";

const Galery = () => {

    const data = [
        'Nike',
        'Adidas',
        'Jordan',
        'Puma',
        'New Balance'
      ];
    return (
        <>
            <h1>Galery</h1>
            <div style={{ padding: '20px' }}>
                <SearchBar data={data} />
            </div>
            <Card 
        image="./images/chassure1.png"
        title="Titre de la Carte"
        description="Ceci est une description de la carte."
        buttonText="Ajouter au panier"
        buttonImage="https://via.placeholder.com/24"
      />
      <Card 
        image="https://via.placeholder.com/300x200"
        title="Titre de la Carte 2"
        description="Ceci est une description de la carte 2."
        buttonText="Ajouter au panier"
        buttonImage="https://via.placeholder.com/24"
      />
      <Card 
        image="https://via.placeholder.com/300x200"
        title="Titre de la Carte 3"
        description="Ceci est une description de la carte 3."
        buttonText="Ajouter au panier"
        buttonImage="https://via.placeholder.com/24"
      />
    </>
    );
};

export default Galery;
