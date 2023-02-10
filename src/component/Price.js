import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



const Price = (props) => {
  const totalAmounts = useSelector((state)=>(state.cart.total))
  const dispatch = useDispatch()


  let totalAmount = 0;

  // for(let i = 0 ; i < totalAmounts.length ; i++){
  //   totalAmount += totalAmounts[i]
  // }

  const sum = props.sum
  

  console.log(sum);


 

  return (
    <div>
      <div className="conatiner p-3">
        <div className="row border border-primary text-center">
          <h2>Order Summery</h2>
        </div>
        {/* <div className="row border border-primary">
          <h2>Products----->$10 </h2>
          <h2>Shipping------>Gratis</h2>
        </div> */}
        <h2>Total Amount: {sum}</h2>
        <p>(including GST)</p>
        <button type="button" className="btn btn-outline-primary">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default Price;
