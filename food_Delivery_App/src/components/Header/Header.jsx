import { Mail, Notifications, Pets } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { CartContext } from "../../Context/CartContext";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


const Header = () => {
  const [open, setOpen] = useState(false);
  const {cart} = useContext(CartContext)
  const navigate = useNavigate()
  const {dispatch} = useContext(AppContext)
  const Logout = () => {
    dispatch({type:"LOGOUT"});
  }
  return (
    <AppBar position="sticky" >
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Faayda Bazaar
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        {/* <Search>
          <InputBase placeholder="search..." />
        </Search> */}
        <Icons>
          <Badge badgeContent={cart?.length} color="error" sx={{cursor:"pointer"}}>
            <Link to="/cartitems" style={{color:"white"}}>
            <ShoppingCartIcon />
            </Link>
          </Badge>
          {/* <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge> */}
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <Link to="/login" style={{color:"black",textDecoration:"none"}}><MenuItem  onClick={()=>Logout()}>Logout</MenuItem></Link>
      </Menu>
    </AppBar>
  );
};

export default Header;
