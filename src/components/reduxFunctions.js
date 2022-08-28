import {createStore} from "redux"

//actions
export const addAction = () =>{
    return {
        type: "agregar"
    }
}
export const removeAction = ()=>{
    return {
        type: "remover"
    }
}
export const addProductAction = (newProduct) => {
    return {
        type: "agregar_p",
        nuevo: newProduct
    }
}
//reducer
const initialState = {
    carrito: 5,
    error: "",
    productos: [
        {name: "remera",
        color: "azul",
        precio: 199}
        , 
        {name: "buzo",
        color: "verde",
        precio: 499}
    ]
}
// const initialState = 5;
export const miduReducer = (state = initialState, action) => {
    switch(action.type){
        case "agregar": {
            return {
                ...state,
                carrito: state.carrito + 1
            }
        }
        case "remover": {
            return {
                ...state,
                carrito: state.carrito - 1
            }
        }
        case "agregar_p": {
            const nuevosP = state.productos
            nuevosP.push(action.nuevo)
           
            // const nuevosP = state.productos
            // nuevosP.push({
            //     name: "buzazo",
            //     color: "azul",
            //     precio: 799
            // })

            return {
                ...state,
                productos: nuevosP
            }
        }
        default: 
            return state
    }
    
} 

//store
export const store = createStore(
    miduReducer
)
