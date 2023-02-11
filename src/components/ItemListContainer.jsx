import { useState  } from 'react';
import productsDB from './productsDB.json';
import { ItemList } from './ItemList.jsx';
console.log(productsDB)

//Este componente agrupa las 7 categorías. Componente PADRE
export const ItemListContainer = (props)=>{

    let [products,setProducts] = useState({productsDB});
    let actualizar = (db)=>{return setProducts(db)}
    actualizar(productsDB)

    //el problema debe estar acá ignorando tal vez como es el funcionamiento exacto de los hooks sin enviarme la data al return cuando hago el products.mat(()=>{retorno una categoría entera para luego entregar la misma data a un componente ItemLis que renderizará productos individuales})

// console.log(products)
    return (
        <>
            <h2 style={props.style}>{props.greeting}</h2>

            {products.map((categoryList)=>{
            console.log(categoryList.list)
                return (
                    <>
                        <p>Comp ItemListContainer</p>
                        <>
                            <h3>{categoryList.name}</h3>
                            <button >▽ icono para ampliar seccion</button>
                        </>
                        <ItemList key={categoryList.id} products={categoryList}/>

                    </>
                )
            })}    
        </>
    )        
};

