import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import DeleteIcon from "@mui/icons-material/Delete";
import "./OrdersLists.css";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";

const OrderList = () => {
  const { user } = useContext(AppContext);
  const [data, setData] = useState([]);

  const getUserOrders = () => {
    axios
      .get(`http://localhost:4000/api/order/userorder/${user._id}`)
      .then((res) => {
        console.log(res.data.userOrder);
        setData(res.data.userOrder);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUserOrders();
  }, []);

  const CancelOrder = (id) => {
    console.log(id);
    axios.delete(`http://localhost:4000/api/order/cancelorder/${id}`)
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
    let filterData = data.filter((item) => {
      return item._id !== id;
    });
    console.log("filterData",filterData);
    setData(filterData)
    // cartDispatch({ type: "SET_DATA", payload: filterData });
  }

  return (
    <>
      <Header />
      <Sidebar />
      <h2 style={{ marginLeft: "15rem", marginTop: "3rem" }}>
        Your Orders History
      </h2>
      <div className="orderContainer">
        {data.map((order) => {
          // console.log(order.product[1]);
          return (
            <>
              <div className="order">
                <div className="contentOrder">
                  {order.product.map((item) => {
                    return (
                      <>
                      {
                        item.photos.length > 0
                        &&  <img src={item.photos[0]} />
                      }
                       
                        <div className="itemContent">
                          <h3>{item.name}</h3>
                          <h2>{item.desc}</h2>
                          <hr />
                        </div>
                      </>
                    );
                  })}

                  <div className="address">
                    <span>Delivered to:</span>
                    <h3>{user.address}</h3>
                  </div>
                  <div className="status">
                    <span>Delivery Status</span>
                    <h3 style={{ color: "red" }}>Pending</h3>
                  </div>
                  <div className="cancelBtn">
                    <button onClick={() => CancelOrder(order._id)}> Cancel Order</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default OrderList;
