import "./style.css";
import Header from "./../Header";
import Footer from "./../Footer";
import axios from "axios";
import { useState, useContext } from 'react';
import UserContext from "../../UserContext";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [userInfos, setUserInfos] = useState({
        email: '',
        password: ''
    })

    function login(event) {

        event.preventDefault();
        const promisse = axios.post("http://localhost:5000/sign-in", userInfos);
        promisse.then(response => {
            const { data } = response;
            setUser({ token: data });
            if (userInfos.email === "admin@gmail.com") {
                navigate("/admin");
            } else {
                navigate("/payment");
            }
        })
        promisse.catch(() => {
            warning()
        })
    }

    function warning() {
        alert('Não foi possível fazer o login');
    }

    return (
        <>
            <Header />
            <section className="sign-in">
                <form onSubmit={login}>
                    <input type="text" placeholder="Email" onChange={e => setUserInfos({ ...userInfos, email: e.target.value })}></input>
                    <input type="password" placeholder="Senha" onChange={e => setUserInfos({ ...userInfos, password: e.target.value })}></input>
                    <button type="submit">Entrar</button>
                    <Link to={`/sign-up`}>
                        <p>QUERO ME CADASTRAR</p>
                    </Link>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default SignIn;