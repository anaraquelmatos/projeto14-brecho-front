import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "./style.css";
import send from "./../../assets/img/send.png";
import "react-slideshow-image/dist/styles.css";
import Footer from "./../Footer";
import Picture from "../Picture";
import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";

function Home() {

    const slideImages = [
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1YK0Swrh9k3wLHBY9-vo5RiWVSF9SqMxmQ&usqp=CAU',
        },
        {
            url: 'https://logos-world.net/wp-content/uploads/2020/04/Chanel-Logo.png',
        },
        {
            url: 'https://logos-marques.com/wp-content/uploads/2020/07/logo-Prada-2048x1112.jpg',
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

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {

        const promisse = axios.get("http://localhost:5000");
        promisse.then(response => {
            const { data } = response;
            setItems(data);
        })
        promisse.catch(() => {
            warning()
        });
    }, []);

    function warning() {
        alert("Não foi possível carregar os produtos")
    }

    function deleteToken() {

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        const URL = `http://localhost:5000/${user.token}`

        axios
            .delete(URL, config)
            .then(() => {
                setUser(null);
                navigate("/");
            })
    }

    if (!user) {
        return items.length > 0 ? (
            <>
                <header>
                    <div className="header">
                        <div className="user">
                            <ion-icon name="person-circle-outline"></ion-icon>
                            <Link to={`/sign-in`}>
                                <p className="spaceLogin">Entrar</p>
                            </Link>
                            <Link to={`/shopping`}>
                                <ion-icon name="bag"></ion-icon>
                            </Link>
                        </div>
                        <div className="logo">
                            <h1>CONCEITO</h1>
                        </div>
                        <nav>
                            <div className="menu">
                                <Link to={`/feminine`}>
                                    <p>FEMININO</p>
                                </Link>
                                <p>|</p>
                                <Link to={`/masculine`}>
                                    <p>MASCULINO</p>
                                </Link>
                                <p>|</p>
                                <Link to={`/childish`}>
                                    <p>INFANTIL</p>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header >
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
                        <h4>Feminino</h4>
                        <div className="home-products">
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
                        <h4>Masculino</h4>
                        <div className="home-products">
                            {items.filter(item => item.category === "masculino" && item.discount > 0).map(item => {
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
                        <h4>Infantil</h4>
                        <div className="home-products">
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
                    </menu>
                </main>
                <Footer />
            </>
        ) : (
            <>
                <Footer />
            </>
        )
    } else {
        return items.length > 0 ? (
            <>
                <header>
                    <div className="header">
                        <div className="user">
                            <div onClick={deleteToken}>
                                <ion-icon name="log-out-outline"></ion-icon>
                            </div>
                            <p className="spaceLogin">Sair</p>
                            <Link to={`/shopping`}>
                                <ion-icon name="bag"></ion-icon>
                            </Link>
                        </div>
                        <div className="logo">
                            <h1>CONCEITO</h1>
                        </div>
                        <nav>
                            <div className="menu">
                                <Link to={`/feminine`}>
                                    <p>FEMININO</p>
                                </Link>
                                <p>|</p>
                                <Link to={`/masculine`}>
                                    <p>MASCULINO</p>
                                </Link>
                                <p>|</p>
                                <Link to={`/childish`}>
                                    <p>INFANTIL</p>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header >
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
                        <h4>Feminino</h4>
                        <div className="home-products">
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
                        <h4>Masculino</h4>
                        <div className="home-products">
                            {items.filter(item => item.category === "masculino" && item.discount > 0).map(item => {
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
                        <h4>Infantil</h4>
                        <div className="home-products">
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
                    </menu>
                </main>
                <Footer />
            </>
        ) : (
            <>
                <Footer />
            </>
        )

    }

}

export default Home;