import "./style.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="sign-in-header">
            <ion-icon name="menu-outline"></ion-icon>
            <Link to={`/`}>
                <div className="logo-sign-in">
                    <h1>CONCEITO</h1>
                </div>
            </Link>
            <ion-icon name="bag"></ion-icon>
        </header>
    );
}

export default Header;