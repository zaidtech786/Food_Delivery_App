const Food = require("../modals/FoodModel")

const addFoods = async(req,res) => {
    const {name,desc,price,photos,varieties,category} = req.body;
let foods; 
foods = new Food({
    name,
    desc,
    price,
    photos,
    varieties,
    category
});

try {
    await foods.save()
} catch (error) {
    console.log(error)
}
res.send({foods})
}


// get all the Foods
const getAllFoods = async(req,res) => {
    let foods;
    try {
         foods = await Food.find({})
    } catch (error) {
        console.log(error)
    }
    if(foods){
        return res.send({foods})
    }
    return res.send({message:"Unable to fetch foods details"})
}

// Getting Individual Food
const getFoodById = async(req,res) => {
    const {id}= req.params
    let food;
    try {
         food = await Food.findById(id)
    } catch (error) {
        console.log(error)
    }
    if(food){
        return res.send({food})
    }
    return res.send({message:"Unable to fetch individual food details"})
}

// Remove Food
const removeFood = async(req,res) => {
    const {id} = req.params
    let food;
    try {
        food = await Food.findByIdAndRemove(id)    
    } catch (error) {
        console.log(error)
    }
    if(food){
        return res.send({message:"food Deleted Successfully",food})
    }
    return res.send({message:"Unable to delete the food"})
}

// Update Food
const UpdateFood = async(req,res) => {
    const {id} = req.params
    let food;
    try {
        food = await Food.findByIdAndUpdate(id,{
            $set:req.body
        },{
            new:true
        })    
        return res.send({message:"food Updated Successfully",food})
    } catch (error) {
        console.log(error)
    }
}

// Get Food by category
const findFoodByCat = async(req,res) => {
    let food;
    try {
        food = await Food.find({category:req.params.cat})
    } catch (error) {
        console.log(error)
    }
    if(food){
        return res.send({food})
    }
    return res.send({msg:"Unable to fetch the food"})
}
// Get Featured Food
const FeaturedFood = async(req,res) => {
    let food;
    try {
        food = await Food.find({isFeatured:true})
    } catch (error) {
        console.log(error)
    }
    if(food){
        return res.send({food})
    }
    return res.send({msg:"Unable to fetch the food"})
}



exports.addFoods = addFoods;
exports.getAllFoods = getAllFoods;
exports.getFoodById = getFoodById;
exports.removeFood = removeFood;
exports.UpdateFood = UpdateFood;
exports.findFoodByCat = findFoodByCat;
exports.FeaturedFood = FeaturedFood;