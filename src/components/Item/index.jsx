import { Link } from "react-router-dom";

// HIJO 1-2
export const Item = ({product}) => {
    return (
        <>
            <Link to={`/item/${product.id}`}>
                <div>
                    <p>Comp Item</p>
                    <h4>{product.name}</h4>                    
                    <p>Desde ${product.price}</p>
                    <img src={product.img} alt="imgMini" />
                </div> 
            </Link>
        </>
    )
};