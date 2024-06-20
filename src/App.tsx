import "./css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import banner from "./assets/banner.jpg";
import Galery from "./pages/Galery";
import Cart from "./pages/Cart";
import Account from "./pages/Account";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Header title="CheakyKicks" />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            title="Achetez"
                            description="des chaussures en cuir"
                            image={banner}
                        />
                    }
                />
                <Route path="/galerie" element={<Galery />} />
                <Route path="/panier" element={<Cart />} />
                <Route
                    path="/mon-compte"
                    element={
                        <Account email="test@gmail.com" password="azerty" />
                    }
                />
            </Routes>
            <Footer year={2024} companyName="CheakyKicks" />
        </BrowserRouter>
    );
}

export default App;
