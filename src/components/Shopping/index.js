import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";

function Shopping() {
    const [qtd, setQtd] = useState(0);

    function increaseQuantity() {
        setQtd(qtd + 1);
    }

    function decreaseQuantity() {
        if (qtd > 0) {
            setQtd(qtd - 1);
        }
    }

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
                    <div className="details">
                        <div className="item-name">
                            <p>Bolsa preta de Luxo</p>
                        </div>
                            <div className="qtd">
                                <button onClick={decreaseQuantity}>-</button>
                                <p>{qtd}</p>
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                        <div className="price">
                            <p>R$1.000,00</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Shopping;