import "./style.css";
import Header from "./../Header";
import Footer from "./../Footer";
import axios from "axios";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const [userInfos, setUserInfos] = useState({
        name: '',
        email: '',
        CPF: "",
        password: '',
        passwordConfirmation: ''
      })

    function register(event) {
        event.preventDefault();
        setLoad(true);
        const promisse = axios.post("https://git.heroku.com/back-project-conceito.git/sign-up", userInfos);
        promisse.then(() => {
            setLoad(false);
            navigate("/");
        });
        promisse.catch(() => {
            setLoad(false);
            warning();
        })
    }

    function warning() {
        alert('Não foi possível executar a ação');
    }

    return !load ? (
        <>
            <Header />
            <section className="sign-up">
                <Link to={`/sign-in`}>
                    <p>JÁ SOU CLIENTE CONCEITO</p>
                </Link>
                <form className="sign-up-form" onSubmit={register}>
                    <input type="text" placeholder="Nome" required onChange={e => setUserInfos({ ...userInfos, name: e.target.value })}></input>
                    <input type="email" placeholder="Email" required onChange={e => setUserInfos({ ...userInfos, email: e.target.value })}></input>
                    <input type="text" placeholder="CPF" maxLength="11" minLength="11" required onChange={e => setUserInfos({ ...userInfos, CPF: e.target.value })}></input>
                    <input type="password" placeholder="Senha" maxLength="10" minLength="6" required onChange={e => setUserInfos({ ...userInfos, password: e.target.value })}></input>
                    <input type="password" placeholder="Repetir Senha" maxLength="10" minLength="6" required onChange={e => setUserInfos({ ...userInfos, passwordConfirmation: e.target.value })}></input>
                    <button type="submit">Cadastrar</button>
                    <Link to={`/sign-in`}>
                        <p>QUERO FAZER O LOGIN</p>
                    </Link>
                </form>
            </section>
            <Footer />
        </>
    ) : (
        <>
        <Header />
        <section className="sign-up">
            <Link to={`/sign-in`}>
                <p>JÁ SOU CLIENTE CONCEITO</p>
            </Link>
            <form className="sign-up-form">
                <input type="text" placeholder="Nome"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="CPF" maxLength="11" minLength="11"></input>
                <input type="password" placeholder="Senha"></input>
                <input type="password" placeholder="Repetir Senha"></input>
                <button>Cadastrar</button>
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