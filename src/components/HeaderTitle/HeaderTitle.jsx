import React from 'react';

const HeaderTitle = ({heading,title}) => {
    return (
        <div className=''>
            <h2 className='text-white font-bold text-4xl text-center py-4'>{heading}</h2>
            <p className='text-center text-white text-sm  w-[50%] mx-auto'>{title}</p>
        </div>
    );
};

export default HeaderTitle;