import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsDB from '../productsDB.json';
import { ItemList } from '../ItemList';
import { useParams } from "react-router-dom";

//Este componente agrupa las 7 categorías. Componente PADRE
export const ItemListContainer = (props)=>{

      //estuvimos horas y al pasar un array vacío funcionó, hay que aclarar que se espera un array vacío, ya que si pasamos un objeto utiliza eso, sino espera un array de dependencias
    
    const {categoryId} = useParams();

    const [categories, setCategories] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(productsDB);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            console.log(categoryId)
            if(!categoryId){
                setCategories(resultado)
            } else{
                const nuevaLista = resultado.filter(item=>item.categ === categoryId);
                setCategories(nuevaLista)
                // console.log(nuevaLista)
            }
        })
    },[categoryId])

    // const renderListMatchId = () => {
        
    // }

    return(
        <div className="item-list-container">
            <p>item list container</p>
            {console.log(categoryId)}
            {/* {console.log(categories[1])} */}
            <ul>
                {categories.map((category)=>{
                    return (
                        <li key = {category.id}>
                            <>                                
                                <Link to={`/category/${category.categ}`}>
                                    <h3>{category.title}</h3>
                                </Link>
                            </>                            
                            {categoryId === category.categ ? <ItemList productsList={category}/> : ""}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
//     return (
//         <>
//             <h2 style={props.style}>{props.greeting}</h2>
//             <ul>
//                 {categories.map((category)=>{
//                     return (
//                         <li key = {category.id}>  {/*la key es sobre el contenedor*/}
//                             {/* <p>Comp ItemListContainer</p> */}
//                             <>                                
//                                 <Link to={`/category/${category.id}`}>
//                                     <h3>{category.name}</h3>
//                                 </Link>
//                             </>
//                             <ItemList products={category}/>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </>
//     )        
// };