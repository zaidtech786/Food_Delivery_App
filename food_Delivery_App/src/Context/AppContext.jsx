import React, { useEffect, useReducer, useState } from "react";
import {Reducer} from "../Reducers/Reducer"
import axios from "axios";


export const AppContext = React.createContext({});

export const AppProvider = ({children}) => {
    const initialState = {
            user:[],
    };

    let userInfo = JSON.parse(localStorage.getItem("user"));
    const [state,dispatch] = useReducer(Reducer,userInfo);
    const [icon,setIcon] = useState("home")
  
   

    useEffect( () => {
        localStorage.setItem("user",JSON.stringify(state))
    },[state])

    return <AppContext.Provider value={{...state,dispatch,icon,setIcon}}>
        {children}
    </AppContext.Provider>
}


