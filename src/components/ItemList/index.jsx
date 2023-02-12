import {Item} from '../Item';

// export const ShowList = ({products}) => {} segunda forma para traer la data en este caso lo hacemos por parámetro pasado en el componente padre, encerrado entre llaves. En el Padre (ItemListContainer.jsx) en la etiqueta del componente reconoce como atributo el nombre del parámetro que aqui se usa como {products}. Usando props la verdad que ni funcionó el mismo procedimiento sin las {}.

// Este componente entrega una sola categoría de productos HIJO 1-1
export const ItemList = ({products}) => {

    // console.log(products)
    return (products.list.map((product) =>{

        // console.log(product.name)
        return (
            <div key={product.id}>
                <p>Comp ItemList</p>
                <Item  product={product} />                
            </div>
        )
    }))
};