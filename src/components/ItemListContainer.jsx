import { ItemList } from './ItemList.jsx';
import products from '../products.json';
import { ShowList } from './ShowList';
console.log(products)
console.log(products[0].list)
//Este componente agrupa las 7 categorías
export const ShowSection = ()=>{

    return ( products.map((section)=>{

        console.log(section.list)
            return (
                <>
                    <>
                        <h3>{section.name}</h3>
                        <button >▽ icono para ampliar seccion</button>
                    </>
                    <ShowList key={section.list[0]} list={section.list}/>
                    {/* <ShowList products={products} /> segunda forma de pasar data por parámetro al componente hijo*/}
                </>
            )
        })
    )
}
// hasta esta linea funciona el componente!!!