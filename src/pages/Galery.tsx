import React from "react";
import Card from "../components/Cards";
import SearchBar from "../components/Search";


const Galery = (props: any) => {
    const data = ["Nike", "Adidas", "Jordan", "Puma", "New Balance"];
    return (
        <main className="mainGallery">
            <h1>Galerie</h1>
            <div style={{ padding: "20px" }}>
                <SearchBar data={data} />
            </div>
            <section>
                {props.data.map((item: any) => (
                    <Card
                        name={item.name}
                        image={item.image.original}
                        category={item.category}
                        gender={item.gender}
                        brand={item.brand}
                        price={item.price}
                        id={item.id}
                    />
                ))}
            </section>
        </main>
    );
};

export default Galery;
