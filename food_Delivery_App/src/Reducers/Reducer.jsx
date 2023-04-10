import React from 'react'

export const Reducer = (state,action) => {
    switch (action.type) {
        case "LOGIN":
          return {
            ...state,
            user: action.payload,
          };
       
        case "LOGOUT":
          return {
            ...state,
            user:[],
          };
       
        case "ADD_TO_CART":
          return {
            ...state,
            cart:[...state.cart,action.payload]
            
          };
         
        default:
          return state;
      }
}

