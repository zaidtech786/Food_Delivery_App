const express = require("express")
const router = express.Router();
const {userRegistration,userLogin,getAllUsers,getUserById,removeUser,updateUser,addToCart,getAllCartItems} = require("../Controllers/userController")
 
router.post("/usersignup",userRegistration)
router.post("/userlogin",userLogin)
router.get("/getusers",getAllUsers)
router.get("/getuser/:id",getUserById)
router.delete("/removeuser/:id",removeUser);
router.put("/updateuser/:id",updateUser);
router.put("/addtocart/:id",addToCart);
router.get("/getallcarts",getAllCartItems);

module.exports = router;