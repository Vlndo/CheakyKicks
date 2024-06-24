import React from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import bannerImage from "../assets/banner.jpg";

const Home = (props) => {
    const dataBanner = {
        image: bannerImage,
        title: "Achetez !!!",
        subtitle: "Les meilleurs des chaussures sont chez nous !",
    };
    const dataCarouselTop = [];
    const dataCarouselRecent = [];
    return (
        <main>
            <Banner data={dataBanner} />
            <Carousel data={dataCarouselTop} title="Nos meilleurs paires" />
            <Carousel data={dataCarouselRecent} title="Nos nouvelles paires" />
        </main>
    );
};

export default Home;
