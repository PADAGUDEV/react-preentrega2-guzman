import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrayjson from '../../helpers/arrayjson.json';
import { ItemList } from '../ItemList';
import { useParams } from "react-router-dom";

//Este componente agrupa las 7 categorías. Componente PADRE
export const ItemListContainer = (props)=>{

      //pasar un array vacío funcionó en useState, ya que si pasamos un objeto utiliza eso, sino espera un array de dependencias
    
    const {categoryId} = useParams();

    const [categories, setCategories] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arrayjson);
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

    return(
        <div className="item-list-container">
            <h2 style={props.style}>{props.greeting}</h2>
            {console.log(categoryId)}
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