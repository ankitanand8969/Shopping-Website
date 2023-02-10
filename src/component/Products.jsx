import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { API } from "./Api";
// import axios from "axios";
//import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);

      //const response = await fetch("https://fakestoreapi.com/products");
      const response = await fetch(API).then((response) => response.json());

      // if (componentMounted) {
      //   setData(await response.clone().json());
      //   setFilter(await response.json());
      //   setLoading(false);
      // }
      if (componentMounted) {
        setData(response.data);
        setFilter(response.data);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          {/* <Skeleton height={350}/> */}
          Loading...
        </div>
      </>
    );
  };

  const filterProduct = (cate) => {
    const updatedList = data.filter((val) => val.category === cate);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewellery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4" key={product._id}>
              <div className="card h-100 text-center p-4">
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 29)}...
                  </h5>
                  <p className="card-text fw-bold">${product.price}</p>
                  <NavLink
                    to={`/products/${product._id}`}
                    className="btn btn-primary"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
