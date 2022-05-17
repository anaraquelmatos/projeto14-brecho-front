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
        price: '',
        discount: '',
        image: '',
        description: '',
    });

    const [info, setInfo] = useState({
        color: '',
        size: ''
    });

    useEffect(() => {
        const promisse = axios.get(`http://localhost:5000/product/${idProduct}`);
        promisse.then(response => {
            const { data } = response;
            setItems([...items, data]);
            setItemInformation({...itemInformation, itemName: data.itemName, price: data.price, discount: data.discount,
            image: data.image, description: data.description});
            setInfo({...info, color: data.color, size: data.size});
        })
        promisse.catch(warning);
    }, [idProduct, items.itemName]);

    function warning() {
        alert("Não foi possível carregar o produto");
    }

    return items.length !== 0 ? (
        <>
            <Header />
            <section className="product">
                <img src={itemInformation.image} alt="produto"></img>
                <h2>{items.itemName}</h2>
                <div className="product-form">
                    <div className="all-colors">
                        <h2>Cor disponível:</h2>
                        <div className="colors">
                            {items.map(item => {
                                return (
                                    <Color key={item.idp + item.color + item.itemName} color={item.color} info={info} setInfo={setInfo} />
                                );
                            })}
                        </div>
                    </div>
                    <h2>Tamanho disponível:</h2>
                    <div className="lenght">
                        {items.map(item => {
                            return (
                                <Sizes key={item.idp + item.size + item.itemName} size={item.size} info={info} setInfo={setInfo} />
                            );
                        })}

                    </div>
                    <h2>Descrição:</h2>
                    <div className="item-description">
                        <p>{itemInformation.description}</p>
                    </div>
                    <h2>Valor:</h2>
                    <div className="item-value">
                        <div className="item-price">
                            <div className="price-tag">
                                <h3 >R$ {itemInformation.price}</h3>
                            </div>
                            <div className="price-discount">

                                <h3>R$ {itemInformation.price - (itemInformation.price * itemInformation.discount) / 100}</h3>
                            </div>
                        </div>
                        <p>ou em até <strong>10x</strong> de <strong>R$ {(itemInformation.price - (itemInformation.price * itemInformation.discount) / 100) / 10}</strong> sem juros no cartão</p>
                    </div>
                    <button className="add-product" onClick={() => {

                        if (localStorage.getItem(key) === null) {
                            localStorage.setItem(key, JSON.stringify(info));
                        } else {
                            console.log(localStorage.getItem(key))
                            localStorage.setItem(key, JSON.stringify([...info]));
                            console.log(localStorage.getItem(key))
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