import productsDB from '../productsDB.json';
import { useEffect , useState } from 'react';
import { useParams , Link } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail';

// HIJO 1-3
export const ItemDetailContainer = () => {

//     const {productId} = useParams();

//     const [items, setItems] = useState([]);

//     const promesa = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const itemsList = productsDB.map(objeto => {
//                 return objeto.list
                
//             })
//             console.log(itemsList)
//             resolve(itemsList);
//         }, 2000);
//     })

//     const productsList = ()=>{promesa.map(objeto => {return objeto })}
        
//     console.log(productsList)
    
// console.log(promesa)
//     useEffect(()=>{
//         promesa.then(resultado=>{
//             console.log(resultado)
            
//                 const nuevaLista = resultado.map(objeto=>{objeto.filter(item=>{item.id === productId})});
//                 // const product = nuevaLista.find(item=>item.id === parseInt(id));
//                 // console.log(product)
//                 setItems(nuevaLista)
//                 console.log(nuevaLista)
//         })
//     },[productId])

    // const renderListMatchId = () => {
        
    // }





    const {productId} = useParams();
console.log(productId)
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const catego = productsDB.map((elem)=>{ return elem.list});
            const listas = catego.map((elem)=>{ return elem.id});
            // const filtro = listas.find(item=>item.id === parseInt(id))
           
            console.log(catego)
            console.log(listas)
            // console.log(filtro)
            resolve(listas)
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
            <p>Comp ItemDetailContainer</p>
            {/* <p>{item.name}</p> */}
            {/* <ItemDetail product={item} /> */}
        </>
    )







//         <div className="item-detail-container">
//             <p>item Detail container</p>
//             {console.log(item)}
//             {/* {console.log(items[1])} */}
//             <ul>
//                 {items.map((item)=>{
//                     console.log(item)
//                     return (
//                         <li key = {item.id}>
//                             <>                                
//                                 <Link to={`/item/${item.id}`}>
//                                     <h3>{item.title}</h3>
//                                 </Link>
//                             </>                            
//                             {productId === item.id ? <ItemDetail product={item}/> : ""}
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>
//     )
}
    

// };