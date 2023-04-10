const express = require("express")
const router = express.Router()
const {addFoods,getAllFoods,getFoodById,removeFood,UpdateFood,findFoodByCat,FeaturedFood} = require("../Controllers/FoodController")

router.post("/addfoods", addFoods)
router.get("/getallfoods", getAllFoods)
router.get("/getfood/:id", getFoodById)
router.put("/updatefood/:id", UpdateFood)
router.delete("/removefood/:id", removeFood)
router.get("/findbycat/:cat", findFoodByCat)
router.get("/getFeatured", FeaturedFood)
module.exports = router;