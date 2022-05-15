import "./style.css"

function Picture(props) {

    const { image, itemName, storePrice, price, discount } = props;

    if (discount > 0) {
        return (
            <>
                <div className="picture">
                    <div className="picture-img">
                        <img src={image} alt="Product" />
                    </div>
                    <p className="item-name">{itemName}</p>
                    <div className="picture-item-discount">
                        <p>{discount}%</p>
                    </div>
                    <div className="prices">
                        <p className="price-before">R${storePrice}</p>
                        <p className="price">R${price}</p>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="picture">
                    <img src={image} alt="Product" />
                    <p className="item-name">{itemName}</p>
                    <div className="prices">
                        <p className="price">R${price}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Picture;