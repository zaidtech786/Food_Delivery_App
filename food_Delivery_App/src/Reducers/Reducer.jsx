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
       
        case "UPDATE_USER":
          return {
            ...state,
            user:action.payload,
          };
       
        default:
          return state;
      }
}

