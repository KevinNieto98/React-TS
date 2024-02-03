import React, { useEffect, useRef, useState } from 'react'

type TimerArgs ={
    milisegundos : number,
    //cuando lleva el signo de Interrogacion quiere decir que no es obligatoria
    segundos ?: number

}
//desestructuramos los args con las llaves
export const Timer = ({milisegundos} : TimerArgs ) => {
    const [segundos, setSegundos] = useState(0)
    const ref = useRef<NodeJS.Timeout>()//Este siempre va a ser el mismo valor en memoria


    useEffect(() => {
        //&& Es como un if
        ref.current && clearInterval(ref.current);
        ref.current = setInterval(()=>setSegundos(s =>s+1 ),milisegundos );
    }, [milisegundos])
    
    return (
    <>

        <h4>Timer: <small>{segundos}</small></h4>
    </>
  )
}
