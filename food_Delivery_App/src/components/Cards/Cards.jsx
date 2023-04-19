import { Place } from "@mui/icons-material";
// import { Link } from "@refinedev/react-router-v6";
import {
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
// import { Link } from "react-router-dom";
import  axios from 'axios';
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);

  const getFeaturedFood = () => {
    axios
      .get("http://localhost:4000/api/food/getFeatured")
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


{/* <Card
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
  image={<Skeleton/>}
  alt="card Image"
  sx={{
    borderRadius: "10px",
  }}
/>
<CardContent
  sx={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "10px",
    paddingX: "5px",
  }}
>
 
  <Stack direction="column" gap={1} sx={{}}>
    <Typography fontSize={16} fontWeight={500} color="#11142d">
    <Skeleton/>
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
      <Skeleton/>
      </Typography>
    </Box>
  </Stack>
  <Box
    px={1.5}
    py={0.5}
    borderRadius={1}
    bgcolor="#dadefa"
    height="fit-content"
  >
    <Typography fontSize={12} fontWeight={600} color="#475be8">
    <Skeleton/>
    </Typography>
  </Box>
</CardContent>
</Card> */}
<Box
   flex={1}
   borderRadius="15px"
   padding="20px"
   bgcolor="#fcfcfc"
   minWidth="100%"
   mt="25px"

>

    <Typography style={{textAlign:"center",marginTop:"1rem"}} fontSize={40} fontWeight={700}>Our Trending Products</Typography>
    <Box style={{display:"flex",justifyContent:"center",flexDirection:"row",gap:"30px",marginTop:"1rem"}} flexWrap='wrap' >
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
              {/* <Stack direction="column" gap={1} sx={{}}> */}
              
              {/* </Stack> */}
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



    </Box>
    </Box>
    </>
  )
}

export default Cards


