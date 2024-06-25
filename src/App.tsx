import "./css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Galery from "./pages/Galery";
import Cart from "./pages/Cart";
import PrivateRoute from "./components/PrivateRoute";
import Account from "./pages/Account";
import image1 from "./images/chaussure1.png";
import image2 from "./images/chaussure2.jpg";
import image3 from "./images/chaussure3.png";

function App(): JSX.Element {
    const isAuthenticated = true;

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
        <BrowserRouter>
            <Header title="CheakyKicks" />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home data={dataGallery}
                        />
                    }
                />
                <Route path="/galerie" element={<Galery data={dataGallery}/>} />
                <Route path="/panier" element={<Cart />} />
                <Route
                    element={<PrivateRoute isAuthenticated={isAuthenticated} />}
                >
                    <Route path="/mon-compte" element={<Account />} />
                </Route>
            </Routes>
            <Footer year={2024} companyName="CheakyKicks" />
        </BrowserRouter>
    );
}

export default App;
