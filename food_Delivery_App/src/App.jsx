// import { Feed } from '@mui/icons-material';
import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Home/Home'
import { Box, createTheme, Modal, Stack, ThemeProvider } from "@mui/material";
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
import OrderInfo from './components/OrderForm/OrderInfo';
import Modals from "./components/Modal/Modal"

function App() {
  const {user} = useContext(AppContext)

  return (
    <>
      
          <Routes>
            <Route path='/' element={user._id ? <Home/> : <Login/>} />
            <Route path='/sidebar'  element={<Sidebar/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/navbar' element={<Navbar/>} />
            <Route path='/orders' element={<OrderList/>} />
            <Route path='/cartitems' element={<CartItems/>} />
            <Route path='/modal' element={<Modals/>} />
            <Route path='/orderinfo/:price' element={<OrderInfo/>} />
            <Route path='/single/:id' element={<SingleProduct/>} />
            <Route path='/categorydata/:cat' element={<ListCategory/>} />
          </Routes>
    </>
  )
}

export default App
