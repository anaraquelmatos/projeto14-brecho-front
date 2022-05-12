import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "./style.css";
import send from "./../../assets/img/send.png";
import "react-slideshow-image/dist/styles.css";
import Header from "./../Header";
import Footer from "./../Footer";

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

    return (
        <>
            <header>
                <div className="header">
                    <div className="user">
                        <ion-icon name="person-circle-outline"></ion-icon>
                        <p className="spaceLogin">Entrar</p>
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
                                <img src={slideImage.url} alt="Courosel"/>
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
                        <div className="product-description">
                            <img src="https://th.bing.com/th/id/R.b851c166bd8bfbdfbc44623fcdc48162?rik=SI7916ZetGQduA&riu=http%3a%2f%2fwww.ionline.com.br%2fwp-content%2fuploads%2f2013%2f05%2fmodelos-de-roupas-brancas-Reveillon-2014-6.jpg&ehk=S0N453a%2bpYvGMjHN6AkknjGApFPdrTWwi%2b3nq1pQfyw%3d&risl=&pid=ImgRaw&r=0" alt="Product" />
                            <p className="brand">Addidas Originals</p>
                            <p className="description">Tênis Lançamento</p>
                            <div className="prices">
                                <p className="price-before">R$100,00</p>
                                <p className="price">R$300,00</p>
                            </div>
                        </div>
                        <div className="product-description">
                            <img src="https://th.bing.com/th/id/R.b851c166bd8bfbdfbc44623fcdc48162?rik=SI7916ZetGQduA&riu=http%3a%2f%2fwww.ionline.com.br%2fwp-content%2fuploads%2f2013%2f05%2fmodelos-de-roupas-brancas-Reveillon-2014-6.jpg&ehk=S0N453a%2bpYvGMjHN6AkknjGApFPdrTWwi%2b3nq1pQfyw%3d&risl=&pid=ImgRaw&r=0" alt="Product" />
                            <p className="brand">Marca X</p>
                            <p className="description">Descrição</p>
                            <p className="price">R$100,00</p>
                        </div>
                        <div className="product-description">
                            <img src="https://th.bing.com/th/id/R.b851c166bd8bfbdfbc44623fcdc48162?rik=SI7916ZetGQduA&riu=http%3a%2f%2fwww.ionline.com.br%2fwp-content%2fuploads%2f2013%2f05%2fmodelos-de-roupas-brancas-Reveillon-2014-6.jpg&ehk=S0N453a%2bpYvGMjHN6AkknjGApFPdrTWwi%2b3nq1pQfyw%3d&risl=&pid=ImgRaw&r=0" alt="Product" />
                            <p className="brand">Marca X</p>
                            <p className="description">Descrição</p>
                            <p className="price">R$100,00</p>
                        </div>
                        <div className="product-description">
                            <img src="https://th.bing.com/th/id/R.b851c166bd8bfbdfbc44623fcdc48162?rik=SI7916ZetGQduA&riu=http%3a%2f%2fwww.ionline.com.br%2fwp-content%2fuploads%2f2013%2f05%2fmodelos-de-roupas-brancas-Reveillon-2014-6.jpg&ehk=S0N453a%2bpYvGMjHN6AkknjGApFPdrTWwi%2b3nq1pQfyw%3d&risl=&pid=ImgRaw&r=0" alt="Product" />
                            <p className="brand">Marca X</p>
                            <p className="description">Descrição</p>
                            <p className="price">R$100,00</p>
                        </div>
                        <div className="product-description">
                            <img src="https://th.bing.com/th/id/R.b851c166bd8bfbdfbc44623fcdc48162?rik=SI7916ZetGQduA&riu=http%3a%2f%2fwww.ionline.com.br%2fwp-content%2fuploads%2f2013%2f05%2fmodelos-de-roupas-brancas-Reveillon-2014-6.jpg&ehk=S0N453a%2bpYvGMjHN6AkknjGApFPdrTWwi%2b3nq1pQfyw%3d&risl=&pid=ImgRaw&r=0" alt="Product" />
                            <p className="brand">Marca X</p>
                            <p className="description">Descrição</p>
                            <p className="price">R$100,00</p>
                        </div>
                        <div className="product-description">
                            <img src="https://th.bing.com/th/id/R.b851c166bd8bfbdfbc44623fcdc48162?rik=SI7916ZetGQduA&riu=http%3a%2f%2fwww.ionline.com.br%2fwp-content%2fuploads%2f2013%2f05%2fmodelos-de-roupas-brancas-Reveillon-2014-6.jpg&ehk=S0N453a%2bpYvGMjHN6AkknjGApFPdrTWwi%2b3nq1pQfyw%3d&risl=&pid=ImgRaw&r=0" alt="Product" />
                            <p className="brand">Marca X</p>
                            <p className="description">Descrição</p>
                            <p className="price">R$100,00</p>
                        </div>
                        <div className="product-description">
                            <img src="https://th.bing.com/th/id/R.b851c166bd8bfbdfbc44623fcdc48162?rik=SI7916ZetGQduA&riu=http%3a%2f%2fwww.ionline.com.br%2fwp-content%2fuploads%2f2013%2f05%2fmodelos-de-roupas-brancas-Reveillon-2014-6.jpg&ehk=S0N453a%2bpYvGMjHN6AkknjGApFPdrTWwi%2b3nq1pQfyw%3d&risl=&pid=ImgRaw&r=0" alt="Product" />
                            <p className="brand">Marca X</p>
                            <p className="description">Descrição</p>
                            <p className="price">R$100,00</p>
                        </div>
                        <div className="product-description">
                            <img src="https://th.bing.com/th/id/R.b851c166bd8bfbdfbc44623fcdc48162?rik=SI7916ZetGQduA&riu=http%3a%2f%2fwww.ionline.com.br%2fwp-content%2fuploads%2f2013%2f05%2fmodelos-de-roupas-brancas-Reveillon-2014-6.jpg&ehk=S0N453a%2bpYvGMjHN6AkknjGApFPdrTWwi%2b3nq1pQfyw%3d&risl=&pid=ImgRaw&r=0" alt="Product" />
                            <p className="brand">Marca X</p>
                            <p className="description">Descrição</p>
                            <p className="price">R$100,00</p>
                        </div>
                        <div className="product-description">
                            <img src="https://th.bing.com/th/id/R.b851c166bd8bfbdfbc44623fcdc48162?rik=SI7916ZetGQduA&riu=http%3a%2f%2fwww.ionline.com.br%2fwp-content%2fuploads%2f2013%2f05%2fmodelos-de-roupas-brancas-Reveillon-2014-6.jpg&ehk=S0N453a%2bpYvGMjHN6AkknjGApFPdrTWwi%2b3nq1pQfyw%3d&risl=&pid=ImgRaw&r=0" alt="Product" />
                            <p className="brand">Marca X</p>
                            <p className="description">Descrição</p>
                            <p className="price">R$100,00</p>
                        </div>
                        <div className="product-description">
                            <img src="https://th.bing.com/th/id/R.b851c166bd8bfbdfbc44623fcdc48162?rik=SI7916ZetGQduA&riu=http%3a%2f%2fwww.ionline.com.br%2fwp-content%2fuploads%2f2013%2f05%2fmodelos-de-roupas-brancas-Reveillon-2014-6.jpg&ehk=S0N453a%2bpYvGMjHN6AkknjGApFPdrTWwi%2b3nq1pQfyw%3d&risl=&pid=ImgRaw&r=0" alt="Product" />
                            <p className="brand">Marca X</p>
                            <p className="description">Descrição</p>
                            <p className="price">R$100,00</p>
                        </div>
                    </div>
                </menu>
            </main>
            <Footer />
        </>
    );
}

export default Home;