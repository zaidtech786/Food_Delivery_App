const express = require("express")
const router = express.Router()
const {getAllCartItem,AddToCart,getUserCart,removeCartItem} = require("../Controllers/CartController")


router.get("/getallcarts",getAllCartItem )
router.get("/getusercart/:id",getUserCart )
router.post("/addtocart",AddToCart )
router.delete("/removeitem/:id",removeCartItem )

module.exports = router;