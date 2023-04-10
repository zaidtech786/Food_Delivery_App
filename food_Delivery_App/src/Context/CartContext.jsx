import { createContext, useContext, useEffect, useReducer } from "react";

import CartReducer from "../Reducers/CartReducer"
export const CartContext = createContext({})

export const CartProvider = ({children}) => {
    let initialState = {
        cart:[]
    }
    let getcart = JSON.parse(localStorage.getItem("cart"))
    const [state,cartDispatch] = useReducer(CartReducer,getcart)

    useEffect( () => {
      localStorage.setItem("cart",JSON.stringify(state))
    },[state])

    return (<CartContext.Provider value={{...state,cartDispatch}}>
        {children}
    </CartContext.Provider>)
}



