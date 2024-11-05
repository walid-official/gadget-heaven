import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useLocation } from 'react-router-dom';
import favIcon from '../assets/assets/favicon-16x16.png'
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
            <h2>This is a Statistics Page</h2>
        </div>
    );
};

export default Statistics;