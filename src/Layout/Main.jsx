import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen bg-[#f7f7f7]">
                <Outlet></Outlet>
            </div>  
            <Footer></Footer>
        </div>
    );
};

export default Main;