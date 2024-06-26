import React from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import bannerImage from "../assets/banner.jpg";
import useScrollToTop from '../components/useScrollToTop';


const Home = (props: any) => {
    useScrollToTop();

    const dataBanner = {
        image: bannerImage,
        title: "Achetez !!!",
        subtitle: "Les meilleurs des chaussures sont chez nous !",
        alt: "chassure en cuir",
    };
    const dataCarouselTop = props.data.slice(0, 3);
    const dataCarouselRecent = props.data.slice(17, 20);

    return (
        <main className="homeMain">
            <Banner data={dataBanner} />
            <Carousel data={dataCarouselTop} title="Nos meilleurs paires" />
            <Carousel data={dataCarouselRecent} title="Nos nouvelles paires" />
        </main>
    );
};

export default Home;
