import React, { useState } from "react";
import Card from "../components/Cards";
import SearchBar from "../components/Search";

const Galery = (props: any) => {
    const [dataSearch, setDataSearch] = useState(null);
    return (
        <main className="mainGallery">
            <h1>Galerie</h1>
            <div style={{ padding: "20px" }}>
                <SearchBar setData={setDataSearch} data={dataSearch} />
            </div>
            <section>
                {/* {props.data.map((item: any, index: string) => (
                    <Card
                        key={index}
                        name={item.name}
                        image={item.image.original}
                        category={item.category}
                        gender={item.gender}
                        brand={item.brand}
                        price={item.estimatedMarketValue}
                        id={item.id}
                        
                    />
                ))} */}

                {/* {dataSearch != [] ? <p>Nous n'avons rien trouvé... <br />Veuillez réesayer autre chose.</p> : console.log('hi') } */}

                {!dataSearch
                    ? props.data.map((item: any, index: string) => (
                          <Card
                              key={index}
                              name={item.name}
                              image={item.image.original}
                              category={item.category}
                              gender={item.gender}
                              brand={item.brand}
                              price={item.estimatedMarketValue}
                              id={item.id}
                          />
                      ))
                    : dataSearch.map((item: any, index: string) => (
                          <Card
                              key={index}
                              name={item.name}
                              image={item.image.original}
                              category={item.category}
                              gender={item.gender}
                              brand={item.brand}
                              price={item.estimatedMarketValue}
                              id={item.id}
                          />
                      ))}
            </section>
        </main>
    );
};

export default Galery;
