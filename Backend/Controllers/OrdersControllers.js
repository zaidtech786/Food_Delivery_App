const Orders = require("../modals/OrdersModel");

// Getting All the orders
const getOrders = async(req,res) => {
   let orders;
   try {
    orders = await Orders.find({}).populate("user product")
   } catch (error) {
    console.log(error)
   }
   res.send({orders})
}

// Add Orders
const orderItems = async(req,res) => {
    let newOrder = new Orders(req.body);
    try {
        await newOrder.save()
    } catch (error) {
        console.log(error)
    }
    res.send({newOrder})
}

// Orders Based on Id
const getUserOrder = async(req,res) => {
    let userOrder
    try {
        userOrder = await Orders.find({user:req.params.id}).populate("product")
    } catch (error) {
        console.log(error)
    }
    if(userOrder){
       return res.send({userOrder})
    }
    return res.send({msg:"Not orders yet!!"})
}

// delete Order
const deleteOrder = async(req,res) => {
    let order;
    try {
        order = await Orders.findByIdAndDelete(req.params.id)
    } catch (error) {
        console.log(error);
    }
    if(order){
       return res.send({order})
    }
    return res.send({error:"Unable to delete the order"})

}




exports.orderItems = orderItems;
exports.getOrders = getOrders;
exports.getUserOrder = getUserOrder;
exports.deleteOrder = deleteOrder;