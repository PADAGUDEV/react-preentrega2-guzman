import { ItemDetailContainer } from "./ItemDetailContainer.jsx";

// este componente contiene unicamente la parte de título de props, desde que precio parte y foto miniatura , luego oculto con estilos se anida el ItemDetailContainer

// HIJO 1-2
export const Item = ({product}) => {
    return (
        <>
            <div>
                <p>Comp Item</p>
                <button>▽Icono para expandir</button>
                <h4>{product.name}</h4>
                <p>Desde ${product.price}</p>
                <img src={product.img} alt="imgMini" />
            </div>
            <ItemDetailContainer product={product}  />
        </>
    )
};