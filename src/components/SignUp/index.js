import "./style.css";
import Header from "./../Header";
import Footer from "./../Footer";
import axios from "axios";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();
    const [userInfos, setUserInfos] = useState({
        name: '',
        email: '',
        CPF: "",
        password: '',
        passwordConfirmation: ''
      })

    function register(event) {
        event.preventDefault();
        const promisse = axios.post("http://localhost:5000/sign-up", userInfos);
        promisse.then(response => {
            const { data } = response;
            console.log(data);
            navigate("/");
        });
        promisse.catch(() => {
            warning();
        })
    }

    function warning() {
        alert('Não foi possível executar a ação');
    }

    return (
        <>
            <Header />
            <section className="sign-up">
                <Link to={`/sign-in`}>
                    <p>JÁ SOU CLIENTE CONCEITO</p>
                </Link>
                <form className="sign-up-form" onSubmit={register}>
                    <input type="text" placeholder="Nome" onChange={e => setUserInfos({ ...userInfos, name: e.target.value })}></input>
                    <input type="text" placeholder="Email" onChange={e => setUserInfos({ ...userInfos, email: e.target.value })}></input>
                    <input type="text" placeholder="CPF" onChange={e => setUserInfos({ ...userInfos, CPF: e.target.value })}></input>
                    <input type="password" placeholder="Senha" onChange={e => setUserInfos({ ...userInfos, password: e.target.value })}></input>
                    <input type="password" placeholder="Repetir Senha" onChange={e => setUserInfos({ ...userInfos, passwordConfirmation: e.target.value })}></input>
                    <button type="submit">Cadastrar</button>
                    <Link to={`/sign-in`}>
                        <p>QUERO FAZER O LOGIN</p>
                    </Link>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default SignUp;