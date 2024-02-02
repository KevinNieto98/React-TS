import React, { useState } from 'react'

//InterfacesReglas para ponerle a los objetos
interface User {
    uid: string,
    name: string
}

export const Usuario = () => {
    //Agrega la regla al UseState
    const [user, setuser] = useState<User>()
    const login = ()=>{
        setuser({
            uid: 'ABC123',
            name: 'Fernando Herrera'
        })
    }
  return (
    <div className='mt-5'>
        <h3>Usuario: useState</h3>
        <button
            onClick={login}
            className="btn btn-outline-primary"
        >
            Login
        </button>
        {
            (!user) 
            ?<pre>No hay Usuario</pre>
            :<pre>{user.name}</pre>
        }
        
    </div>
  )
}
