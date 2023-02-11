import { useState , useEffect } from 'react';
import productsDB from './productsDB.json';
import { ItemList } from './ItemList.jsx';
// console.log(products)
// console.log(products[0].list)

//Este componente agrupa las 7 categorías PADRE1
export const ItemListContainer = (props)=>{

    const [product,setProduct] = useState({});

    const promesa = async ()=>{setTimeout(() => {
        productsDB
    }, 2000)}

    const dataPromesa = await promesa.json()
    console.log(dataPromesa);

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await dataPromesa;
            setProduct(producto);
        }
        getProducto();
    },[])

    // const promesa = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         resolve(productsDB);
    //     }, 2000);
    // })
    // setProduct(promesa)
    console.log(promesa)
    
    console.log(productsDB)

    // useEffect(
    //     () => {
    //         dataProductos.then(resultado=>{setProduct(resultado)})
    //     }
    // ,[])
console.log(product)
    return (
        <>
        <h2 style={props.style}>{props.greeting}</h2>

        {product.map((categoryList)=>{
        // console.log(categoryList.list)
            return (
                <>                    
                    <p>Comp ItemListContainer</p>
                    <>
                        <h3>{categoryList.name}</h3>
                        <button >▽ icono para ampliar seccion</button>
                    </>
                    <ItemList key={categoryList.id} products={categoryList}/>
                    {/* <ItemList key={categoryList.list[0]} list={categoryList.list}/>segunda forma de pasar data por parámetro al componente hijo que no funcionó */}
                </>
            )
        })}    
        </>
    )        
};

