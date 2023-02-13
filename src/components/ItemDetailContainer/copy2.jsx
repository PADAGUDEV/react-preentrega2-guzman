import productsDB from '../productsDB.json';
import { useEffect , useState } from 'react';
import { useParams , Link } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail';

// HIJO 1-3
export const ItemDetailContainer = () => {

    const {productId} = useParams();

    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const [...a] = productsDB
            const product = productsDB.find(item=>item.id === parseInt(id));
            console.log(product)
            resolve(product)
        })
    }
console.log(productsDB)
    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    },[productId])

    
    return (
        <>
            <p>Comp ItemDetailContainer</p>
            {/* <ItemDetail product={item} /> */}
        </>
    )
};