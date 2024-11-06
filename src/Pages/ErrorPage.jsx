import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="">
            
            <div className='flex flex-col justify-center items-center h-screen'>
            <h2 className='text-6xl text-yellow-300 font-bold'>{error.status}</h2>
                <h2 className='text-2xl font-bold '>Page is not Found</h2>
            </div>
            
        </div>
       
    );
};

export default ErrorPage;