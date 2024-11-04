import React, { useEffect, useState } from "react";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";
import { getGadgetList } from "../utilities/storeCard";
import CartDetails from "../components/DashBoardCart/CartDetails";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const cartList = getGadgetList();
    setCarts(cartList);
  }, []);
  console.log(carts);
  return (
    <div className="">
      <div className="bg-[#9538E2] pt-8 pb-20">
        <HeaderTitle
          heading="DashBoard"
          title="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></HeaderTitle>
        <div className="flex gap-3 justify-center py-6">
          <NavLink>
            <button className="btn bg-transparent px-10 py-2 rounded-full font-bold border border-white text-white hover:bg-white hover:text-[#9538E2]">
              Cart
            </button>
          </NavLink>
          <NavLink>
            <button className="btn bg-transparent px-10 py-2 rounded-full font-bold border border-white text-white hover:bg-white hover:text-[#9538E2]">
              Wishlist
            </button>
          </NavLink>
        </div>
      </div>
      <div className="w-11/12 mx-auto py-4">
        <div className="">
            <h2 className="font-bold text-xl">Cart</h2>
        </div>
        {carts.map((cart, index) => (
          <CartDetails key={index} cart={cart}></CartDetails>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
