import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import Picture from "../Picture";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Childish() {

    const [items, setItems] = useState([]);
    const [validation, setValidation] = useState(false);

    useEffect(() => {

        setValidation(true)
        const promisse = axios.get("https://git.heroku.com/back-project-conceito.git/");
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
            <main className="childish-clothes">
                <h2>Promoções</h2>
                <div className="home-childish-products">
                    {items.filter(item => item.category === "infantil" && item.discount > 0).map(item => {
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
                <div className="home-childish-products">
                    {items.filter(item => item.category === "infantil" && item.type === "camisa").map(item => {
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
                <div className="home-childish-products">
                    {items.filter(item => item.category === "infantil" && item.type === "bolsa").map(item => {
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
                <div className="home-childish-products">
                    {items.filter(item => item.category === "infantil" && item.type === "sapato").map(item => {
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

export default Childish;