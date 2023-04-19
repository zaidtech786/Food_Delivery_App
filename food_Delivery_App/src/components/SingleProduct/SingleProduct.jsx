import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
// import "./single.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../Context/AppContext";
import { CartContext } from "../../Context/CartContext";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const SingleProduct = () => {
  const { id } = useParams();
  const { dispatch, user } = useContext(AppContext);
  const { cartDispatch, cart } = useContext(CartContext);
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);
  const [img, setImg] = useState(
    "https://www.jiomart.com/images/product/600x600/490005239/kissan-pineapple-jam-500-g-product-images-o490005239-p490005239-1-202203151442.jpg"
  );

  const getSingleProductData = () => {
    axios
      .get(`http://localhost:4000/api/food/getfood/${id}`)
      .then((res) => {
        console.log("SingleProduct : ", res.data.food);
        setImg(res.data.food.photos[0]);
        setData(res.data.food);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSingleProductData();
  }, []);

  useEffect(() => {
    let exist = cart?.find((item) => {
      return item.product === id;
    });
    if (exist) {
      return setInCart(true);
    } else {
      return setInCart(false);
    }
  }, []);

  const AddToCart = () => {
    axios
      .post("http://localhost:4000/api/cart/addtocart", {
        user: user._id,
        product: id,
        quantity,
      })
      .then((res) => {
        console.log(res.data);
        cartDispatch({ type: "ADD_TO_CART", payload: res.data.cart });
        setInCart(true);
        // setInCart(true)
        // if(res.data.cart.product===id){
        //     return  setInCart(true)
        // }
        // else{
        //     return setInCart(false)
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Increment = () => {
    if (quantity < data.stock) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(data.stock);
    }
  };

  const Decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

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
          <Grid item xs={12} sm={15} lg={10}>
            <Box
              className="bigContainer"
              gap={4}
              alignItems="center"
              display="flex"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <Box className="wrapper">
                <Box
                  className="imgContainer"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                  }}
                >
                  <Box
                    className="sideImages"
                    sx={{
                      flexDirection: { xs: "row", lg: "column" },

                      display: "flex",
                      maxWidth: "150px",
                    }}
                    gap={2}
                    borderRadius="15px"
                    padding="20px"
                    bgcolor="#fcfcfc"
                  >
                    {data?.photos?.map((img) => {
                      return (
                        <img
                          style={{ width: "100%", cursor: "pointer" }}
                          key={img}
                          src={img}
                          onClick={() => setImg(img)}
                        />
                      );
                    })}
                  </Box>

                  <Box
                    borderRadius="15px"
                    padding="20px"
                    bgcolor="#fcfcfc"
                    className="rightImg"
                    marginLeft="1rem"
                    marginTop="4rem"
                    width="500px"
                    height="fit-content"
                  >
                    {data?.photos?.length > 0 && (
                      <img src={img} style={{ width: "100%" }} />
                    )}
                  </Box>
                </Box>
              </Box>

              {/* Product COntent */}
              <Box
                className="rightBox"
                marginRight={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                maxWidth="500px"
                height="fit-content"
                minHeight="650px"
              >
                <Typography
                  style={{ color: "#0c5273" }}
                  variant="subtitle1"
                  fontWeight={600}
                >
                  {data.name}
                </Typography>
                <Typography
                  paddingBottom={4}
                  borderBottom="1px solid #e0e0e0"
                  style={{ marginTop: "1.5rem" }}
                >
                  {data.desc}
                </Typography>
                <Box
                  className="content"
                  marginTop="2.5rem"
                  display="flex"
                  alignItems="center"
                >
                  <h1>₹{data.price}.00</h1>
                  <Typography
                    style={{
                      marginLeft: "1.5rem",
                      color: "#03753c",
                      fontSize: "1rem",
                      bgcolor: "#e5f7ee",
                    }}
                  >
                    {data.discount}% OFF
                  </Typography>
                </Box>
                <h2
                  style={{
                    paddingBottom: 20,
                    borderBottom: "1px solid #e0e0e0",
                    marginTop: "1rem",
                    color: "grey",
                  }}
                >
                  MRP :{" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      marginRight: "30px",
                      color: "grey",
                    }}
                  >
                    ₹{data.price + 200}.00
                  </span>
                  (Incl. of all taxes)
                </h2>
                <Box
                  className="lastContent"
                  marginTop="3rem"
                  paddingBottom={4}
                  borderBottom="1px solid #e0e0e0"
                >
                  <Typography variant="h5">Description</Typography>
                  <p style={{ fontSize: "18px" }}>{data.desc}</p>
                </Box>
                <Box className="counter" marginTop="1rem">
                  <button
                    onClick={() => Increment()}
                    className="incBtn btn"
                    style={{
                      backgroundColor: "#2ea8c7",
                      borderRadius: "5px",
                      padding: "7px",
                      margin: "10px",
                    }}
                  >
                    +
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    className="inp"
                    style={{
                      width: "40px",
                      padding: "10px",
                    }}
                  />
                  <button
                    onClick={() => Decrement()}
                    className="decBtn btn"
                    style={{
                      backgroundColor: "#2ea8c7",
                      borderRadius: "5px",
                      padding: "7px",
                      margin: "10px",
                    }}
                  >
                    -
                  </button>
                </Box>
                <button
                  className="btn_Cart"
                  style={{
                    marginTop: "2rem",
                    widh: "80%",
                    height: "50px",
                    borderRadius: "25px",
                    outline: "none",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "18px",
                    backgroundColor: "#0078ad",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#046380",
                    },
                  }}
                  onClick={() => AddToCart()}
                >
                  {inCart ? "Go to Cart" : "Add To cart"}
                </button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SingleProduct;
