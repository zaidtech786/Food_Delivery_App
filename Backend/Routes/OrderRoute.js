
const express = require("express")
const router = express.Router();
const {getOrders,orderItems,getUserOrder} = require("../Controllers/OrdersControllers")

router.get("/getorders",getOrders);
router.post("/orderitems",orderItems);
router.get("/userorder/:id",getUserOrder);

module.exports = router