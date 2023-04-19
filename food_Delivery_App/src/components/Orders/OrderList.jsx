import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';


const OrderList = () => {
  return (
    <>
      <Box bgcolor="#e0e0e0" color="text.primary" style={{ minHeight: '100vh', }} >
        <Header />
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3} md={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={11} sm={10} lg={9.5} style={{ height: '100%'}}>
            <Box  className="cart_Container" flexWrap='wrap' display='flex' flexDirection='column' alignItems='center'>
              <Typography fontSize={40} fontWeight={700} style={{ textAlign:'center', marginTop: "1rem" }}>
                Shopping Cart
              </Typography>
              <Typography fontSize={22} fontWeight={500}  style={{ textAlign: 'center', marginTop: "1rem" }}>
                You Have 7 items in a cart
              </Typography>
              <Box className="cartWrapper" margin={2} alignItems='center'>
                <Box className="cartItems" bgcolor='#fcfcfc' width='100%' sx={{display:'flex', flexDirection: { xs: 'column', sm: 'column', lg: 'row' }, alignItems:'center'}}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkYcKo_qcwEVxGDcDeAtspL8FLWL8XA6s1A&usqp=CAU" />

                  <Stack className="cartContent">
                    <h2>Samasung 32</h2>
                    <p>Black in Color</p>
                  </Stack>
                  <Box className="counter">
                    <button className="incBtn btn"  style={{
                    backgroundColor: '#2ea8c7',
                    borderRadius: '5px',
                    padding: '7px',
                    margin: '10px'
                  }} >+</button>
                    <input type="number" value="1" className="inp"  style={{
                    width:'40px',
                    padding:'10px'
                  }} />
                    <button className="decBtn btn"  style={{
                    backgroundColor: '#2ea8c7',
                    borderRadius: '5px',
                    padding: '7px',
                    margin: '10px'
                  }}>-</button>
                  </Box>
                  <Box className="lastCont">
                    <h3 style={{ marginTop: "1rem" }}>2500 rs</h3>
                  </Box>
                  <DeleteIcon sx={{ marginTop: "2.5rem", minWidth: '180px' }} color="warning"  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Header />
      <Sidebar /> */}
    </>
  );
};

export default OrderList;
