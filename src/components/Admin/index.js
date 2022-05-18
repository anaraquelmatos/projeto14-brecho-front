import "./style.css";
import Header from "./../Header";
import Footer from "./../Footer";
import axios from "axios";
import { useState, useContext } from 'react';
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";

function Admin() {

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [admin, setAdmin] = useState({
        category: '',
        type: '',
        itemName: '',
        image: '',
        storePrice: '',
        price: '',
        discount: '',
        size: '',
        color: '',
        description: '',
        collection: '',
        brand: '',
        dimensions: ''
    })

    function register(event) {

        event.preventDefault();
        const promisse = axios.post("https://back-project-conceito.herokuapp.com/admin", admin);
        promisse.then(response => {
            const { data } = response;
            setUser({ token: data });
            navigate("/");
        })
        promisse.catch(() => {
            warning()
        })
    }

    function warning() {
        alert('Não foi possível cadastrar');
    }

    return (
        <>
            <Header />
            <main className="admin">
                <form onSubmit={register}>
                    <div className="admin-form">
                        <input type="text" placeholder="Categoria" onChange={e => setAdmin({ ...admin, category: e.target.value })}></input>
                        <input type="text" placeholder="Tipo" onChange={e => setAdmin({ ...admin, type: e.target.value })}></input>
                        <input type="text" placeholder="Nome do item" onChange={e => setAdmin({ ...admin, itemName: e.target.value })}></input>
                        <input type="text" placeholder="Link da imagem" onChange={e => setAdmin({ ...admin, image: e.target.value })}></input>
                        <input type="number" placeholder="Preço na loja" onChange={e => setAdmin({ ...admin, storePrice: e.target.value })}></input>
                        <input type="number" placeholder="Preço no site Conceito" onChange={e => setAdmin({ ...admin, price: e.target.value })}></input>
                        <input type="number" placeholder="Desconto" onChange={e => setAdmin({ ...admin, discount: e.target.value })}></input>
                        <input type="text" placeholder="Tamanho" onChange={e => setAdmin({ ...admin, size: e.target.value })}></input>
                        <input type="text" placeholder="Cor" onChange={e => setAdmin({ ...admin, color: e.target.value })}></input>
                        <input type="text" placeholder="Descrição" onChange={e => setAdmin({ ...admin, description: e.target.value })}></input>
                        <input type="text" placeholder="Coleção" onChange={e => setAdmin({ ...admin, collection: e.target.value })}></input>
                        <input type="text" placeholder="Marca" onChange={e => setAdmin({ ...admin, brand: e.target.value })}></input>
                        <input type="text" placeholder="Dimensões(bolsa)" onChange={e => setAdmin({ ...admin, dimensions: e.target.value })}></input>
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Admin;