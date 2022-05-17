import "./style.css";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Header() {

    const [sideBar, setSideBar] = useState(false);

    return !sideBar ? (
        <header className="sign-in-header">
            <div onClick={() => setSideBar(true)}>
                <ion-icon name="menu-outline"></ion-icon>
            </div>
            <Link to={`/`}>
                <div className="logo-sign-in">
                    <h1>CONCEITO</h1>
                </div>
            </Link>
            <Link to={`/shopping`}>
                <ion-icon name="bag"></ion-icon>
            </Link>
        </header>
    ) : (
        <header className="side-bar">
            <div className='side-bar-close'>
                <Link to={`/sign-in`}>
                    <h2>Entrar</h2>
                </Link>
                <div className="header-icon" onClick={() => setSideBar(false)}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                </div>
            </div>
            <Link to={`/`}>
                <h3>Home</h3>
            </Link>
            <Link to={`/feminine`}>
                <h3>Feminino</h3>
            </Link>
            <Link to={`/masculine`}>
                <h3>Masculino</h3>
            </Link>
            <Link to={`/childish`}>
                <h3>Infantil</h3>
            </Link>
            <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/vigilancia_em_saude/doencas_e_agravos/coronavirus/index.php?p=291730">
                <h3>Covid-19</h3>
            </a>
        </header >
    )
}

export default Header;