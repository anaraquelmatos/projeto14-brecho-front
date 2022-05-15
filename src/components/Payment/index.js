import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";
import axios from "axios";

function Payment() {

    const [payment, setPayment] = useState({
        name: '',
        number: '',
        validity: "",
        cvv: '',
    })

    const { user } = useContext(UserContext);

    const [address, setAddress] = useState({});

    const [count, setCount] = useState(null);

    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };

    useEffect(() => {
        const promisse = axios.get(`http://localhost:5000/payment`, config);
        promisse.then(response => {
            const { data } = response;
            setAddress(data);
            console.log(data)
            setCount(count + 1);
        })
        promisse.catch(console.log("endereço não encontrado"));
    }, [user]);

    return address.length === 0 ? (
        <>
            <Header />
            <main>
                <div className="payment">
                    <h2>Dados de envio</h2>
                    <Link to={`/address`}>
                        <div className="address">
                            <p>Cadastre o seu endereço</p>
                        </div>
                    </Link>
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
                    <h2>Pagamento</h2>
                    <form>
                        <div className="payment-conditions">
                            <input type="text" placeholder="Nome do titular" onChange={e => setPayment({ ...payment, name: e.target.value })}></input>
                            <input type="number" placeholder="Número do cartão" onChange={e => setPayment({ ...payment, number: e.target.value })}></input>
                            <input type="number" placeholder="Validade" onChange={e => setPayment({ ...payment, validity: e.target.value })}></input>
                            <input type="number" placeholder="CVV" minLength="3" maxLength="3" onChange={e => setPayment({ ...payment, cvv: e.target.value })}></input>
                            <button>Comprar</button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    ):(
            <>
                <Header />
                <main>
                    <div className="payment">
                        <h2>Dados de envio</h2>
                        <Link to={`/address`}>
                            <div className="address">
                                <p>{address.address}</p>
                                <p>{address.neighborhood}</p>
                                <p>{address.numberHouse}</p>
                                <p>{address.city}</p>
                            </div>
                        </Link>
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
                        <h2>Pagamento</h2>
                        <form>
                            <div className="payment-conditions">
                                <input type="text" placeholder="Nome do titular" onChange={e => setPayment({ ...payment, name: e.target.value })}></input>
                                <input type="number" placeholder="Número do cartão" onChange={e => setPayment({ ...payment, number: e.target.value })}></input>
                                <input type="number" placeholder="Validade" onChange={e => setPayment({ ...payment, validity: e.target.value })}></input>
                                <input type="number" placeholder="CVV" minLength="3" maxLength="3" onChange={e => setPayment({ ...payment, cvv: e.target.value })}></input>
                                <button>Comprar</button>
                            </div>
                        </form>
                    </div>
                </main>
                <Footer />
            </>
    );
}

export default Payment