import { useNavigate } from "react-router-dom";
import Btn from "../components/Btns";
import useScrollToTop from '../components/useScrollToTop';

const Wishlist = (props: any) => {

    useScrollToTop();

    const navigate = useNavigate();
    const getLocalWishlist = localStorage.getItem("wishList");
    const getLocalWishlistObjects = JSON.parse(getLocalWishlist);
    const getLocalIsAuth = localStorage.getItem("isAuthenticated");
    const wishList = JSON.parse(getLocalWishlist);

    const navToGallery = () => {
        navigate("/galerie");
    };

    const deleteElement = (e: any) => {
        let elementId = e.target.parentNode.parentNode.id;
        console.log("id de la div supprimée : ", elementId);
        // Trouver l'index de l'objet à supprimer
        const indexToRemove = getLocalWishlistObjects.findIndex(
            (item: any) => item.id === elementId
        );
        if (indexToRemove !== -1) {
            console.log(
                "id de l'element supprimé dans le localStorage : ",
                getLocalWishlistObjects[indexToRemove].id
            );

            // Supprimer l'élément du tableau
            getLocalWishlistObjects.splice(indexToRemove, 1);

            // Sauvegarder le tableau modifié dans le localStorage
            localStorage.setItem(
                "wishList",
                JSON.stringify(getLocalWishlistObjects)
            );

            // Supprimer l'élément du DOM
            e.target.parentNode.parentNode.remove();
        } else {
            console.log("Element non trouvé dans le localStorage");
        }

        window.location.reload();
    };

    if (wishList.length) {
        return (
            <div>
                <h1>Liste de souhait</h1>
                <section className="listOfItem">
                    {wishList.map((data: any) => {
                        return (
                            <div id={data.id} className="card">
                                <img
                                    src={data.image}
                                    alt={data.alt}
                                    className="card-image"
                                />
                                <p>{data.name}</p>
                                <Btn
                                    text="Supprimer"
                                    className="btn"
                                    onClick={deleteElement}
                                    image=""
                                ></Btn>
                            </div>
                        );
                    })}
                </section>
            </div>
        );
    } else {
        return (
            <>
                <h1>Liste de souhait</h1>
                <h2>Votre liste de souhait est vide</h2>
                <Btn
                    className="btn"
                    onClick={navToGallery}
                    text="Galerie de produits"
                    image=""
                ></Btn>
            </>
        );
    }
};

export default Wishlist;
