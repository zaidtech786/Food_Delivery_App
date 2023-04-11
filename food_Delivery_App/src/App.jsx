// import { Feed } from '@mui/icons-material';
import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Home/Home'
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Home from "./components/Home/Home"
import Carousel from './components/Carousel/Carousel';
import Cards from "./components/Cards/Cards"
import RamadanCard from './components/RamadanCard/RamadanCard';
import CategoryCards from './components/Category/CategoryCards';
import { Route, Routes } from "react-router-dom";
import Products from './components/products/Products';
import Profile from './components/Profile/Profile';
import ListCategory from './components/ListCategories/ListCategory';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Login from "./components/Login/Login"
import Signup from './components/Signup/Signup';
import Navbar from './common/Navbar';
import Authenticate from './components/AuthenticateUser/Authenticate';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';
import { useEffect } from 'react';
import axios from 'axios';
import { CartContext } from './Context/CartContext';
import CartItems from './components/CartItems/CartItems';
import OrderList from './components/Orders/OrderList';

function App() {
  const [mode, setMode] = useState("light");
  const {user} = useContext(AppContext)
  const {cartDispatch} = useContext(CartContext)

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const getCarts = () => {
    axios.get(`http://localhost:4000/api/cart/getusercart/${user._id}`)
    .then(res => {
        console.log("Carts : ",res.data)
        cartDispatch({type:"CART_DATA",payload:res.data.cart})
    }).catch(err => {
        console.log(err)
    })
}
useEffect( () => {
    getCarts()
},[])


  return (
    <>
      <ThemeProvider theme={darkTheme}>
          {/* <Authenticate/> */}
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/sidebar'  element={<Sidebar mode={mode} setMode={setMode}/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/navbar' element={<Navbar/>} />
            <Route path='/orders' element={<OrderList/>} />
            <Route path='/cartitems' element={<CartItems/>} />
            <Route path='/single/:id' element={<SingleProduct/>} />
            <Route path='/categorydata/:cat' element={<ListCategory/>} />
          </Routes>
    </ThemeProvider>
    </>
  )
}

export default App
