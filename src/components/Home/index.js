import "./style.css";
import send from "./../../assets/img/send.png";
import Header from "./../Header";
import Footer from "./../Footer";

function Home() {

    return (
        <>
            <Header />
            <main className="main-home">
                <div className="home">
                    <img src="https://th.bing.com/th/id/OIP.i-vSpiYMIj2Nr-4a61YjdwAAAA?pid=ImgDet&rs=1" alt="Carousel" />
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