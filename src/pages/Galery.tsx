import React from "react";
import Card from "../components/Cards";
import SearchBar from "../components/Search";
import image1 from "../images/chaussure1.png";
import image2 from "../images/chaussure2.jpg";
import image3 from "../images/chaussure3.png";

const Galery = () => {
    const data = ["Nike", "Adidas", "Jordan", "Puma", "New Balance"];

    const dataGallery = [
        { title: "Jordan 4", image: image1, description: "Jordan 4" },
        {
            title: "Adidas Stan Smith",
            image: image2,
            description: "Adidas Stan Smith",
        },
        { title: "Air Force 1", image: image3, description: "Air Force 1" },
    ];
    return (
        <>
            <h1>Galery</h1>
            <div style={{ padding: "20px" }}>
                <SearchBar data={data} />
            </div>
            <section>
                {dataGallery.map((item) => (
                    <Card
                        title={item.title}
                        image={item.image}
                        description={item.description}
                    />
                ))}
            </section>
        </>
    );
};

export default Galery;
