import React, { createContext, useContext, useEffect, useState } from "react";
import { getGadgetList } from "../../utilities/storeCard";
import CartDetails from "./CartDetails";
import { priceContext } from "../../Layout/Main";

const AddCart = () => {
  const [carts, setCarts] = useState([]);
  const [priceItem] = useContext(priceContext)
  useEffect(() => {
    const cartList = getGadgetList();
    setCarts(cartList);
  }, []);

  const handleSorting = () => {
    const sortingPrice = [...carts].sort((a, b) => b.price - a.price);
    setCarts(sortingPrice);
  };

  return (

      <div>
        <div className="w-11/12 mx-auto py-4">
          <div className="flex justify-between">
            <div className="">
              <h2 className="font-bold text-xl">Cart</h2>
            </div>
            <div className="flex gap-4 items-center">
              <h2>Total-Cost: $ {priceItem}</h2>
              <button
                onClick={handleSorting}
                className="rounded-full px-6 py-3 bg-transparent  hover:bg-[#9538E2] hover:text-white border border-[#9538E2] text-[#9538E2]"
              >
                Sort By Price
              </button>
              <button
                onClick={handleSorting}
                className="btn bg-[#9538E2] shadow-inner rounded-full text-white"
              >
                Purchase
              </button>
            </div>
          </div>
          {carts.map((cart, index) => (
            <CartDetails key={index} cart={cart}></CartDetails>
          ))}
        </div>
      </div>
  );
};

export default AddCart;
