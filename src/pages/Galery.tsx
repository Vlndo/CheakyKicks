import React from "react";
import Card from "../components/Cards";
import SearchBar from "../components/Search";


const Galery = (props: any) => {
    const data = ["Nike", "Adidas", "Jordan", "Puma", "New Balance"];
    console.log(props.data);
    return (
        <>
            <h1>Galery</h1>
            <div style={{ padding: "20px" }}>
                <SearchBar data={data} />
            </div>
            <section>
                {props.data.map((item: any) => (
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
