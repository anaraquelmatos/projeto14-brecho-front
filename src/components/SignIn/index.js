import "./style.css";
import Header from "./../Header";
import Footer from "./../Footer";
import axios from "axios";
import { useState, useContext } from 'react';
import UserContext from "../../UserContext";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {

    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const { setUser } = useContext(UserContext);
    const [userInfos, setUserInfos] = useState({
        email: '',
        password: ''
    })

    function login(event) {

        event.preventDefault();
        setLoad(true);
        const promisse = axios.post("https://back-project-conceito.herokuapp.com/sign-in", userInfos);
        promisse.then(response => {
            const { data } = response;
            setUser({ token: data });
            if (userInfos.email === "admin@gmail.com") {
                navigate("/admin");
                setLoad(false);
            } else {
                navigate("/");
                setLoad(false);
            }
        })
        promisse.catch(() => {
            setLoad(false);
            warning()
        })
    }

    function warning() {
        alert('Não foi possível fazer o login');
    }

    return !load ? (
        <>
            <Header />
            <section className="sign-in">
                <form onSubmit={login}>
                    <input type="email" placeholder="Email" required onChange={e => setUserInfos({ ...userInfos, email: e.target.value })}></input>
                    <input type="password" placeholder="Senha" maxLength="10" minLength="6" onChange={e => setUserInfos({ ...userInfos, password: e.target.value })}></input>
                    <button type="submit">Entrar</button>
                    <Link to={`/sign-up`}>
                        <p>QUERO ME CADASTRAR</p>
                    </Link>
                </form>
            </section>
            <Footer />
        </>
    ) : (
        <>
            <Header />
            <section className="sign-in">
                <form>
                    <input type="text" placeholder="Email" onChange={e => setUserInfos({ ...userInfos, email: e.target.value })}></input>
                    <input type="password" placeholder="Senha" onChange={e => setUserInfos({ ...userInfos, password: e.target.value })}></input>
                    <button>Entrar</button>
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