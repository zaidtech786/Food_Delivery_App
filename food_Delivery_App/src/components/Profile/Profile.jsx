import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar';
import { AppContext } from '../../Context/AppContext';
import axios from 'axios';
import Grid from "@mui/material/Grid";

const Profile = () => {
  const {user} = useContext(AppContext)
  const [userData,setUserData] = useState()
  const getUserData = () => {
    axios.get(`http://localhost:4000/api/getuser/${user._id}`)
    .then(res => {
      console.log(res.data.user)
      setUserData(res.data.user)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect( () => {
    getUserData()
  },[])
  return (
    <>
    <Box bgcolor="#e0e0e0" color="text.primary" style={{ minHeight: '100vh'}}>
        <Header />
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3} md={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10.5} sm={9} lg={9.5}>
          <Box
        display="flex"
        sx={{
          flexDirection: "column",
        }}
        alignItems='center'      >
        <Stack>
          <Typography fontSize="28px" fontWeight={600} color="#11142d" marginTop={2}>
            My Profile
          </Typography>
        </Stack>
        <Box
          display="flex"
          sx={{
            flexDirection: { lg: "row", xs: "column" },
          }}
          gap={4}
        >
          <Box
            display="flex"
            bgcolor="#fcfcfc"
            height="27rem"
            borderRadius="15px"
            flexDirection="column"
            alignItems="center"
            padding="20px"
            mt="25px"
            sx={{
              "&:hover": {
                boxShadow: "0px 4px 16px rgba(0,0,0,.08)",
              },
              cursor: "pointer",
              width: { lg: "35%", xs: "100%" },
            }}
            gap={8}
          >
        
            <Avatar
              src=""
              sx={{
                cursor: "pointer",
                width: {
                  xs: 250,
                  md: 280,
                },
                height: {
                  xs: 250,
                  md: 280,
                },
              }}
              alt={userData?.name}
            />
            
            <Button
              variant="outlined"
              size="large"
              sx={{
                width: "20rem",
                height: "3rem",
                color: "#B53471",
                borderColor: "#B53471",
                "&:hover": {
                  borderColor: "#B53471",
                },
              }}
              
            //   onClick={() => showEditDrawer()}
            >Edit</Button>
          </Box>

          <Box
            display="flex"
            bgcolor="#fcfcfc"
            height="27rem"
            borderRadius="15px"
            padding="20px"
            mt="25px"
            width="100%"
            flexDirection="column"
            sx={{
              "&:hover": {
                boxShadow: "0px 4px 16px rgba(0,0,0,.08)",
              },
              cursor: "pointer",
            }}
            gap={4}
          >
            <Stack
              display="flex"
              width="100%"
              gap={1}
              flexDirection="row"
              height="fit-content"
            >
              
                
              <Typography fontSize="22px" fontWeight={600} color="#11142d">
                {userData?.name}
              </Typography>
              
              {/* { user?.gender && 

              <Typography variant="caption" color="rgb(128, 129, 145)">
                ( {user.gender}
              </Typography>
              } */}
              <Typography variant="caption" color="rgb(128, 129, 145)">
                ( Male / Female )
              </Typography>
            </Stack>
            <Box
              sx={{
                flexDirection: { lg: "row", xs: "column" },
              }}
            >
              <Box
                display="flex"
                gap={2}
                flexDirection="row"
                alignItems="center"
              >
                <LocationOnIcon />
                <Typography
                  fontSize="15px"
                  fontWeight={500}
                  color="rgb(128, 129, 145)"
                >
                  {userData?.address}
                </Typography>
              </Box>
              <Box mt={2}>
                
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Mollitia obcaecati voluptatem pariatur porro rerum. Eligendi
                  quis ipsa perspiciatis, perferendis, nobis recusandae impedit
                  nesciunt beatae corrupti sed non libero culpa laborum!
                </Typography>
              </Box>
            </Box>
            <Box
              display="felx"
              sx={{
                flexDirection: { lg: "row", xs: "column" },
              }}
            >
              <Box display="flex" flexDirection="column">
                <Typography
                  fontSize="15px"
                  fontWeight={500}
                  color="rgb(128, 129, 145)"
                >
                 Phone Number
                </Typography>
                <Box mt={2} display="flex" flexDirection="row" gap={2}>
                  <PhoneIcon />
                  <Typography>{userData?.phone}</Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" mt={6}>
                <Typography
                  fontSize="15px"
                  fontWeight={500}
                  color="rgb(128, 129, 145)"
                >
                  Email
                </Typography>
                <Box mt={2} display="flex" flexDirection="row" gap={2}>
                  <MailIcon />
                  {userData?.email}

                  {/* <Typography>{userData?.email}</Typography> */}
                  
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
          </Grid>
        </Grid>
      </Box>
       
     
    </>
  )
}

export default Profile