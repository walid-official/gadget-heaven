import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useLocation } from 'react-router-dom';
import favIcon from '../assets/assets/favicon-16x16.png'
import ShowStatistics from '../components/Staistics/ShowStatistics';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';
const Statistics = () => {
    const location = useLocation();
    const statisticsData = useLoaderData();
    
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics - gadget</title>
                <link rel="canonical" href={favIcon} />
            </Helmet>
            <div className="bg-[#9538E2] py-12">
            <HeaderTitle
              heading="Statistics"
              title="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            ></HeaderTitle>
            </div>
            <div className="py-20">
                <ShowStatistics statisticsData={statisticsData}></ShowStatistics>
            </div>
        </div>
    );
};

export default Statistics;