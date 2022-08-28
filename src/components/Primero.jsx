import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { miduReducer, addAction, addProductAction } from './reduxFunctions'

export const Primero = () => {

  const dispatch = useDispatch() //algo mas

// useEffect(()=>{

// },[])

  const {carrito, productos} = useSelector((state) =>{
    console.log(state)
    return state
  })

  const handleSum = () => dispatch(addAction())

  const addProducto = ()=> {
    const nombre = prompt()
    const color = prompt()
    const precio = prompt()

    const userProduct = {
      name: nombre,
      color: color,
      precio: precio
    }
    const addToState = () =>{
       dispatch(addProductAction(userProduct))
    }
    addToState();
  }

  return (
    <div>
        <h2>contador</h2>
        <button onClick={handleSum}>sumar</button>
        <button onClick={(addProducto)}>Add producto</button>
        {/* {productos.map((producto)=>{
          return (
          <div>
            <h2>{producto.name}</h2>
            <h4>{producto.color}</h4>
            <p>{producto.precio}</p>
          </div>
          )
        })} */}
    </div>
  )
}

export default Primero