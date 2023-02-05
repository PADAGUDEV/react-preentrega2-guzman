import { CounterProduct } from "./CounterProduct";
// export const ShowList = ({products}) => {} segunda forma para traer la data en este caso lo hacemos por parámetro pasado en el componente padre, encerrado entre llaves.
export const ShowList = (props) => {
    
    props.list.map((product) =>{
        return (
            <>
                <div>
                    <button>▽</button>
                    <img src={product.img} alt="" />
                </div>
                <div>
                    <h4>{product.name}</h4>
                    <p>{product.desc}</p>
                </div>
                <CounterProduct unit={product.unit} price={product.price}/>
            </>
        )
    }
    )
}