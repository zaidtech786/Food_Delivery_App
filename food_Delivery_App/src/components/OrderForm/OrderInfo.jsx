import React, { useContext, useState } from "react";
import "../Login/Login.css"
import "./Order.css"

// Material UI Imports
import {
  TextField,
  FormControl,
  InputLabel,
  Button,
  Input,

} from "@mui/material";




import { AppContext } from "../../Context/AppContext";
import axios  from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar';
import { CartContext } from "../../Context/CartContext";

const OrderInfo = () => {
  const {dispatch,user} = useContext(AppContext);
  const {cart} = useContext(CartContext);
  const navigate = useNavigate()

  //Inputs
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [open,setOpen] = useState(false)
  const {price} = useParams()

  const PlaceOrder = () => {
    const findCartId = cart.map(cart => {
      return cart.product._id
    });
    console.log(findCartId);
    if(!city && !phone && !address ){
      return alert("Please Fill all the fields")
    }
    axios.post("http://localhost:4000/api/order/orderitems",{
      user:user._id,
      product:findCartId,
      itemsPrice:price
    })
    .then(res => {
      console.log(res.data);
      navigate("/modal")
     
    })
    .catch(err => {
      console.log(err);
    })

      
    //  Update User
      axios.put(`http://localhost:4000/api/updateuser/${user._id}`,{
        city,
        address,
        phone,
      })
      .then(res => {
        console.log("Updated user :",res.data);
        dispatch({type:"UPDATE_USER",payload:res.data.user})
      })
      .catch(err => {
        console.log(err);
      })
  }
   

  return (
    <>
     <Header />
      <Sidebar />
      <div className="wrapper">

     
        <h1>Place Your Order</h1>
        <div style={{width:"500px",height:"400px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"7px"}} >

        <div style={{marginTop:"1rem",padding:"0.5rem" }}>
        <TextField
          label="Enter Name"
          fullWidth
          // error={emailError}
          id="standard-basic"
          variant="standard"
          sx={{ width: "100%" }}
          InputProps={{}}
          size="small"
          value={user.name}
          // onBlur={handleEmail}
        />
      </div>

      <div style={{marginTop:"1rem",padding:"0.5rem" }}>
        <TextField
          label="Enter City"
          fullWidth
          // error={emailError}
          id="standard-basic"
          variant="standard"
          sx={{ width: "100%" }}
          InputProps={{}}
          size="small"
          // onBlur={handleEmail}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
      </div>
    
      <div style={{  marginTop:"1rem",padding:"0.5rem" }}>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel
            htmlFor="standard-adornment-password"
          >
            Phone
          </InputLabel>
          <Input
            id="standard-adornment-number"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </FormControl>
      </div>

      <div style={{  marginTop:"1rem",padding:"0.5rem" }}>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel
            htmlFor="standard-adornment-text"
          >
            Address
          </InputLabel>
          <Input
            id="standard-adornment-text"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </FormControl>
      </div>


      <div style={{ marginTop: "10px" }}>
        <Button
          variant="contained"
          fullWidth
          // startIcon={<LoginIcon />}
          onClick={()=>PlaceOrder()}
        >
         Place Order
        </Button>
      </div>
      </div>
    
      </div>
    </>
  )
}
// 

export default OrderInfo