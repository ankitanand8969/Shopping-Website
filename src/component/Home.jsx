import React from "react";
import Products from "./Products";
import { Product } from "./Product";
import ImageSlider from "./ImageSlider";

export const Home = () => {
  return (
    <div className="card_item">
      {/* <div className="card text-bg-dark border-0">
        <img src="/assets/bg1.jpg" classNameNameName="card-img" alt="Background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p classNameNameName="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div> */}
      <ImageSlider />
      <Products />
    </div>
  );
};
