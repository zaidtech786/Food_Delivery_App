import React from 'react'
import "../OrderForm/order.css"
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import Header from './../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

const Modals = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <Sidebar />
      <div className='modalContainer'>
      <div className="modal" style={{display: open ?  "" : "none"}} >
        <CheckCircleSharpIcon style={{fontSize:"3rem",color:"green"}}/>
        <div className="orderContent">
        <h2>Your Order has been Placed SuccessFully</h2>
        <button onClick={()=>navigate("/orders")}>Check Order Status</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Modals