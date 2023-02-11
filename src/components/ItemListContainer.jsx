import { useState  } from 'react';
import productsDB from './productsDB.json';
import { ItemList } from './ItemList.jsx';
console.log(productsDB)

//Este componente agrupa las 7 categorías. Componente PADRE
export const ItemListContainer = (props)=>{
    console.log(productsDB)
    let [products,setProducts] = useState(productsDB);
    // let actualizar = (db)=>{return setProducts(db)}
    // actualizar(productsDB).



    //Solucionado con eliminar las llaves pasadas como parámetro en productsDb ya que es un objeto y no hacía falta convertirlo otra vez en objeto?

// console.log(products)
    return (
        <>
            <h2 style={props.style}>{props.greeting}</h2>

            {products.map((categoryList)=>{
            console.log(categoryList.list)
                return (
                    <div key = {categoryList.id}>
                        <p>Comp ItemListContainer</p>
                        <>
                            <h3>{categoryList.name}</h3>
                            <button >▽ icono para ampliar seccion</button>
                        </>
                        <ItemList key={categoryList.id} products={categoryList}/>

                    </div>
                )
            })}    
        </>
    )        
};