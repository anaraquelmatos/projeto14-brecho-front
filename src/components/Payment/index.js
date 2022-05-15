import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";

function Payment() {

    const [payment, setPayment] = useState({
        name: '',
        number: '',
        validity: "",
        cvv: '',
    })

    return (
        <>
            <Header />
            <main>
                <div className="payment">
                    <h2>Dados de envio</h2>
                    <div className="address">
                        <p>Cadastre o seu endereço</p>
                    </div>
                    <h2>Pagamento</h2>
                    <div className="payment-conditions">
                        <input type="text" placeholder="Nome do titular" onChange={e => setPayment({ ...payment, name: e.target.value })}></input>
                        <input type="number" placeholder="Número do cartão" onChange={e => setPayment({ ...payment, number: e.target.value })}></input>
                        <input type="number" placeholder="Validade" onChange={e => setPayment({ ...payment, validity: e.target.value })}></input>
                        <input type="number" placeholder="CVV" minLength="3" maxLength="3" onChange={e => setPayment({ ...payment, cvv: e.target.value })}></input>
                    </div>
                    <h2>Seu pedido</h2>
                    <div className="order">
                        <div className="all-info">
                            <div className="photo-name">
                                <img src="https://th.bing.com/th/id/OIP.SJNNdJ__RjBENZDwXmn96QHaJ5?pid=ImgDet&rs=1" alt="Sapato" />
                                <p>Sapato preto de luxo</p>
                            </div>
                            <p>Tamanho 42</p>
                            <p>Quantidade 1</p>
                            <p>Valor do pedido: R$ 1.000,00</p>
                            <p >Frete: R$20,00</p>
                        </div>
                        <p className="total">Total: R$1.020,00</p>
                    </div>
                    <div className="products-payment">
                        <button>Comprar</button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Payment