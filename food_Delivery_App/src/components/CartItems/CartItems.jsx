import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import Header from "./../Header/Header";
import Sidebar from "./../Sidebar/Sidebar";
import "./cartItems.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../Context/CartContext";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const CartItems = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AppContext);
  const [checkOutPrice, setCheckOutPrice] = useState("");
  const { cartDispatch, cart } = useContext(CartContext);
  // const [quantity,setQuantity] = useState(1)

  const getCarts = () => {
    axios
      .get(`http://localhost:4000/api/cart/getusercart/${user?._id}`)
      .then((res) => {
        console.log("Carts from cartComponent : ", res.data);
        // cartDispatch({type:"CART_DATA",payload:res.data.cart})
        setData(res.data.cart);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCarts();
  }, []);

  const removeItem = (id) => {
    axios
      .delete(`http://localhost:4000/api/cart/removeitem/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //   let filterData = cart.find( item => {
    //     return item.product!==id
    //   });
    //   console.log("Filter",filterData)
    // // setData(filterData)
    //   cartDispatch({type:"SET_DATA",payload:filterData})
  };

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
    let total_price = data.reduce((initialVal, curElem) => {
      initialVal = initialVal + curElem.product.price * curElem.quantity;
      return initialVal;
    }, 0);
    setCheckOutPrice(total_price);
  };
  useEffect(() => {
    console.log(findTotalCart());
  });

  return (
    <>
      <Box
        bgcolor="#e0e0e0"
        color="text.primary"
        style={{ minHeight: "100vh" }}
      >
        <Header />
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3} md={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={9} lg={9.5}>
            <Box className="cart_Container">
              <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
                Shopping Cart
              </h2>
              <h3 style={{ textAlign: "center", marginTop: "1rem" }}>
                You Have 7 items in a cart
              </h3>
              <Box className="cartWrapper">
                {data.map((item) => {
                  return (
                    <Box
                      className="cartItems"
                      key={item._id}
                      gap={4}
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", lg: "row" },
                      }}
                      alignItems="center"
                      width="100%"
                      bgcolor="#fcfcfc"
                    >
                      <img src={item?.product?.photos[0]} />

                      <Box className="cartContent">
                        <h2>{item.product.name}</h2>
                        <p>{item.product.desc}</p>
                      </Box>
                      <div className="counter">
                        {/* <button className='incBtn btn' onClick={()=>Increment(item._id)}>+</button>
                <input type='number' value={item.quantity} className='inp'/>
                <button  className='decBtn btn' onClick={()=>Decrement(item._id)}>-</button> */}
                        <h3>Quantity</h3>
                        <h4 style={{ textAlign: "center" }}>3</h4>
                      </div>
                      <div className="lastCont">
                        <h3>Price</h3>
                        <h3
                          style={{
                            marginTop: "1rem",
                            textAlign: "center",
                            marginRight: "2rem",
                          }}
                        >
                          ₹{item.product.price * item.quantity}
                        </h3>
                      </div>
                      <DeleteIcon
                        sx={{ color: "red", cursor: "pointer", width: "100px" }}
                        onClick={() => removeItem(item._id)}
                      />
                    </Box>
                  );
                })}
              </Box>
              <Box className="lastSec">
                <h2>Cart Total :{checkOutPrice} </h2>
                <button className="checkoutbtn">CheckOut</button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CartItems;
