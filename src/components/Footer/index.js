import pix from "./../../assets/img/pix-banco-central-logo.svg";
import visa from "./../../assets/img/visa.svg";
import mastercard from "./../../assets/img/mastercard-2.svg";
import boleto from "./../../assets/img/boleto-logo.svg";
import "./style.css";

function Footer() {
    return (
        <>
            <footer className="principal-footer">
                <div className="footer">
                    <p>Contate-nos |</p>
                    <div className="icons">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                </div>
                <div className="home-footer">
                    <div className="logos-svg">
                        <img src={pix} alt="pix"></img>
                        <img src={visa} alt="visa"></img>
                        <img src={mastercard} alt="master card"></img>
                        <img src={boleto} alt="boleto"></img>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;