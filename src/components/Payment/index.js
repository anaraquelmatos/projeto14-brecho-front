import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    const [count, setCount] = useState(0);

    const navigate = useNavigate();

    let total = 0;

    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };

    useEffect(() => {
        const promisse = axios.get(`https://git.heroku.com/back-project-conceito.git/payment`, config);
        promisse.then(response => {
            const { data } = response;
            setAddress(data);
            setCount(count + 1);
        })
    }, []);

    function buy(event) {
        event.preventDefault();
        alert("Compra realizada com sucesso!");
        localStorage.clear();
        navigate("/")
    }

    function addAddress() {
        alert("Por favor, cadastre o seu endereço")
    }

    const storage = JSON.parse(localStorage.getItem('userLocal'));
    console.log(storage.length)

    for (let i = 0; i < storage.length; i++) {
        total = total + parseInt(storage[i].price);
        console.log(total)
    }

    return address.length === 0 ? (
        <>
            <Header />
            <main>
                <div className="payment">
                    <h2>Dados de envio</h2>
                    <Link to={`/address`}>
                        <div className="address">
                            <h3>Cadastre o seu endereço</h3>
                        </div>
                    </Link>
                    <h2>Seu pedido</h2>
                    <div className="order">
                        {storage.map(item => {
                            return (
                                <div className="all-info">
                                    <div className="photo-name">
                                        <img src={item.image} alt={item.itemName} />
                                        <p>{item.itemName}</p>
                                    </div>
                                    <p>Tamanho {item.size}</p>
                                    <p>Quantidade 1</p>
                                    <p>Valor do pedido: R$ {item.price}</p>
                                    {console.log(total)}
                                </div>
                            )
                        })}
                        <p >Frete: R$20,00</p>
                        <p className="total">Total: R$ {total},00</p>
                        {console.log(total)}
                    </div>
                    <h2>Pagamento</h2>
                    <form>
                        <div className="payment-conditions">
                            <input type="text" placeholder="Nome do titular" onChange={e => setPayment({ ...payment, name: e.target.value })}></input>
                            <input type="number" placeholder="Número do cartão" onChange={e => setPayment({ ...payment, number: e.target.value })}></input>
                            <input type="number" placeholder="Validade" onChange={e => setPayment({ ...payment, validity: e.target.value })}></input>
                            <input type="number" placeholder="CVV" minLength="3" maxLength="3" onChange={e => setPayment({ ...payment, cvv: e.target.value })}></input>
                            <button onClick={() => { addAddress() }}>Comprar</button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    ) : (
        <>
            <Header />
            <main>
                <div className="payment">
                    <h2>Dados de envio</h2>
                    <Link to={`/address`}>
                        <div className="address">
                            <p>{address.city},</p>
                            <p>{address.neighborhood},</p>
                            <p>{address.street}, {address.numberHouse}</p>
                        </div>
                    </Link>
                    <h2>Seu pedido</h2>
                    <div className="order">
                        {storage.map(item => {
                            return (
                                <div className="all-info">
                                    <div className="photo-name">
                                        <img src={item.image} alt={item.itemName} />
                                        <p>{item.itemName}</p>
                                    </div>
                                    <p>Tamanho {item.size}</p>
                                    <p>Quantidade 1</p>
                                    <p>Valor do pedido: R$ {item.price}</p>
                                </div>
                            )
                        })}
                        <p >Frete: R$20,00</p>
                        <p className="total">Total: R$ {total + 20},00</p>
                    </div>
                    <h2>Pagamento</h2>
                    <form onSubmit={buy}>
                        <div className="payment-conditions">
                            <input type="text" placeholder="Nome do titular" onChange={e => setPayment({ ...payment, name: e.target.value })}></input>
                            <input type="number" placeholder="Número do cartão" onChange={e => setPayment({ ...payment, number: e.target.value })}></input>
                            <input type="number" placeholder="Validade" onChange={e => setPayment({ ...payment, validity: e.target.value })}></input>
                            <input type="number" placeholder="CVV" minLength="3" maxLength="3" onChange={e => setPayment({ ...payment, cvv: e.target.value })}></input>
                            <button type="submit">Comprar</button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Payment