import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList';
import { useParams } from "react-router-dom";
import { getFetch } from '../../helpers/mock';

//Este componente agrupa las 7 categorías. Componente PADRE
export const ItemListContainer = (props)=>{
console.log(getFetch)
    const {categ} = useParams();

    const [categories, setCategories] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        if (categ) {
            getFetch
            .then((prods) => {
                setCategories(
                    prods.filter((productos) => productos.categ === categ)
                );
                setLoading(false);
            })
            .catch((err) =>
                console.log(`error en traer los productos ${err}`
                )
            );
        } else {
            getFetch
                .then((prods) => {
                    setCategories(prods);
                    setLoading(false);
                })
                .catch((err) =>
                console.log(`error en traer los prods ${err}`)
                );

        }
    }, [categ]);

    return (
        <div>
            <p>item list containers</p>
            <ul>
                {categories.map((category) =>{
                    return (
                        <li key={category.id}>
                            <>
                            <Link to={`/item/${category.id}`}>
                                <h3>{category.nam}</h3>
                            </Link>
                            </>

                            {categ === category.categ ? <ItemList productsList={category}/> : ""}
                        </li>
                    )
                })}
            </ul>
        </div>
    )

};