const express = require("express");
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors())
const dotenv = require("dotenv")
dotenv.config();
const bodyParser=require('body-parser');
app.use(bodyParser.json())

app.listen(process.env.PORT ,() => {
    console.log(`Server Started on PORT ${process.env.PORT}`)
})


// Importing Routes
const user = require("./Routes/userRoute")
app.use("/api",user);
const Food = require("./Routes/FoodRoute")
app.use("/api/food",Food);
const orders = require("./Routes/OrderRoute")
app.use("/api/order",orders)
const cart = require("./Routes/CartRoute")
app.use("/api/cart",cart)


// MongoDb Connection
const conn = require("./Database/Database");




