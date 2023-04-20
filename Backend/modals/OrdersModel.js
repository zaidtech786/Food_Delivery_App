const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    product:[{
        type:mongoose.Types.ObjectId,
        ref:"Food"
    }],
    quantity:{
        type:Number,
        // required:true
    },
    isDelivered: {type: Boolean, default:false},
    deliveredAt: {type: Date},
    itemsPrice: {type: Number, required: true},
},
{
    timestamps:true
});

const orderModel = mongoose.model("order",OrderSchema);
module.exports = orderModel