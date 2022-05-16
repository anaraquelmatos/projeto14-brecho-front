import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "./style.css";
import send from "./../../assets/img/send.png";
import "react-slideshow-image/dist/styles.css";
import Footer from "./../Footer";
import Picture from "../Picture";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {

    const slideImages = [
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1YK0Swrh9k3wLHBY9-vo5RiWVSF9SqMxmQ&usqp=CAU',
        },
        {
            url: 'data:image/png;base64,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',
        },
        {
            url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAe1BMVEXx8fEAAAD09PTDw8P4+Pj7+/vJycn29vakpKTLy8tcXFzV1dWUlJSamppzc3P9/f3g4OCBgYG6urro6OhRUVHk5OSpqamKiopXV1egoKC9vb06OjohISENDQ0qKiphYWFBQUF7e3sVFRVISEiysrIzMzNoaGgdHR07OzuiK1LvAAAD1klEQVR4nO3Z3XaqOhSGYYiJEbUFxf9Wa63t2vd/hTvMREgsHevI7s0Y73OEIdDB15kQY5YBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4PVOqv7cJ66uc79fZ/1DP8msM4VtTGP2c1StpnVkfX1MuRqJJMoiuKmTJRNFXov/6NB3qkSZ56GZumeb24a1/E1bJ8kbZLnKA6vMb9PzZdJdXXo7Ttyl97rMfQhTxHURpT2n1zOJEIyq20u2Zjqk93dIousuWbnN3HaVklbU/rqprNmyiL9qy1Pt3R0EeilccYS934hIrm2I6lXcrMZlIXJrpK+zJK7mR2Pms3ZRm5+tCmpWrp/mqyYVNRWFmXiiq6sDLdVEo+iwaiHcnp9yTAqYQl1eNLr5vUtBRtqNrhSsIy5+ZD80RJWEoKZR8NIjXzU1McYByWfmqOz22Wdpl/L8XhScNaNR/q7D4siWYblYV5+5Dzq2jO/h6WH9HS/7Ty74lhD8QkrPK1t7J8XUy6ylJVXm3v5+yesBYhX3vIs688HZlDFIflMnDevoVVPt89p/lalf7CP1259YT1EQqp/Hw2fo4f9vIhhNW8w2y5a+ehEFbZLMeNHH91I8iFWih7lR7d8qEnrEuozLFLOjQNevngw7rOnLHMK1d5+hBW1bTLm+wcjR/zfHYFUp7TOfvnsMpzk7RfbpyGPGv5sFrTma+UEFbrKZrd1TovjNZaBm23fOgJy78O3b0q190XaL4Z8PLBh7V06+6GCt8NQ1h/FvlqVjtlPNXo93w/d/anZM7+cYI3u6Pvf0xLcXjCnGXvdx3CnOW+O36+z+fTTZeWW44/e4tL0+e2fOgJS94bbuHxHvr7BIc7ENMVfNccwtK34bht09KLS6lFOYnn7O9hvUgsZrq69V8kpTg8fwkrs/WnT+tNhz51fr290bQMrFc/CyVfd6L3atWtTf3yYTrY5YPtDyt8kXaPpbRfTubnTDrpbd6tFjZyZhKmJn/sRnN5kInQN3/90447vQiD/vHP9Qjaf8mb3/+zwxaNvBvLuU/rWLmH1HX8Zgzv0ky3WzRzt9oomkyOYx3+wLLbfVhLn9NAd003tympTprr2+bfpqkmcwif3OzkpqmXdstTPYUTk8yOTnnkY+IDWbugd929w20v10FOW2HHd7Ss4lY1a9vls678p8I2W8SHbq+h7bZW4XBcNNvKWdhWlhsd2nuv09sOjbW9vyaou3bV/kSR/lIRdbt1uVuCpPf+4c8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4j/wJaMChM2HKNIAAAAABJRU5ErkJggg==',
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
                        {items.filter(item => item.categoria === "feminino").map(item => {
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
                    <h4>Masculino</h4>
                    <div className="home-products">
                        {items.filter(item => item.categoria === "masculino" && item.discount > 0).map(item => {
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
                    <h4>Infantil</h4>
                    <div className="home-products">
                        {items.filter(item => item.categoria === "infantil" && item.discount > 0).map(item => {
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
                </menu>
            </main>
            <Footer />
        </>
    )


}

export default Home;