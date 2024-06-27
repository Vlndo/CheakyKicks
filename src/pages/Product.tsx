import { useEffect, useState } from "react";
import Error404 from "../components/Error404";
import useScrollToTop from '../components/useScrollToTop';
import image from "../assets/chaussure2.jpg"

const Product = () => {

    useScrollToTop();

    const urlcourante = document.location.href;
    const id = urlcourante.split("/sneakers/")[1]
    const [data, setData] = useState([])
    const [isValidUrl, setIsValidUrl] = useState(false)

    useEffect(() => {
        fetch (`https://the-sneaker-database.p.rapidapi.com/sneakers/${id}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f50ad8c12emsh2f681458eb945fcp140c6djsn1c02d5dff3f5',
                'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com'
            }
            })
            .then((response) => response.json())
            .then((dat) => {
            if (dat.results[0] === undefined) {
                setIsValidUrl(false)
            } else {
                setIsValidUrl(true)                          
                if (dat.results[0].image.original === "") {
                    dat.results[0].image.original = image
                }
                 setData(dat.results[0])         
            }
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <>
        {isValidUrl ?         
            <main className="productMain">
            <h1>{data.name}</h1>
            <img src={data.image.original} alt={data.name} />
            <p>{data.estimatedMarketValue} €</p>
            {data.story ? <p>{data.story}</p> : <p>Cette chaussure est encore beaucoup trop mystérieuse pour nous.. Nous faisons le maximum afin de trouver son histoire et ses origines ! <br /> Afin de mieux vous servir, <br /> L'équipe de CheakyKicks </p> }
            </main>
         : 
            <Error404/>}
        </>
    );
};

export default Product;