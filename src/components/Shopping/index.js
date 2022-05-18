import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import Bag from "../Bag";
import { Link  } from "react-router-dom";
import UserContext from "../../UserContext";
import { useContext } from 'react';

function Shopping() {

    const { user } = useContext(UserContext);
    const storage = JSON.parse(localStorage.getItem('userLocal'));
    let myObj = JSON.parse(localStorage.getItem('userLocal')) !== null ? storage : [];

    if (user) {
        if (myObj.length === 0) {
            return (
                <>
                    <Header />
                    <main className="bag-no-products">
                        <div className="no-products">
                            <p>Poxa, a sua sacola está vazia. Volte para a home e confira as nossas promoções...</p>
                        </div>
                    </main>
                    <Footer />
                </>
            )
        } else {
            return (
                <>
                    <Header />
                    <main>
                        <div className="shopping">
                            <h2>Minha sacola</h2>
                            <div className="item">
                                <p>Produto</p>
                                <p>Quantidade</p>
                                <p>Preço</p>
                            </div>
                            {storage.map((item) => {
                                return (
                                    <Bag itemName={item.itemName} price={item.price} />
                                )
                            })}
                            <div className="products-confirmation">
                                <Link to={`/payment`}>
                                    <button>Continuar</button>
                                </Link>
                            </div>
                        </div>
                    </main>
                    <div className="footer-fixed">
                        <Footer />
                      
                    </div>
                </>
            );
        }
    } else {
        if (myObj.length === 0) {
            return (
                <>
                    <Header />
                    <main className="bag-no-products">
                        <div className="no-products">
                            <p>Poxa, a sua sacola está vazia. Volte para a home e confira as nossas promoções...</p>
                        </div>
                    </main>
                    <Footer />
                </>
            )
        } else {
            return (
                <>
                    <Header />
                    <main>
                        <div className="shopping">
                            <h2>Minha sacola</h2>
                            <div className="item">
                                <p>Produto</p>
                                <p>Quantidade</p>
                                <p>Preço</p>
                            </div>
                            {storage.map((item) => {
                                return (
                                    <Bag itemName={item.itemName} price={item.price} />
                                )
                            })}
                            <div className="products-confirmation">
                                <Link to={`/sign-in`}>
                                    <button>Continuar</button>
                                </Link>
                            </div>
                        </div>
                    </main>
                    <div className="footer-fixed">
                        <Footer />
                    </div>
                </>
            );
        }
    }
}

export default Shopping;