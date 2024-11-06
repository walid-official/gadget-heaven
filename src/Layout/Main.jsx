import React, { useState, createContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
export const dataContext = createContext();
export const priceContext = createContext();
import { Toaster } from 'react-hot-toast';

import favIcon from '../assets/assets/favicon-16x16.png'
import { Helmet } from "react-helmet";
const Main = () => {
  const { pathname } = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount,setFavoriteCount] = useState(0)
  const [priceItem,setPrice] = useState(0);
  const [resetItems,setResetItems] = useState(false);
  const [modalBtnDisable,setModalBtnDisable] = useState(true);
 


  return (
    
      <dataContext.Provider value={{cartCount, setCartCount,favoriteCount,setFavoriteCount}}>
            <priceContext.Provider value={{priceItem,setPrice,resetItems,setResetItems,modalBtnDisable,setModalBtnDisable}}>
        <div>

        <Helmet>
                <meta charSet="utf-8" />
                <title>Home - gadget</title>
                <link rel="canonical" href={favIcon} />
          </Helmet>

        <Toaster />
          {pathname === "/"
          ? (
            <div className=" bg-[#9538E2] mt-8 w-[95%] rounded-tr-2xl rounded-tl-2xl mx-auto py-4">
              <Navbar></Navbar>
            </div>
          ) : (
            <div className="bg-white py-4">
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
