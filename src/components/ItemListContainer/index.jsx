import { useState , useEffect } from 'react';
import productsDB from '../productsDB.json';
import { ItemList } from '../ItemList';


//Este componente agrupa las 7 categorías. Componente PADRE
export const ItemListContainer = (props)=>{
    let [products,setProducts] = useState([]);
    
    //estuvimos horas y al pasar un array vacío funcionó, hay que aclarar que se espera un array vacío, ya que si pasamos un objeto utiliza eso, sino espera un array de dependencias

    const getCategory = (db)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(db);
            }, 3000);
        })
    }

    useEffect(() => {
        let promesa = async () => {
            let data = await getCategory(productsDB);
            setProducts(data)
            console.log(data)
        }
        console.log(getCategory(productsDB));
        
        promesa()
    })

    return (
        <>
            <h2 style={props.style}>{props.greeting}</h2>

            {products.map((categoryList)=>{
                return (
                    <div key = {categoryList.id}>  {/*la key es sobre el contenedor*/}
                        <p>Comp ItemListContainer</p>
                        <>
                            <h3>{categoryList.name}</h3>
                            <button >▽ icono para ampliar seccion</button>
                        </>
                        <ItemList products={categoryList}/>
                    </div>
                )
            })}    
        </>
    )        
};