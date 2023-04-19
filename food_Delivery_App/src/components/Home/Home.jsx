import { Box, Stack, Skeleton, Card } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import Carousel from "../Carousel/Carousel";
import Cards from "../Cards/Cards";
import RamadanCard from "../RamadanCard/RamadanCard";
import CategoryCards from "./../Category/CategoryCards";
import Header from "./../Header/Header";
import Sidebar from "./../Sidebar/Sidebar";
import { AppContext } from "../../Context/AppContext";
import Grid from "@mui/material/Grid";
const Feed = () => {
  const [count, setCount] = useState(0);
  const { icon } = useContext(AppContext);
  const [mousedOver, setMousedOver] = useState(false);
  const img = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1680879326_MUMBAI.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1680704517_Web_Mumbai_PremiumFruits.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1680805040_Stock_Up_Your_Grocery_Favourites_Masalas_Spices_desktop.jpg",
  ];
  //

  useEffect(() => {
    if (mousedOver) {
      const timer = setInterval(() => {
        setCount((prevCount) => (prevCount + 1) % img.length);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [mousedOver]);
  return (
    <>
      <Box bgcolor="#e0e0e0" color="text.primary">
        <Header />
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3} md={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={9} lg={9.5}>
            <Box
              className="sliderContainer"
              onMouseOver={() => setMousedOver(true)}
              onMouseOut={() => setMousedOver(false)}
            >
              <img src={img[count]} />
            </Box>
            <Carousel />
            <Cards />
            <RamadanCard />
            <CategoryCards />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Feed;
