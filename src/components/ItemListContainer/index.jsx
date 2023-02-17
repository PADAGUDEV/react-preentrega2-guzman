import { useState , useEffect } from 'react';
import { arrayplano } from '../../helpers/arrayplano';
import { ItemList } from '../ItemList';
import { useParams , Link } from "react-router-dom";

//Este componente agrupa las 7 categorías. Componente PADRE
export const ItemListContainer = (props)=>{

      //pasar un array vacío funcionó en useState, ya que si pasamos un objeto utiliza eso, sino espera un array de dependencias
    
    const {categoryId} = useParams();

    const [categories, setCategories] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        resolve(arrayplano);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            
            if(!categoryId){
                
                setCategories(resultado)
            } else{
                // console.log(resultado)
                const nuevaLista = resultado.filter(item=>item.categ === categoryId);
                setCategories(nuevaLista)
                console.log(nuevaLista)
            }
        })
    },[categoryId])

    return(
        <div className="item-list-container">
            <h2 style={props.style}>{props.greeting}</h2>
            {console.log(categoryId)}
            <>
                <Link to={'/category/harinas'}>HARINAS DE MAIZ Y VARIOS</Link>
                <ul>
                    {categories.map((category)=>{
                        return (
                            <>
                                {categoryId === category.categ ? <ItemList productsList={category}/> : ""}
                            </>
                        )
                    })}
                </ul>

                <Link to={'/category/frutas'}>FRUTAS</Link>
                <ul>
                    {categories.map((category)=>{
                        return (
                            <>
                                {categoryId === category.categ ? <ItemList productsList={category}/> : ""}
                            </>
                        )
                    })}
                </ul>

                <Link to={'/category/quesos'}>QUESOS</Link>
                <ul>
                    {categories.map((category)=>{
                        return (
                            <>
                                {categoryId === category.categ ? <ItemList productsList={category}/> : ""}
                            </>
                        )
                    })}
                </ul>

                <Link to={'/category/salsas_y_cremas'}>SALSAS Y CREMAS</Link>
                <ul>
                    {categories.map((category)=>{
                        return (
                            <>
                                {categoryId === category.categ ? <ItemList productsList={category}/> : ""}
                            </>
                        )
                    })}
                </ul>

                <Link to={'/category/bebidas'}>BEBIDAS Y MÁS</Link>
                <ul>
                    {categories.map((category)=>{
                        return (
                            <>
                                {categoryId === category.categ ? <ItemList productsList={category}/> : ""}
                            </>
                        )
                    })}
                </ul>

                <Link to={'/category/golosinas'}>GOLOSINAS</Link>
                <ul>
                    {categories.map((category)=>{
                        return (
                            <>
                                {categoryId === category.categ ? <ItemList productsList={category}/> : ""}
                            </>
                        )
                    })}
                </ul>

                <Link to={'/category/varios'}>VARIOS</Link>
                <ul>
                    {categories.map((category)=>{
                        return (
                            <>
                                {categoryId === category.categ ? <ItemList productsList={category}/> : ""}
                            </>
                        )
                    })}
                </ul>
            </>
        </div>
    )
};