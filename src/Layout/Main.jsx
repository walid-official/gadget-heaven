import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    const {pathname} = useLocation();
    console.log(pathname);
    return (
        <div>
            {pathname === '/Dashboard' || pathname === '/statistics' ||  pathname === '/Dashboard/cart' || pathname === '/Dashboard/wishlist' ?  <div className="bg-white py-4">
                <Navbar></Navbar>
            </div> : <div className="bg-[#9538E2] py-4">
                <Navbar></Navbar>
            </div>}
            
            <div className="min-h-screen bg-[#f7f7f7]">
                <Outlet></Outlet>
            </div>  
            <Footer></Footer>
        </div>
    );
};

export default Main;