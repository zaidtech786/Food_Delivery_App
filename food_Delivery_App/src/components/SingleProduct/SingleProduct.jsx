import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./single.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../Context/AppContext";
import { CartContext } from "../../Context/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const { dispatch, user } = useContext(AppContext);
  const { cartDispatch, cart } = useContext(CartContext);
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);
  const [img, setImg] = useState(
    "https://www.jiomart.com/images/product/600x600/490005239/kissan-pineapple-jam-500-g-product-images-o490005239-p490005239-1-202203151442.jpg"
  );
  const navigate = useNavigate();

  const getSingleProductData = () => {
    axios
      .get(`http://localhost:4000/api/food/getfood/${id}`)
      .then((res) => {
        console.log("SingleProduct : ", res.data.food);
        setImg(res.data.food.photos[0]);
        setData(res.data.food);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("user", user._id);
    getSingleProductData();
  }, []);

  useEffect(() => {
    let exist = cart?.find((item) => {
      return item.product._id === id;
    });
    if (exist) {
      return setInCart(true);
    } else {
      return setInCart(false);
    }
  }, []);

  const AddToCart = () => {
    axios
      .post("http://localhost:4000/api/cart/addtocart", {
        user: user._id,
        product: id,
        quantity,
      })
      .then((res) => {
        console.log(res.data.cart);
        axios
          .get(
            `http://localhost:4000/api/cart/getcartbyid/${res.data.cart._id}`
          )
          .then((res) => {
            console.log("Populate Data : ", res.data);
            cartDispatch({ type: "ADD_TO_CART", payload: res.data.cart });
          });
        setInCart(true);
        // setInCart(true)
        // if(res.data.cart.product===id){
        //     return  setInCart(true)
        // }
        // else{
        //     return setInCart(false)
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Increment = () => {
    if (quantity < data.stock) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(data.stock);
    }
  };

  const Decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      {/* <h2 style={{marginLeft:"300px",marginTop:"50px"}}>{data.name}</h2> */}
      <div className="bigContainer">
        <div className="wrapper">
          <div className="imgContainer">
            <div className="sideImages">
              {data?.photos?.map((img) => {
                return <img key={img} src={img} onClick={() => setImg(img)} />;
              })}
            </div>

            <div className="rightImg">
              {data?.photos?.length > 0 && <img src={img} />}
            </div>
          </div>
        </div>

        {/* Product COntent */}
        <div className="rightBox">
          <h3 style={{ color: "#0c5273" }}>{data.name}</h3>
          <h2 style={{ marginTop: "1.5rem" }}>{data.desc}</h2>
          <div className="content">
            <h1>₹{data.price}.00</h1>
            <h3
              style={{
                marginLeft: "1.5rem",
                color: "green",
                fontSize: "1.5rem",
              }}
            >
              {data.discount}% OFF
            </h3>
          </div>
          <h2 style={{ marginTop: "1rem", color: "grey" }}>
            MRP :{" "}
            <span
              style={{
                textDecoration: "line-through",
                marginRight: "30px",
                color: "grey",
              }}
            >
              ₹{data.price + 200}.00
            </span>
            (Incl. of all taxes)
          </h2>
          <div className="lastContent">
            <h1>Description</h1>
            <p style={{ fontSize: "18px" }}>{data.desc}</p>
          </div>
          <div className="counter">
            <button onClick={() => Increment()} className="incBtn btn">
              +
            </button>
            <input type="number" value={quantity} className="inp" />
            <button onClick={() => Decrement()} className="decBtn btn">
              -
            </button>
          </div>
          {
            inCart 
            ? 
             <button className="btn_Cart" onClick={() => navigate("/cartitems")}>
              Go to Cart  
          </button>
          :
          <button className="btn_Cart" onClick={() => AddToCart()}>
           Add To cart
          </button>
          }
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
