import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar';
import "./cartItems.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../Context/CartContext';

const CartItems = () => {
    const [data,setData] = useState([])
    const {user} = useContext(AppContext)
    const [checkOutPrice,setCheckOutPrice] = useState("")
    const {cartDispatch,cart} = useContext(CartContext)
    // const [quantity,setQuantity] = useState(1)

    const getCarts = () => {
        axios.get(`http://localhost:4000/api/cart/getusercart/${user?._id}`)
        .then(res => {
            console.log("Carts from cartComponent : ",res.data)
            // cartDispatch({type:"CART_DATA",payload:res.data.cart})
            setData(res.data.cart)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect( () => {
        getCarts()
    },[]);

    const removeItem = (id) => {
      axios.delete(`http://localhost:4000/api/cart/removeitem/${id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      });
    //   let filterData = cart.find( item => {
    //     return item.product!==id
    //   });
    //   console.log("Filter",filterData)
    // // setData(filterData)
    //   cartDispatch({type:"SET_DATA",payload:filterData})
    }
    
    // const Increment = (id) => {
    //     console.log(id)
    //     let findItem = cart.find(item => {
    //         if(item._id === id){
    //             return {...item,quantity : item.quantity + 1}
    //         }
    //         else{
    //             return item
    //         }
    //     })
    //     console.log(findItem)
    //    cartDispatch({type:"INCREMENT",payload:findItem})
    
    // }

    // const Decrement = () => {
    //    cartDispatch({type:"DECREMENT",payload:id})
    // //    
    // }

    const findTotalCart = () => {
        let total_price = data.reduce( (initialVal,curElem) => {
            initialVal = initialVal + (curElem.product.price * curElem.quantity)
            return initialVal;
        },0)
        setCheckOutPrice(total_price)
    }
useEffect( () => {
    console.log(findTotalCart())
    
})

  return (
    <>
    <Header />
    <Sidebar />
    <div className='cart_Container'>
        <h2 style={{marginLeft:"300px",marginTop:"1rem"}}>Shopping Cart</h2>
        <h3 style={{marginLeft:"300px",marginTop:"1rem"}}>You Have 7 items in a cart</h3>
        <div className='cartWrapper'>
            {
                data.map( (item) => {
                    return (
                        <div className='cartItems' key={item._id}>
                        <img src={item?.product?.photos[0]}/>
                      
                        <div className='cartContent'>
                            <h2>{item.product.name}</h2>
                            <p>{item.product.desc}</p>
                        </div>
                        <div className='counter'>
                {/* <button className='incBtn btn' onClick={()=>Increment(item._id)}>+</button>
                <input type='number' value={item.quantity} className='inp'/>
                <button  className='decBtn btn' onClick={()=>Decrement(item._id)}>-</button> */}
                <h3>Quantity</h3>
                <h4 style={{textAlign:"center"}}>3</h4>
            </div>
            <div className='lastCont'>
                <h3>Price</h3>
            <h3 style={{marginTop:"1rem",textAlign:"center",marginRight:"2rem"}}>₹{item.product.price * item.quantity}</h3>
            </div>
           <DeleteIcon sx={{marginTop:"2.5rem", color:'red',cursor:"pointer"}}  onClick={()=>removeItem(item._id)}/>
          
                    </div>
                    )
                })
            }
           

        </div>
            <div className='lastSec'>
                <h2>Cart Total :{checkOutPrice} </h2>
                <button className='checkoutbtn'>CheckOut</button>

            </div>
    </div>

    </>
  )
}

export default CartItems