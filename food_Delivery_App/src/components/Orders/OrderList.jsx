import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import DeleteIcon from "@mui/icons-material/Delete";

const OrderList = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className='cart_Container'>
        <h2 style={{marginLeft:"300px",marginTop:"1rem"}}>Shopping Cart</h2>
        <h3 style={{marginLeft:"300px",marginTop:"1rem"}}>You Have 7 items in a cart</h3>
        <div className='cartWrapper'>
            <div className='cartItems'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkYcKo_qcwEVxGDcDeAtspL8FLWL8XA6s1A&usqp=CAU'/>
              
                <div className='cartContent'>
                    <h2>Samasung 32</h2>
                    <p>Black in Color</p>
                </div>
                <div className='counter'>
        <button className='incBtn btn'>+</button>
        <input type='number' value="1" className='inp'/>
        <button  className='decBtn btn'>-</button>
    </div>
    <div className='lastCont'>
    <h3 style={{marginTop:"1rem"}}>2500 rs</h3>
    </div>
   <DeleteIcon sx={{marginTop:"2.5rem"}} color='red'/>
  
            </div>


       
            </div>
    </div>

    </>
  );
};

export default OrderList;
