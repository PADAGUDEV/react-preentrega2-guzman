import { useState } from "react";

export const CounterProduct = (props)=>{
    let [count, setCount] = useState(0);
    let down = ()=>{count>0?setCount(count-1):count=0};
    let up = ()=>setCount(count+1);
    console.log("app se renderizará");
    return (
        <>
            <p>{count} x 1 {props.unit} = ${props.price*count}</p>
            <button onClick={down}>-</button>
            <p>{count}</p>
            <button onClick={up}>+</button>
            {/* Los botones el atributo onclick sólo admite funciones sin ejecutar, tanto una anónima como una declarada*/}
        </>
    )
};
// Código testeado funcionando en forma individual