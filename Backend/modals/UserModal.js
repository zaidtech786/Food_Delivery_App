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