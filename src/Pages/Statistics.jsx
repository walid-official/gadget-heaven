import React from 'react';
import { useLocation } from 'react-router-dom';

const Statistics = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h2>This is a Statistics Page</h2>
        </div>
    );
};

export default Statistics;