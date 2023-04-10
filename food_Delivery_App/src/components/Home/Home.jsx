import { Box, Stack, Skeleton, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./home.css";
import Carousel from "../Carousel/Carousel";
import Cards from "../Cards/Cards"
import RamadanCard from "../RamadanCard/RamadanCard";
import CategoryCards from './../Category/CategoryCards';
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar';

const Feed = () => {
  const [count, setCount] = useState(0);
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
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <div
            className="sliderContainer"
            onMouseOver={() => setMousedOver(true)}
            onMouseOut={() => setMousedOver(false)}
          >
            <img src={img[count]} />
          </div>
        </Stack>
        <Box>
          <Carousel />
          <Cards />
          <RamadanCard />
          <CategoryCards />
        </Box>
      </Box>
    </>
  );
};

export default Feed;
