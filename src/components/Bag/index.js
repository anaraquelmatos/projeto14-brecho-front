import "./style.css";
import { useState } from "react";

function Bag(props) {

    const { itemName, price } = props;

    const [qtd, setQtd] = useState(1);

    return (
        <div className="details">
            <div className="item-name">
                <p>{itemName}</p>
            </div>
            <div className="qtd">
                <button onClick={() => setQtd(qtd - 1)}>-</button>
                <p>{qtd}</p>
                <button onClick={() => setQtd(qtd + 1)}>+</button>
            </div>
            <div className="price">
                <p>R$ {price}</p>
            </div>
        </div>
    )
}

export default Bag;