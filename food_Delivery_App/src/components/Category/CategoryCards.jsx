import React from 'react'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));
  
  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });
  
  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  }));
  
  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor:"black",
    opacity: 0.4,
    borderRadius:"15px",
    // transition:all 0.3s
  }));
  
  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: "white",
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    // transition: all 0.3s,
  }));
  

const CategoryCards = () => {
  const navigate = useNavigate()
  return (
    <>
  <h1 style={{textAlign:"center",marginTop:"1rem"}}>Shop From Category</h1>
  <div style={{marginLeft:"150px",display: "flex", flexWrap: "wrap",justifyContent:"center",gap:"20px",marginTop:"1rem"}}>
    <Box
    sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "35%" }}
    onClick={()=>navigate(`/categorydata/${"Snacks"}`)}
    >
    <ImageButton
      focusRipple
      key="title"
      style={{
        width: "100%",
        borderRadius: "15px",
      }}
    >
      <ImageSrc
        style={{ backgroundImage:"url(https://www.themmgrocery.com/wp-content/uploads/2022/05/PC4-1.png)", borderRadius: "15px" }}
      />
      <ImageBackdrop className="MuiImageBackdrop-root" />
      <Image>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          sx={{
            position: "relative",
            p: 4,
            pt: 2,
            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
          }}
        >
          Snacks
          <ImageMarked className="MuiImageMarked-root" />
        </Typography>
      </Image>
    </ImageButton>
  </Box>

    <Box
    sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "35%" }}
    onClick={()=>navigate(`/categorydata/${"Tea"}`)}
  >
    <ImageButton
      focusRipple
      key="title"
      style={{
        width: "100%",
        borderRadius: "15px",
      }}
    >
      <ImageSrc
        style={{ backgroundImage:"url(https://www.jiomart.com/images/cms/aw_rbslider/slides/1677695036_Tea.jpg)", borderRadius: "15px" }}
      />
      <ImageBackdrop className="MuiImageBackdrop-root" />
      <Image>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          sx={{
            position: "relative",
            p: 4,
            pt: 2,
            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
          }}
        >
          Tea & Coffee
          <ImageMarked className="MuiImageMarked-root" />
        </Typography>
      </Image>
    </ImageButton>
  </Box>

    <Box
    sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "35%" }}
    onClick={()=>navigate(`/categorydata/${"ColdDinks"}`)}
  >
    <ImageButton
      focusRipple
      key="title"
      style={{
        width: "100%",
        borderRadius: "15px",
      }}
    >
      <ImageSrc
        style={{ backgroundImage:"url(https://www.jiomart.com/images/cms/aw_rbslider/slides/1679433911_Super_Savings_On_Summer_Coolers_Desktop.jpg)", borderRadius: "15px" }}
      />
      <ImageBackdrop className="MuiImageBackdrop-root" />
      <Image>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          sx={{
            position: "relative",
            p: 4,
            pt: 2,
            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
          }}
        >
          ColdDinks
          <ImageMarked className="MuiImageMarked-root" />
        </Typography>
      </Image>
    </ImageButton>
  </Box>

    <Box
    sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "35%" }}
    onClick={()=>navigate(`/categorydata/${"Breakfast"}`)}
    
  >
    <ImageButton
      focusRipple
      key="title"
      style={{
        width: "100%",
        borderRadius: "15px",
      }}
    >
      <ImageSrc
        style={{ backgroundImage:"url(https://www.jiomart.com/images/cms/aw_rbslider/slides/1679480481_Breakfast_Mela_Desktop.jpg)", borderRadius: "15px" }}
      />
      <ImageBackdrop className="MuiImageBackdrop-root" />
      <Image>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          sx={{
            position: "relative",
            p: 4,
            pt: 2,
            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
          }}
        >
          Breakfast
          <ImageMarked className="MuiImageMarked-root" />
        </Typography>
      </Image>
    </ImageButton>
  </Box>


  


  

 
  

  
  </div>
  </>
  )
}

export default CategoryCards