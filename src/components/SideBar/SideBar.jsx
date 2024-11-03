import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = ({categories}) => {
   
    return (
        <div>
            {
                categories.map((category,index) => <NavLink key={index}><button className='btn'>{category.category}</button></NavLink>)
            }
        </div>
    );
};

export default SideBar;