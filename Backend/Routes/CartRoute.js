const express = require("express")
const router = express.Router()
const {getAllCartItem,AddToCart,getUserCart,removeCartItem,getCartById} = require("../Controllers/CartController")


router.get("/getallcarts",getAllCartItem )
router.get("/getusercart/:id",getUserCart )
router.get("/getcartbyid/:id",getCartById )
router.post("/addtocart",AddToCart )
router.delete("/removeitem/:id",removeCartItem )

module.exports = router;