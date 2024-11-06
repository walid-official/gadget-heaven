import React, { useContext, useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import SideBar from '../components/SideBar/SideBar';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import { priceContext } from '../Layout/Main';


const Home = () => {
    const data = useLoaderData();
    const location = useLocation();
    const {priceItem,resetItems,setResetItems,modalBtnDisable,setModalBtnDisable} = useContext(priceContext);
    useEffect(() => {
        if(location.pathname === '/'){
            setModalBtnDisable(true)
        }
    },[location])
    return (
        <div>
            <Banner></Banner>
            <div className="">
                <h2 className='text-center font-bold text-4xl pt-32'>Explore Cutting-Edge Gadgets</h2>
            </div>
            <div className="lg:flex gap-10 w-11/12 mx-auto py-32">
                <div className="lg:w-[20%] md:w-[40%] mx-auto mb-10 lg:mb-0">
                    <SideBar categories={data}></SideBar>
                </div>
                <div className="lg:w-[80%]">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;