import React from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="bg-[#9538E2] py-4">
      <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
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
                <NavLink to="/" className="font-medium  md:text-white text-[#9538E2]">Home</NavLink>
                <NavLink to="/" className="font-medium  md:text-white text-[#9538E2]">Statistics</NavLink>
                <NavLink to="/" className="font-medium  md:text-white text-[#9538E2]">Dashboard</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl sm:text-2xl text-white">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            <NavLink to="/" className="font-medium text-white">Home</NavLink>
            <NavLink to="/" className="font-medium text-white">Statistics</NavLink>
            <NavLink to="/" className="font-medium text-white">Dashboard</NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
            <div className="sm:bg-transparent bg-white sm:flex gap-4 hidden">
                <a href="" className="text-xl bg-white w-10 h-10 rounded-full flex justify-center items-center"><IoCartOutline/></a>
                <a href="" className=" bg-white w-10 h-10 rounded-full flex justify-center items-center"><i class="fa-regular fa-heart"></i></a>
            </div>
            <div className="sm:hidden flex">
                <details className="dropdown">
                    <summary className="text-white">Menu</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow">
                    <a href="" className="text-xl bg-white w-10 h-10 rounded-full flex justify-center items-center"><IoCartOutline/></a>
                    <a href="" className=" bg-white w-10 h-10 rounded-full flex justify-center items-center"><i class="fa-regular fa-heart"></i></a>
                    </ul>
                </details>
               
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
