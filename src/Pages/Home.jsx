import React, { useContext, useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import SideBar from '../components/SideBar/SideBar';
import { Outlet, useLoaderData } from 'react-router-dom';
import { priceContext } from '../Layout/Main';


const Home = () => {
    const data = useLoaderData();
    // const {priceItem, setPrice,resetItems,setResetItems} = useContext(priceContext);
    // useEffect(()=>{
    //     setResetItems(false)
    // },[])
    return (
        <div>
            <Banner></Banner>
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