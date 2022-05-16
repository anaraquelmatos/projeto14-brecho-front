import "./style.css";
import Header from "./../Header";
import Footer from "./../Footer";
import Color from "../Color";
import Sizes from "../Sizes"
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";

function Product() {

    const { idProduct } = useParams();

    const [items, setItems] = useState([]);

    const key = 'userLocal';

    const navigate = useNavigate();

    const [itemInformation, setItemInformation] = useState({
        itemName: '',
        color: "",
        size: "",
        price: ''
    });

    useEffect(() => {
        const promisse = axios.get(`http://localhost:5000/product/${idProduct}`,);
        promisse.then(response => {
            const { data } = response;
            setItems(data);
            setItemInformation({ ...itemInformation, itemName: data.itemName, price: data.price })
            console.log(data)
        })
        promisse.catch(warning);
    }, [idProduct]);

    function warning() {
        alert("Não foi possível carregar o produto")
    }

    console.log(itemInformation)

    return items.length !== 0 ? (
        <>
            <Header />
            <section className="product">
                <img src={items.image} alt="produto"></img>
                <h2>{items.itemName}</h2>
                <div className="product-form">
                    <div className="all-colors">
                        <h2>Cores disponíveis:</h2>
                        <div className="colors">
                            {console.log(items.colors)}
                            {items.colors.map(item => {
                                return (
                                    <Color color={item.color} itemInformation={itemInformation} setItemInformation={setItemInformation} />
                                );
                            })}
                        </div>
                    </div>
                    <h2>Tamanhos disponíveis:</h2>
                    <div className="lenght">
                        {console.log(items.sizes)}
                        {items.sizes.map(item => {
                            return (
                                <Sizes size={item.size} itemInformation={itemInformation} setItemInformation={setItemInformation} />
                            );
                        })}

                    </div>
                    <h2>Descrição:</h2>
                    <div className="item-description">
                        <p>{items.description}</p>
                    </div>
                    <h2>Valor:</h2>
                    <div className="item-value">
                        <div className="item-price">
                            <div className="price-tag">
                                <h3 >R$ {items.price}</h3>
                            </div>
                            <div className="price-discount">
                                <h3>R$ {items.price - (items.price * items.discount) / 100}</h3>
                            </div>
                        </div>
                        <p>ou em até <strong>10x</strong> de <strong>R$ {(items.price - (items.price * items.discount) / 100) / 10}</strong> sem juros no cartão</p>
                    </div>
                    <button className="add-product" onClick={() => {
                        console.log(itemInformation)
                        if (localStorage.getItem(key) === null) {
                            localStorage.setItem(key, JSON.stringify(itemInformation));
                        } else {
                            localStorage.setItem(key,
                                JSON.stringify({...itemInformation})
                            );
                        }
                        navigate("/shopping")
                    }}>Adicionar</button>
                </div>
            </section>
            <Footer />
        </>
    ) : (
        <>
            <Header />
            <Footer />
        </>
    )

}

export default Product;