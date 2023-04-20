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
  import React, { useContext } from "react";
  import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  import {Link} from "react-router-dom"
  import "./Sidebar.css"
import { AppContext } from "../../Context/AppContext";
import { CartContext } from "../../Context/CartContext";
  
  const Sidebar = () => {
    const {setIcon,icon} = useContext(AppContext)
    const {cartDispatch} = useContext(CartContext)
    return (
      <Box flex={1}  sx={{ display: { xs: "none", sm: "block"}, }}>
        {/* sx={{backgroundColor:"red"}} */}
        <Box position="fixed" sx={{backgroundColor:"#B53471",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"10px",marginTop:"0px",height:"100%",lineHeight:"80px",width:"12%"}}  >
          <List >
           
            <ListItem disablePadding className={icon==="home" ? "icon" : ""}>
            <Link to="/" style={{textDecoration:"none",color:"#fff"}} onClick={()=>setIcon("home")}>
              <ListItemButton component="a" >
                <ListItemIcon>
                  <Home sx={{ color:"white"}} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            </ListItem>

            <ListItem disablePadding className={icon==="products" ? "icon" : ""} >
            <Link to="/products" style={{textDecoration:"none",color:"#fff"}} onClick={()=>setIcon("products")} >
              <ListItemButton component="a" >
                <ListItemIcon>
                  <ShoppingBagIcon sx={{ color:"white"}} />
                </ListItemIcon>
                <ListItemText primary="Products" color="white" />
              </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding className={icon==="orders" ? "icon" : ""} >
              <Link to="/orders" style={{textDecoration:"none",color:"#fff"}} onClick={()=>setIcon("orders")}>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <ShoppingCartIcon sx={{ color:"white"}}/>
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>
              </Link>
            </ListItem>

             <ListItem disablePadding className={icon==="profile" ? "icon" : ""} >
             <Link to="/profile" style={{textDecoration:"none",color:"#fff"}} onClick={()=>setIcon("profile")}>
              <ListItemButton component="a" href="#simple-list" >
                <ListItemIcon>
                <AccountBox sx={{ color:"white"}}/>
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
                <Switch onClick={()=>cartDispatch({type:"DARK_MODE_ON",payload:true})}/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };
  
  export default Sidebar;