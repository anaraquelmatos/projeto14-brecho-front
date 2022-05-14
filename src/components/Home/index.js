import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "./style.css";
import send from "./../../assets/img/send.png";
import "react-slideshow-image/dist/styles.css";
import Footer from "./../Footer";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {

    const slideImages = [
        {
            url: 'https://cdn.pixabay.com/photo/2016/03/23/08/34/woman-1274360_960_720.jpg',
        },
        {
            url: 'https://cdn.pixabay.com/photo/2015/04/04/19/08/twenty-706886_960_720.jpg',
        }
    ];

    const slideRef = useRef();

    const properties = {
        autoplay: true,
        arrows: false,
        duration: 8000,
        transitionDuration: 600,
    };

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
            <header>
                <div className="header">
                    <div className="user">
                        <ion-icon name="person-circle-outline"></ion-icon>
                        <Link to={`/sign-in`}>
                            <p className="spaceLogin">Entrar</p>
                        </Link>
                        <ion-icon name="bag"></ion-icon>
                    </div>
                    <div className="logo">
                        <h1>CONCEITO</h1>
                    </div>
                    <nav>
                        <div className="menu">
                            <p>FEMININO</p>
                            <p>|</p>
                            <p>MASCULINO</p>
                            <p>|</p>
                            <p>INFANTIL</p>
                        </div>
                    </nav>
                </div>
            </header>
            <main className="main-home">
                <div className="home">
                    <Slide ref={slideRef} {...properties}>
                        {slideImages.map((slideImage, index) => (
                            <div className="each-slide" key={index}>
                                <img src={slideImage.url} alt="Courosel" />
                            </div>
                        ))}
                    </Slide>
                </div>
                <div className="main-infos">
                    <h3>Frete Grátis a partir de R$200</h3>
                    <img src={send} alt="Product delivery" />
                </div>
                <div className="colored-band"></div>
                <menu className="menu-home">
                    <div className="products-brecho">
                        <div className="home-female-products">
                            {items.map(item => {
                                if (item.categoria === "feminino") {
                                    return (
                                        <Link to={`/product/${item.id}`} key={item.categoria + item.itemName + item.id}>
                                            <div className="product-description">
                                                <img src={item.image} alt="Product" />
                                                <p className="item-name">{item.itemName}</p>
                                                <p className="description">{item.description}</p>
                                                <div className="prices">
                                                    <p className="price-before">R${item.storePrice}</p>
                                                    <p className="price">R${item.price}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                            })}

                        </div>
                    </div>
                </menu>
            </main>
            <Footer />
        </>
    )



}

export default Home;