import "./style.css";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

function Address() {

    const [address, setAddress] = useState({
        name: '',
        CEP: '',
        street: "",
        numberHouse: '',
        neighborhood: '',
        UF: '',
        city: '',
        reference: '',
        cellphone: ''
    })


    return (
        <>
            <Header />
            <div className="all-address">
                <h2>Minha Sacola</h2>
                <form>
                    <div className="address">
                        <input type="text" placeholder="Nome completo" onChange={e => setAddress({ ...address, name: e.target.value })}></input>
                        <input type="number" placeholder="CEP" onChange={e => setAddress({ ...address, CEP: e.target.value })}></input>
                        <input type="text" placeholder="Endereço" onChange={e => setAddress({ ...address, street: e.target.value })}></input>
                        <input type="number" placeholder="Número" onChange={e => setAddress({ ...address, numberHouse: e.target.value })}></input>
                        <input type="text" placeholder="Bairro" onChange={e => setAddress({ ...address, neighborhood: e.target.value })}></input>
                        <input type="text" placeholder="UF" minLength="2" maxLength="2" onChange={e => setAddress({ ...address, UF: e.target.value })}></input>
                        <input type="text" placeholder="Cidade" onChange={e => setAddress({ ...address, city: e.target.value })}></input>
                        <input type="text" placeholder="Complemento" onChange={e => setAddress({ ...address, reference: e.target.value })}></input>
                        <input type="number" placeholder="Telefone" onChange={e => setAddress({ ...address, cellphone: e.target.value })}></input>
                        <button>Confirmar</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Address;