import { useState , useEffect } from "react";

export const EstadosPorEfectos = ()=> {

    let [count, setCount] = useState(0);//seteo del contador que no me adminte CONSTANTE!! cual es la falla???
    let bajar = ()=>{count>0?setCount(count-1):count=0};
    let subir = ()=>setCount(count+1);
    useEffect(()=>{
        console.log("app montada");
        
        return (
            console.log("app se desmontará")// Acá declaramos la sentencia de lo que queremos que "efectos secundarios" se encargue de ejecutar cuando se detectan cambios en le parámetro que le pasamos en el array
        )
        
        },[count]// "[objeto, array,o variable]" donde se vigila si existen cambios para ejecutar el segundo parámetro como función
    );
    console.log("app se renderizará");
    return (
        <>
            <h2>Esto es una prueba con useEffect</h2>
            <p>Numero contador de veces click: {count}</p>
            <button onClick={subir}>AUMENTAR</button>
            <button onClick={bajar}>BAJAR</button>
            {/* Los botones el atributo onclick sólo admite funciones sin ejecutar, tanto una anónima como una declarada*/}
        </>
    )
};