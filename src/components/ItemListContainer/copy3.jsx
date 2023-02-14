import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFetch } from '../../helpers/mock';
import { ItemList } from '../ItemList';
import { useParams } from "react-router-dom";

//Este componente agrupa las 7 categorías. Componente PADRE
export const ItemListContainer = (props)=>{
console.log(getFetch)
    const {categ} = useParams();

    const [categories, setCategories] = useState([]);

    // const promesa = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         resolve(getFetch);
    //     }, 2000);
    // })

    useEffect(()=>{
        getFetch.then(resultado=>{
            console.log(categ)
            if(!categ){
                setCategories(resultado)
            } else{
                const nuevaLista = resultado.filter(item=>item.categ === categ);
                setCategories(nuevaLista)
                // console.log(nuevaLista)
            }
        })
    },[categ])


    return(
        <div className="item-list-container">
            <p>item list container</p>
            {console.log(categ)}
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
                            {categ === category.categ ? <ItemList productsList={category}/> : ""}
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