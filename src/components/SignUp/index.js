import "./style.css";
import Header from "./../Header";
import Footer from "./../Footer";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
    return (
        <>
            <Header />
            <section className="sign-up">
                <Link to={`/sign-in`}>
                    <p>JÁ SOU CLIENTE CONCEITO</p>
                </Link>
                <form className="sign-up-form">
                    <input type="text" placeholder="Nome"></input>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="CPF"></input>
                    <input type="text" placeholder="Senha"></input>
                    <input type="text" placeholder="Repetir Senha"></input>
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