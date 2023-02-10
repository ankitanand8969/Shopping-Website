import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux-toolkit/features/cartSlice";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    //let element = cart.find((item) => item.id === props.productDetail.id);
    // if (!element) {
    //   dispatch(addToCart(props.productDetail));
    //   NotificationManager.success(
    //     "Your Item Is Added to Your Cart",
    //     "Thank You"
    //   );
    // } else {
    //   NotificationManager.info("This Item is already in your cart");
    // }

    fetch("http://192.168.6.185:5000/products/cart", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `http://192.168.6.185:5000/products/${id}`
      ).then((response) => response.json());
      setProduct(await response.data);
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">Loading...</div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        {product.map((product) => {
          return (
            <>
              <div className="col-md-6" key={product._id}>
                <img
                  src={product.image}
                  alt={product.title}
                  height="400px"
                  width="400px"
                />
              </div>
              <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                  {product.category}
                </h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bolder">
                  Rating {product.rating && product.rating.rate}
                  <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                <p className="lead">{product.description}</p>
                <button
                  className="btn btn-outline-dark px-4 py-2"
                  onClick={() => addProduct(product)}
                >
                  Add To Cart
                </button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                  Go To Cart
                </NavLink>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
