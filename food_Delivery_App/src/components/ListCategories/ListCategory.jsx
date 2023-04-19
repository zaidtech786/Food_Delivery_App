import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./../Header/Header";
import { Grid } from "@mui/material";
import Sidebar from "./../Sidebar/Sidebar";
// import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";

const ListCategory = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { cat } = useParams();
  // Fetching Products
  const getProducts = () => {
    axios
      .get(`http://localhost:4000/api/food/findbycat/${cat}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.food);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Box bgcolor="#e0e0e0" color="text.primary">
        <Header />
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3} md={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={11} sm={9} lg={9.5}>
            <Box
              flex={1}
              borderRadius="15px"
              padding="20px"
              bgcolor="#fcfcfc"
              minWidth="100%"
              mt="25px"
            >
              <Typography
                style={{ textAlign: "center", marginTop: "1rem" }}
                fontSize={40}
                fontWeight={700}
              >
                {cat}
              </Typography>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "30px",
                  marginTop: "1rem",
                }}
                justifyContent="center"
                alignItems="center"
              >
                {data.map((data) => {
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
                      elevation={0}
                    >
                      <CardMedia
                        component="img"
                        width="100%"
                        height={210}
                        image={data.photos[0]}
                        alt="card Image"
                        sx={{
                          borderRadius: "10px",
                        }}
                        onClick={() => navigate(`/single/${data._id}`)}
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
                        <Typography
                          fontSize={16}
                          fontWeight={600}
                          color="#475be8"
                        >
                          {data.desc}
                        </Typography>
                        <div className="card-Content">
                          <h2>₹{data.price}.00</h2>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <h3
                              style={{
                                textDecoration: "line-through",
                                marginRight: "20px",
                              }}
                            >
                              ₹{data.price + 500}
                            </h3>
                            <h4 style={{ color: "green" }}>
                              {data.discount}%OFF
                            </h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ListCategory;
