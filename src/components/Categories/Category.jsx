import React from "react";
import { NavLink } from "react-router-dom";

const Category = ({card}) => {
    const {product_id,product_image,product_title,price} = card;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={product_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}K</p>
          <div className="card-actions">
            <NavLink to={`cardDetails/${product_id}`}>
            <button className="btn py-2 px-6 bg-transparent hover:bg-[#9538E2] hover:text-white duration-200 border-2 border-[#9538E2] text-[#9538E2] font-medium rounded-full">View Details</button>
            </NavLink>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
