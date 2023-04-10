import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import Login from './../Login/Login';
import Home from "../Home/Home"

const Authenticate = () => {
    const {user} = useContext(AppContext)
  return (
    <>
    {
        user._id
        ?
        <Home/>
        :
        <Login/>
    }

    </>
    

  )
}

export default Authenticate