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
    <h1 style={{textAlign:"center",marginTop:"1rem"}}>Our Trending Products</h1>
    <div style={{display:"flex",justifyContent:"center",flexDirection:"row",gap:"30px",marginTop:"1rem",marginLeft:"120px"}}>
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
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "10px",
                paddingX: "5px",
              }}
            >
              <Stack direction="column" gap={1} sx={{}}>
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
              </Stack>
              <Box
                px={1.5}
                py={0.5}
                borderRadius={1}
                bgcolor="#dadefa"
                height="fit-content"
              >
                <Typography fontSize={12} fontWeight={600} color="#475be8">
                  ${item.price}
                </Typography>
              </Box>
            </CardContent>
          </Card>
          )
        })}



    </div>
    </>
  )
}

export default Cards