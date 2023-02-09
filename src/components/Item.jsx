import { ItemDetailContainer } from "./ItemDetailContainer.jsx";

// este componente contiene unicamente la parte de título de producto, desde que precio parte y foto miniatura , luego oculto con estilos se anida el ItemDetailContainer

export const Item = ( ) => {
    return (
        <>
            <div>
                <button>▽</button>
                <p>Desde ${product.price}</p>
                <img src={product.img} alt="" />
            </div>
            <ItemDetailContainer key={}  />
        </>

    )
}