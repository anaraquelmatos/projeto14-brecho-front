import "./style.css";

function Header() {
    return (
        <header>
            <div className="header">
                <div className="user">
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <p className="spaceLogin">Entrar</p>
                    <ion-icon name="bag"></ion-icon>
                </div>
                <div className="logo">
                    <h1>Conceito's Brechó</h1>
                </div>
                <nav>
                    <div className="menu">
                        <p>FEMININO</p>
                        <p>|</p>
                        <p>MASCULINO</p>
                        <p>|</p>
                        <p>INFANTIL</p>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;