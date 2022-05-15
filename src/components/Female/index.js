import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import Picture from "../Picture";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Female() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const promisse = axios.get("http://localhost:5000");
        promisse.then(response => {
            const { data } = response;
            setItems(data);
        })
        promisse.catch(warning);
    }, []);

    function warning() {
        alert("Não foi possível carregar os produtos")
    }

    return (
        <>
            <Header />
            <main className="feminine-clothes">
                <h2>Promoções</h2>
                <div className="home-female-products">
                    {items.filter(item => item.categoria === "feminino" && item.discount > 0).map(item => {
                        return (
                            <Link to={`/product/${item.id}`} key={item.categoria + item.itemName + item.id}>
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
                    {items.filter(item => item.categoria === "feminino" && item.type === "camisas").map(item => {
                        return (
                            <Link to={`/product/${item.id}`} key={item.categoria + item.itemName + item.id}>
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
                    {items.filter(item => item.categoria === "feminino" && item.type === "bolsas").map(item => {
                        return (
                            <Link to={`/product/${item.id}`} key={item.categoria + item.itemName + item.id}>
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
                    {items.filter(item => item.categoria === "feminino" && item.type === "sapato").map(item => {
                        return (
                            <Link to={`/product/${item.id}`} key={item.categoria + item.itemName + item.id}>
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