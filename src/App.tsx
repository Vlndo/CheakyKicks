import "./css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Galery from "./pages/Galery";
import Cart from "./pages/Cart";
import PrivateRoute from "./components/PrivateRoute";
import Account from "./pages/Account";
import { useState, useEffect } from "react";
import Product from "./pages/Product";
import Error404 from "./components/Error404";

function App(): JSX.Element {
    // const isAuthenticated = true;
    const [dataBase, setDataBase] = useState({users : [], isAuthenticated : {}})
    if (localStorage.getItem("bdd")) {
        setDataBase(localStorage.getItem("bdd"));
        console.log(dataBase);
    }
    const [dataSneakers, setData] = useState([]);
    useEffect(() => {
        fetch ('https://the-sneaker-database.p.rapidapi.com/sneakers?limit=21', {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f50ad8c12emsh2f681458eb945fcp140c6djsn1c02d5dff3f5',
                'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com'
            }
        })
        .then((response) => response.json())
        .then((data) => {
          setData(data.results);
        })
        .catch((error) => console.log(error));
    }, []);

    

    return (
        <BrowserRouter>
            <Header title="CheakyKicks" dataBase={dataBase} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home data={dataSneakers} dataBase={dataBase}
                        />
                    }
                />
                <Route path="galerie" element={<Galery data={dataSneakers} dataBase={dataBase}/>} />
                <Route path="panier" element={<Cart dataBase={dataBase}/>} />
                <Route
                    element={<PrivateRoute dataBase={dataBase} />}
                >
                <Route path="mon-compte" element={<Account dataBase={dataBase}/>} />
                <Route path="/sneakers/*" element={<Product dataBase={dataBase}/>} />
                <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
            <Footer year={2024} companyName="CheakyKicks" dataBase={dataBase}/>
        </BrowserRouter>
    );
}

export default App;
