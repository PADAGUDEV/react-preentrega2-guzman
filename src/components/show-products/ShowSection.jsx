import products from '../products.json';
import { ShowList } from './ShowList';

export const ShowSection = ()=>{

    products.map((section)=>{
        return (
            <>
                <h3>{section.name}</h3>
                <>
                    <button poner onclick>▽</button>
                    <ShowList key={section.id} list={products.list}/>
                    {/* <ShowList products={products} /> segunda forma de pasar data por parámetro al componente hijo*/}
                </>
            </>
        )
    }
    )
}