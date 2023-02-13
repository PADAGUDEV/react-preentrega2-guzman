import { Link , useParams } from "react-router-dom";
import { ItemDetailContainer } from "../ItemDetailContainer";

// este componente contiene unicamente la parte de título de props, desde que precio parte y foto miniatura , luego oculto con estilos se anida el ItemDetailContainer

// HIJO 1-2
export const Item = ({product}) => {
    return (
        <>
            <Link to={`/item/${product.id}`}>
                <div>
                    <p>Comp Item</p>
                    <h4>{product.name}</h4>
                    {/* <button>▽Icono para expandir</button> */}
                    
                    <p>Desde ${product.price}</p>
                    <img src={product.img} alt="imgMini" />
                </div> 
            </Link>

            {/* <ItemDetailContainer product={product}  /> */}
        </>
    )
};