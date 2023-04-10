import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
  } from "@mui/icons-material";
  import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
  } from "@mui/material";
  import React from "react";
  import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  import {Link} from "react-router-dom"
  
  const Sidebar = ({mode,setMode}) => {
    return (
      <Box flex={1}  sx={{ display: { xs: "none", sm: "block"}, }}>
        {/* sx={{backgroundColor:"red"}} */}
        <Box position="fixed" sx={{backgroundColor:"#74b9ff",marginTop:"0px",padding:"20px",height:"100%",lineHeight:"80px",width:"10%"}}  >
          <List>
           
            <ListItem disablePadding >
            <Link to="/home" style={{textDecoration:"none",color:"#000"}}>
              <ListItemButton component="a" href="#home" >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            </ListItem>

            <ListItem disablePadding >
            <Link to="/products" style={{textDecoration:"none",color:"#000"}}>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <ShoppingBagIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding >
              <Link to="/orders" style={{textDecoration:"none",color:"#000"}}>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>
              </Link>
            </ListItem>

             <ListItem disablePadding>
             <Link to="/profile" style={{textDecoration:"none",color:"#000"}}>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
              </Link>
            </ListItem>
            
            {/* <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>  */}
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };
  
  export default Sidebar;