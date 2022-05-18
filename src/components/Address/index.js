import "./style.css";
import { useState, useContext } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";

function Address() {

    const [address, setAddress] = useState({
        CPF: '',
        CEP: '',
        street: "",
        numberHouse: '',
        neighborhood: '',
        UF: '',
        city: '',
        reference: '',
        cellphone: ''
    })

    const navigate = useNavigate();

    const { user } = useContext(UserContext);
    
    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };

    function sendAddress(event) {

        event.preventDefault();

        const promisse = axios.put("http://localhost:5000/address", address, config);
        promisse.then(() => {
            navigate(`/payment`);
        });
        promisse.catch(() => {
            warning();
        })

        function warning() {
            alert('Não foi possível executar a ação');
        }
    }

    return (
        <>
            <Header />
            <div className="all-address">
                <h2>Minha Sacola</h2>
                <form onSubmit={sendAddress}>
                    <div className="address">
                        <input type="text" placeholder="CPF" maxLength="11" minLength="11" onChange={e => setAddress({ ...address, CPF: e.target.value })}></input>
                        <input type="text" placeholder="CEP" onChange={e => setAddress({ ...address, CEP: e.target.value })}></input>
                        <input type="text" placeholder="Endereço" onChange={e => setAddress({ ...address, street: e.target.value })}></input>
                        <input type="text" placeholder="Número" onChange={e => setAddress({ ...address, numberHouse: e.target.value })}></input>
                        <input type="text" placeholder="Bairro" onChange={e => setAddress({ ...address, neighborhood: e.target.value })}></input>
                        <input type="text" placeholder="UF" minLength="2" maxLength="2" onChange={e => setAddress({ ...address, UF: e.target.value })}></input>
                        <input type="text" placeholder="Cidade" onChange={e => setAddress({ ...address, city: e.target.value })}></input>
                        <input type="text" placeholder="Complemento" onChange={e => setAddress({ ...address, reference: e.target.value })}></input>
                        <input type="text" placeholder="Telefone" onChange={e => setAddress({ ...address, cellphone: e.target.value })}></input>
                        <button type="submit">Confirmar</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Address;