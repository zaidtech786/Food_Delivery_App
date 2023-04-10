import {
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    Stack,
} from "@mui/material";
import React, { useEffect } from 'react'
import axios from "axios"
import Sidebar from './../Sidebar/Sidebar';
import Header from './../Header/Header';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Products = () => {
    const navigate = useNavigate()
    const [data,setData] = useState([])
    // Fetching Products
    const getProducts = () => {
        axios.get("http://localhost:4000/api/food/getallfoods")
        .then(res => {
            console.log(res.data)
            setData(res.data.foods)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect( () => {
        getProducts()
    },[])

  return (
    <>
     
        <Header />
          <Sidebar />
          <h1 style={{textAlign:"center",marginTop:"1rem"}}>Our Trending Products</h1>
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"30px",marginTop:"1rem",marginLeft:"300px"}}>
        {
            data.map( (data) => {
                return (
                    <Card
                    sx={{
                        maxWidth: "230px",
                        padding: "10px",
                        textDecoration: 'none',
                        "&:hover": {
                          boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                        },
                        cursor: "pointer",
                        bgcolor:"#fcfcfc",
                       
                    }}
                    
                    elevation={0}      
                  >
                  <CardMedia
                    component="img"
                    width="100%"
                    height={210}
                    image={data.photos[2]}
                    alt="card Image"
                    sx={{
                      borderRadius: '10px'
                    }}
                    onClick={()=>navigate(`/single/${data._id}`)}
                  />
                  <CardContent sx={{
                    display: 'flex',flexDirection: 'row', justifyContent: 'space-between', gap: '10px', paddingX: '5px'
                  }}>
                    <Stack direction="column" gap={1} sx={{
              
                    }}>
                      <Typography fontSize={16} fontWeight={500} 
                      color="#11142d">{data.name}</Typography>
                    <Box px={1.5} py={0.5} borderRadius={1} bgcolor="#e5f7ee" height="fit-content" width="fit-content">
                      <Typography fontSize={12} fontWeight={600}
                      color="#03753c">
                      {data.discount}
                      </Typography>
                    </Box>
                    </Stack>
                    <Box px={1.5} py={0.5} borderRadius={1} bgcolor="#dadefa" height="fit-content">
                      <Typography fontSize={12} fontWeight={600}
                      color="#475be8">
                        ${data.price}
                      </Typography>
                    </Box>
                  </CardContent>
                  </Card>
              
                )
            })
        }
         
   


          </div>
          
       
    </>
  )
}

export default Products