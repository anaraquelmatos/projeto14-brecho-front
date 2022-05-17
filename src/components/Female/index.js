import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import Picture from "../Picture";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Female() {

    const [items, setItems] = useState([]);
    const [validation, setValidation] = useState(false);

    useEffect(() => {

        setValidation(true)
        const promisse = axios.get("http://localhost:5000");
        promisse.then(response => {
            const { data } = response;
            setItems(data);
            setValidation(true);
        })
        promisse.catch(() => {
            setValidation(true)
            warning()
        });
    }, [validation]);

    function warning() {
        alert("Não foi possível carregar os produtos")
    }

    return (
        <>
            <Header />
            <main className="feminine-clothes">
                <h2>Promoções</h2>
                <div className="home-female-products">
                    {items.filter(item => item.category === "feminino" && item.discount > 0).map(item => {
                        return (
                            <Link to={`/product/${item.idp}`} key={item.category + item.itemName + item.idp}>
                                <Picture
                                    image={item.image}
                                    itemName={item.itemName}
                                    description={item.description}
                                    storePrice={item.storePrice}
                                    price={item.price} 
                                    discount={item.discount} />
                            </Link>
                        )
                    })}
                </div>
                <h2>Camisas</h2>
                <div className="home-female-products">
                    {items.filter(item => item.category === "feminino" && item.type === "camisa").map(item => {
                        return (
                            <Link to={`/product/${item.idp}`} key={item.category + item.itemName + item.idp}>
                                <Picture
                                    image={item.image}
                                    itemName={item.itemName}
                                    description={item.description}
                                    storePrice={item.storePrice}
                                    price={item.price}
                                    discount={item.discount} />
                            </Link>
                        )
                    })}
                </div>
                <h2>Bolsas</h2>
                <div className="home-female-products">
                    {items.filter(item => item.category === "feminino" && item.type === "bolsa").map(item => {
                        return (
                            <Link to={`/product/${item.idp}`} key={item.category + item.itemName + item.idp}>
                                <Picture
                                    image={item.image}
                                    itemName={item.itemName}
                                    description={item.description}
                                    storePrice={item.storePrice}
                                    price={item.price}
                                    discount={item.discount} />
                            </Link>
                        )
                    })}
                </div>
                <h2>Sapatos</h2>
                <div className="home-female-products">
                    {items.filter(item => item.category === "feminino" && item.type === "sapato").map(item => {
                        return (
                            <Link to={`/product/${item.idp}`} key={item.category + item.itemName + item.idp}>
                                <Picture
                                    image={item.image}
                                    itemName={item.itemName}
                                    description={item.description}
                                    storePrice={item.storePrice}
                                    price={item.price}
                                    discount={item.discount} />
                            </Link>
                        )
                    })}
                </div>
            </main>
            <Footer />
        </>
    )

}

export default Female;