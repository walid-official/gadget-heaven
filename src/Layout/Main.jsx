import React, { useState, createContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
export const dataContext = createContext();
export const priceContext = createContext();
import { Toaster } from 'react-hot-toast';

const Main = () => {
  const { pathname } = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount,setFavoriteCount] = useState(0)
  const [priceItem,setPrice] = useState(0);
  const [resetItems,setResetItems] = useState(false);

  return (
    
      <dataContext.Provider value={{cartCount, setCartCount,favoriteCount,setFavoriteCount}}>
            <priceContext.Provider value={{priceItem,setPrice,resetItems,setResetItems}}>
        <div>
        <Toaster />
          {pathname === "/Dashboard" ||
          pathname === "/statistics" ||
          pathname === "/Dashboard/cart" ||
          pathname === "/Dashboard/wishlist" ? (
            <div className="bg-white py-4">
              <Navbar></Navbar>
            </div>
          ) : (
            <div className="bg-[#9538E2] py-4">
              <Navbar></Navbar>
            </div>
          )}

          <div className="min-h-screen bg-[#f7f7f7]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
        </priceContext.Provider>
      </dataContext.Provider>
    
  );
};

export default Main;
