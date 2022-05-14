import "./style.css";
import Header from "./../Header";
import Footer from "./../Footer";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";

function Product() {

    const { idProduct } = useParams();

    const [item, setItem] = useState([]);

    const [itemInformation, setItemInformation] = useState({
        itemName: "",
        color: "",
        size: "",
        value: ""
    });

    useEffect(() => {
        const promisse = axios.get(`http://localhost:5000/product/${idProduct}`,);
        promisse.then(response => {
            const { data } = response;
            setItem(data);
        })
        promisse.catch(warning);
    }, [idProduct]);

    function warning() {
        alert("Não foi possível carregar o produto")
    }

    function sendItem(event) {
        event.preventDefault();
        const promisse = axios.post("http://localhost:5000/shopping", itemInformation);
        promisse.then(response => {
            const { data } = response;
            console.log(data);
        });
        promisse.catch(() => {
            warning();
        })

        function warning() {
            alert('Não foi possível executar a ação');
        }
    }

    return (
        <>
            <Header />
            <section className="product">
                <img src={item.image} alt="produto"></img>
                <h2>{item.itemName}</h2>
                <form className="product-form" onSubmit={sendItem}>
                    <div className="all-colors">
                        <h2>Cores disponíveis:</h2>
                        <div className="colors">
                            <button className="white" onClick={() => setItemInformation({ ...itemInformation, color: "Branco" })}></button>
                            <button className="black" onClick={() => setItemInformation({ ...itemInformation, color: "Preto" })}></button>
                            <button className="blue" onClick={() => setItemInformation({ ...itemInformation, color: "Azul" })}></button>
                            <button className="red" onClick={() => setItemInformation({ ...itemInformation, color: "Vermelho" })}></button>
                        </div>
                    </div>
                    <h2>Tamanhos disponíveis:</h2>
                    <div className="lenght">
                        <button className="pp" onClick={() => setItemInformation({ ...itemInformation, size: "PP" })}>PP</button>
                        <button className="p" onClick={() => setItemInformation({ ...itemInformation, size: "P" })}>P</button>
                        <button className="m" onClick={() => setItemInformation({ ...itemInformation, size: "M" })}>M</button>
                        <button className="g" onClick={() => setItemInformation({ ...itemInformation, size: "G" })}>G</button>
                        <button className="gg" onClick={() => setItemInformation({ ...itemInformation, size: "GG" })}>GG</button>
                    </div>
                    <h2>Descrição:</h2>
                    <div className="item-description">
                        <p>{item.description}</p>
                    </div>
                    <h2>Valor:</h2>
                    <div className="item-value">
                        <div className="item-price">
                            <div className="price-tag">
                                <h3 >R$ {item.price}</h3>
                            </div>
                            <div className="price-discount">
                                <h3>R$ {item.price - (item.price * item.discount) / 100}</h3>
                            </div>
                        </div>
                        <p>ou em até <strong>10x</strong> de <strong>R$ {(item.price - (item.price * item.discount) / 100) / 10}</strong> sem juros no cartão</p>
                    </div>
                    <button type="submit" className="add-product">Adicionar</button>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Product;