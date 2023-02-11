import { ItemCount } from "./ItemCount.jsx"

// HIJO 1-4
export const ItemDetail = ({product}) => {
    return (
        <>
            <p>Comp ItemDetail</p>
            <div>
                <h4>Nombre de Produc: {product.name}</h4>
                <p>Descripción{product.desc}</p>
            </div>
            <ItemCount unit={product.unit} price={product.price} stock={product.stock} />
        </>
        
    )
}