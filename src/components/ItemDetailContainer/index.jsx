import {arrayplano} from '../../helpers/arrayplano';
import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';//cuidado que retorna numeros en strings
import { ItemDetail } from '../ItemDetail';


// HIJO 1-3
export const ItemDetailContainer = () => {
    const {productId} = useParams();
console.log(productId)
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const filtro = arrayplano.find(item=>item.id === parseInt(id))
            console.log(filtro)
            resolve(filtro)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    },[productId])

    return(
        <>
        {console.log(item)}
            <h2>{item.title}</h2>
            <img src={`../../images/${item.img}.jpg`} alt={item.img} />
            <p>{item.name}</p>
            <ItemDetail product={item} />
        </>
    )
}