
const express = require("express")
const router = express.Router();
const {getOrders,orderItems,getUserOrder,deleteOrder,getAdminStatus} = require("../Controllers/OrdersControllers")

router.get("/getorders",getOrders);
router.post("/orderitems",orderItems);
router.get("/userorder/:id",getUserOrder);
router.delete("/cancelorder/:id",deleteOrder);
router.put("/adminstatus/:id",getAdminStatus);

module.exports = router