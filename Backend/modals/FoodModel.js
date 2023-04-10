const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        // required:true
    },
    photos:{
        type:[String],
        required:true
    },
    category:{
        type:String,
        required:true
    },
    varieties:{
        type:[String]
    },
    stock:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
});

const FoodModel = new mongoose.model("Food",foodSchema)
module.exports = FoodModel