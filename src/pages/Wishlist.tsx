import Btn from "../components/Btns";

const Wishlist = (props: any) => {
    const wishList = JSON.parse(localStorage.getItem("wishList"));

    const deleteElement = (e: any) => {
        console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.get;
        e.target.parentNode.parentNode.remove();
    };

    console.log(wishList);
    return (
        <div>
            <h1>Liste de souhait</h1>
            <div>
                {wishList.map((data: any) => {
                    return (
                        <div id={data.id}>
                            <img src={data.image} alt={data.alt} />
                            <p>{data.name}</p>
                            <Btn
                                text="Supprimer"
                                className="btn"
                                onClick={deleteElement}
                            ></Btn>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Wishlist;
