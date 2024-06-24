import "./css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./assets/banner.jpg";
import Galery from "./pages/Galery";
import Cart from "./pages/Cart";
import PrivateRoute from "./components/PrivateRoute";
import Account from "./pages/Account";

function App(): JSX.Element {
    const isAuthenticated = true;

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
                            image={Banner}
                        />
                    }
                />
                <Route path="/galerie" element={<Galery />} />
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
