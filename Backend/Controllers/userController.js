const User = require("../modals/UserModal");
const bcrypt = require("bcrypt");

// User Signup
const userRegistration = async (req, res) => {
  const { name, password, email } = req.body;
  let existingUser;
  let hashPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    name,
    password: hashPassword,
    email,
  });
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    console.log(error);
  }
  if (existingUser) {
    return res.send("User Already registered");
  }

  try {
    await newUser.save();
  } catch (err) {
    console.log(err);
  }
  res.send({ msg: "Signup successfully", newUser });
};

// login user
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      res.send({ message: "Login Successfully", user });
    } else {
      res.send({ error: "Password is not correct" });
    }
  } else {
    return res.send({ error: "user not found" });
  }
};

// get all the users
const getAllUsers = async (req, res) => {
  let users;
  try {
    users = await User.find({})
  } catch (error) {
    console.log(error);
  }
  if (users) {
    return res.send({ users });
  }
  return res.send({ message: "Unable to fetch users details" });
};

// Getting Individual user
const getUserById = async (req, res) => {
  const { id } = req.params;
  let user;
  try {
    user = await User.findById(id).populate("cart")
  } catch (error) {
    console.log(error);
  }
  if (user) {
    return res.send({ user });
  }
  return res.send({ message: "Unable to fetch individual user details" });
};

// Remove User
const removeUser = async (req, res) => {
  const { id } = req.params;
  let user;
  try {
    user = await User.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (user) {
    return res.send({ message: "user Deleted Successfully", user });
  }
  return res.send({ message: "Unable to delete the user" });
};

// updateUser
const updateUser = async (req, res) => {
  let user;
  try {
    user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.send({ user });
  } catch (error) {
    console.log(error);
  }
};

// Add to Cart 
const addToCart = async(req,res) => {
    let user;
    try {
        user = await User.findByIdAndUpdate(req.params.id,{
            $push:{cart:req.body.foodId},
        },{
            new:true
        })
        return res.send({msg:"Added to cart Successfully",user})
    } catch (error) {
        console.log(error)
        
    }
}

// gets all the Cart Items
const getAllCartItems = async(req,res) => {
    let cart;
    try {
        cart = await User.find({}).populate("cart")
    } catch (error) {
        console.log(error)
    }
    res.send({cart})
}

exports.userRegistration = userRegistration;
exports.userLogin = userLogin;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.removeUser = removeUser;
exports.updateUser = updateUser;
exports.addToCart = addToCart;
exports.getAllCartItems = getAllCartItems;
