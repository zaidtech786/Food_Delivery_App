import React from 'react'

const CartReducer = (state,action) => {
  switch(action.type){
    case "CART_DATA":
        return {
          ...state,
          cart:action.payload,
        };
    case "ADD_TO_CART":
        return {
          ...state,
          cart:[...state.cart,action.payload],
        };
    case "SET_DATA":
      return {
        ...state,
        cart:action.payload
      }

    default:
        return state
  }
}

export default CartReducer