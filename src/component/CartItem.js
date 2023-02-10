import { useSelector, useDispatch } from "react-redux";
//import totalSum from '../redux-toolkit/features/cartSlice'

import { useEffect, useState } from "react";

const CartItem = (props) => {
  const cartItem = props.Item;
  const [num, setNum] = useState(1);

  const id = cartItem._id;

  function handleIncrement() {
    if (num >= 1) {
      setNum(num + 1);
    }
  }
  function handleDecrement() {
    if (num == 1) {
      setNum(1);
    } else {
      setNum(num - 1);
    }
  }

  props.totalitem(num)
  
  const handleRemove = () => {
    fetch(`http://192.168.6.185:5000/products/cart/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Delete successful");
    });
  };
  

  return (
    <>
      <div class="col-md-12">
        <ul class="list-group">
          <li class="list-group-item mt-2 mb-2 h-20">
            <div className="row">
              <div className="col-md-3 p-3 m-2">
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  height="180px"
                  width="180px"
                />
              </div>
              <div className="col-md-5 p-4  m-2">
                <div className="col-md-4  d-inline">
                  <h1>{cartItem.category}</h1>
                  <h4>
                    <b>
                      price: <span>${cartItem.price}</span>
                    </b>
                  </h4>
                </div>
              </div>
              <div className="col-md-3 p-2 m-2 ">
                <button
                  type="button"
                  class="btn btn-warning "
                  onClick={handleDecrement}
                >
                  -
                </button>
                <span>
                  Quantity <b>{num}</b>
                </span>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={handleIncrement}
                >
                  +
                </button>
                <button
                  type="button"
                  class="btn btn-danger mt-5"
                  onClick={handleRemove}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CartItem;
