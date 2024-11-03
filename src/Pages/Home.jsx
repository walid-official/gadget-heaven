import React from 'react';
import Banner from '../components/Banner/Banner';
import SideBar from '../components/SideBar/SideBar';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <SideBar categories={data}></SideBar>
        </div>
    );
};

export default Home;