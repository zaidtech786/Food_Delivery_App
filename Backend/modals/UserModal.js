const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    city:{
        type:String,
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    },
    cart:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Food"
        }
    ],
    isAdmin : {
        type:Boolean,
        default:false
    },
},

{
    timestamps:true
})
const userModel = new mongoose.model("user",userSchema);
module.exports = userModel;