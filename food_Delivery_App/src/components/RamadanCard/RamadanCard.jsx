import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RamadanCard = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);

  const getFeaturedFood = () => {
    axios
      .get("http://localhost:4000/api/food/findbycat/ramadanSpl")
      .then((res) => {
        console.log(res.data);
        setData(res.data.food);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFeaturedFood();
  }, []);
  return (
    <>
      <Typography style={{textAlign:"center",marginTop:"1rem"}} fontSize={40} fontWeight={700}>
        Ramadan Special
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          marginLeft:"12rem",
          flexDirection: "row",
          gap: "30px",
        }}
      >
        {data?.map((item) => {
          return (
          <Card
            sx={{
              maxWidth: "230px",
              padding: "10px",
              textDecoration: "none",
              "&:hover": {
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              },
              cursor: "pointer",
              bgcolor: "#fcfcfc",
            }}
            key={item._id}
            elevation={0}
          >
            <CardMedia
              component="img"
              width="100%"
              height={210}
              image={item.photos[0]}
              alt="card Image"
              sx={{
                borderRadius: "10px",
              }}
              onClick={()=>navigate(`/single/${item._id}`)}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "10px",
                paddingX: "5px",
              }}
            >
               <Typography fontSize={16} fontWeight={600} color="#475be8">
                  {item.desc}
                </Typography>
                <div className="card-Content">
                  <h2>₹{item.price}.00</h2>
                  <div style={{display:"flex",flexDirection:"row"}}>
                  <h3 style={{textDecoration:"line-through",marginRight:"20px"}}>₹{item.price + 500}</h3>
                  <h4 style={{color:"green"}}>{item.discount}%OFF</h4>
                  </div>
                </div>
              {/* <Stack direction="column" gap={1} sx={{}}>
                <Typography fontSize={16} fontWeight={500} color="#11142d">
                {item.name}
                </Typography>
                <Box
                  px={1.5}
                  py={0.5}
                  borderRadius={1}
                  bgcolor="#e5f7ee"
                  height="fit-content"
                  width="fit-content"
                >
                  <Typography fontSize={12} fontWeight={600} color="#03753c">
                    {item.discount}%
                  </Typography>
                </Box>
              </Stack> */}
              {/* <Box
                px={1.5}
                py={0.5}
                borderRadius={1}
                bgcolor="#dadefa"
                height="fit-content"
              >
                <Typography fontSize={12} fontWeight={600} color="#475be8">
                  ${item.price}
                </Typography>
              </Box> */}
            </CardContent>
          </Card>
          )
        })}

      
      </div>
    </>
  );
};

export default RamadanCard;
