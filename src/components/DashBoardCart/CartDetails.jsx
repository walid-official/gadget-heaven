import React from "react";

const CartDetails = ({ cart }) => {
  const {
    product_id,
    product_image,
    product_title,
    price,
    description,
    Specifications = [],
    availability,
    rating,
  } = cart;

  return (
    <div className="">
       
      <div className="bg-base-100 shadow-xl flex justify-between my-10 rounded-xl">
        <div className="flex">
          <figure className="w-[16%] border m-10 rounded-xl">
            <img className="w-full" src={product_image} alt="Movie" />
          </figure>
          <div className="mt-10">
            <h2 className="font-bold text-2xl">{product_title}</h2>
            <p className="py-4">{description}</p>
            <p>Price: $ {price}</p>
          </div>
        </div>
        <div className="flex items-center px-8">
            <button className="btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
