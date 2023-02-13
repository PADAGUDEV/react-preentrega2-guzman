import {Item} from '../Item';

// export const ShowList = ({productsList}) => {} segunda forma para traer la data en este caso lo hacemos por parámetro pasado en el componente padre, encerrado entre llaves. En el Padre (ItemListContainer.jsx) en la etiqueta del componente reconoce como atributo el nombre del parámetro que aqui se usa como {productsList}. Usando props la verdad que ni funcionó el mismo procedimiento sin las {}.

// Este componente entrega una sola categoría de productos HIJO 1-1
export const ItemList = ({productsList}) => {

    // console.log(productsList)
    return (productsList.list.map((product) =>{

        // console.log(product.name)
        return (
            <div key={product.id}>
                {/* <p>Comp ItemList</p> */}
                <h4>{product.name}</h4>
                <Item  product={product} />
            </div>
        )
    }))
};