import "./style.css";
import Header from "./../Header";
import Footer from "./../Footer";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
    return (
        <>
            <Header />
            <section className="sign-in">
                <form>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="Senha"></input>
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