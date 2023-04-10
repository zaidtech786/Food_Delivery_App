const cartModel = require("../modals/CartModel");


const AddToCart = async(req,res) => {
    const { user,  product,  quantity} = req.body
    const cart = new cartModel({
        user,
        product,
        quantity
    })
    try {
        await cart.save()
    } catch (error) {
        console.log(error)
    }
    res.send({cart})
}

const getAllCartItem = async (req,res) => {
    let cart;
    try {
        cart = await cartModel.find({})
    } catch (error) {
        console.log(error)
    }
    res.send({cart})
}

// getcartItems By Userod
const getUserCart = async(req,res) => {
    let cart;
    try {
        cart = await cartModel.find({user:req.params.id}).populate("user product")
    } catch (error) {
        console.log(error)
    }
    res.send({cart})

}

const removeCartItem = async(req,res) => {
    const {id} = req.params
    let cart;
    try {
        cart = await cartModel.findByIdAndRemove(id)    
    } catch (error) {
        console.log(error)
    }
    if(cart){
        return res.send({message:"cart Deleted Successfully",cart})
    }
    return res.send({message:"Unable to delete the cart"})
}


exports.AddToCart = AddToCart
exports.getAllCartItem = getAllCartItem
exports.getUserCart = getUserCart
exports.removeCartItem = removeCartItem