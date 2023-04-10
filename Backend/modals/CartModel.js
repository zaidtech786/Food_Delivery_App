const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"Food"
    },
    quantity:{
        type:Number,
        required:true
    },
   
},
{
    timestamps:true
});

const cartModel = mongoose.model("cart",CartSchema);
module.exports = cartModel