import "./Cart.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import Price from "./Price";
import { useEffect } from "react";

const Cart = () => {
  //const state = useSelector((state) => state.cart.cartItems);
  // const dispatch = useDispatch();
  const [item, setItem] = useState([]);

  const [noofitem, setNoOfitem] = useState(1);



  //console.log("Total item",item)

  let sum = 0;


  // let arr=[];
 
  // item.forEach(element => {
  //    arr.push(element.updatedPrice);
    
  // });

  // let sum=0;
  // for (let i = 0; i <  arr.length; i += 1) {
  //     sum +=arr[i];
  //   }


  
 

  //
  useEffect(() => {
    const getItem = async () => {
      const response = await fetch(
        "http://192.168.6.185:5000/products/cart"
      ).then((response) => response.json());
      setItem(response.data);
    };
    getItem();
  }, []);

  return (
    <>
      <div className="container border border-primary  ">
        <div className="row text-center border border-primary m-2 bg-secondary">
          <h2>Cart {item.length} items</h2>
        </div>
        <div className="row">
          <div className="col-md-8 ">
            {item.map((cartItem) => {
              sum += cartItem.price*noofitem;
              return (
                <>
                {/* {console.log(sum)} */}
                <CartItem Item={cartItem} totalitem={setNoOfitem} />
                </>
              );
            })}
          </div>
          <div className="col-md-4  border border-primary h-50">
            <Price sum = {sum}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
