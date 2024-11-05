import React, { useContext, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { dataContext, priceContext } from "../../Layout/Main";
// export const dataContext = createContext();

const Navbar = () => {
  const { pathname } = useLocation();
  const { cartCount, favoriteCount} = useContext(dataContext);
  const {resetItems,setResetItems } = useContext(priceContext);

  return (
    <div className="">
      <div
        className={`navbar ${
          pathname === "/" ? "text-white" : ""
        }  w-11/12 mx-auto`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content t bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/" className="font-medium   text-[#9538E2]">
                Home
              </NavLink>
              <NavLink to="/statistics" className="font-medium  text-[#9538E2]">
                Statistics
              </NavLink>
              <NavLink to="/Dashboard" className="font-medium   text-[#9538E2]">
                Dashboard
              </NavLink>
            </ul>
          </div>
          <a
            className={`btn btn-ghost text-[18px] sm:text-2xl   ${
              pathname === "/Dashboard" ||
              pathname === "/statistics" ||
              pathname === "/Contact" ||
              pathname === "/Dashboard/cart" ||
              pathname === "/Dashboard/wishlist"
                ? "text-black"
                : "text-white"
            }`}
          >
            Gadget Heaven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6 text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  pathname === "/Dashboard" ||
                  pathname === "/statistics" ||
                  pathname === "/Contact" ||
                  pathname === "/Dashboard/cart" ||
                  pathname === "/Dashboard/wishlist"
                    ? "text-[#9538E2]"
                    : ""
                } ${isActive ? "font-bold border-b-2" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `${
                  pathname === "/Dashboard" ||
                  pathname === "/statistics" ||
                  pathname === "/Contact" ||
                  pathname === "/Dashboard/cart" ||
                  pathname === "/Dashboard/wishlist"
                    ? "text-[#9538E2]"
                    : ""
                } ${isActive ? "font-bold border-b-2" : ""}`
              }
            >
              Statistics
            </NavLink>

            <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                `${
                  pathname === "/Dashboard" ||
                  pathname === "/statistics" ||
                  pathname === "/Contact" ||
                  pathname === "/Dashboard/cart" ||
                  pathname === "/Dashboard/wishlist"
                    ? "text-[#9538E2]"
                    : ""
                }  ${isActive ? "font-bold border-b-2" : ""}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `${
                  pathname === "/Dashboard" ||
                  pathname === "/statistics" ||
                  pathname === "/Contact" ||
                  pathname === "/Dashboard/cart" ||
                  pathname === "/Dashboard/wishlist"
                    ? "text-[#9538E2]"
                    : ""
                }  ${isActive ? "font-bold border-b-2" : ""}`
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-3 text-black relative">
          <div className="sm:bg-transparent sm:flex gap-4 hidden">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle bg-white hover:bg-white text-black border shadow-xl"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                 
                  <div className="bg-black w-6 h-6 text-sm -top-6 -right-5 absolute flex items-center justify-center rounded-full text-white">
                    { 
                      !resetItems ? cartCount : "0"
                    }
                     
                  </div>
                  
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <a
              className={`w-12 h-12 relative bg-white border font-bold text-black shadow-2xl rounded-full flex justify-center items-center`}
            >
              <i class="fa-regular fa-heart"></i>
              <div className="bg-black w-6 h-6 text-sm -top-2 -right-1 absolute flex items-center justify-center rounded-full text-white">
                {favoriteCount}
              </div>
            </a>
          </div>
          <div className="sm:hidden flex">
            <details className="dropdown">
              <summary className=" text-[16px] font-medium">Menu</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow">
                <a
                  href=""
                  className="text-xl bg-white w-10 h-10 rounded-full flex justify-center  items-center"
                >
                  <IoCartOutline />
                </a>
                <button
                  href=""
                  className=" bg-white w-10 h-10 rounded-full flex justify-center  items-center"
                >
                  <i class="fa-regular fa-heart"></i>
                </button>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
