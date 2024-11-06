import React, { useEffect, useState } from 'react';
import { getGadgetFavoriteList } from '../../utilities/storeCard';
import ShowWishList from './ShowWishList';
import { removeFavoriteGadget } from "../../utilities/storeCard";

const WishList = () => {
    const [favorites,setFavorites] = useState([]);

    useEffect(() => {
        const favoritesItem = getGadgetFavoriteList();
        setFavorites(favoritesItem);
    },[])

    const handleFavorite = (id) => {
        removeFavoriteGadget(id)
        const favoritesItem = getGadgetFavoriteList();
        setFavorites(favoritesItem);
      }

    return (
        <div className='w-11/12 mx-auto'>
            <div className="">
                <h2 className='font-bold text-2xl py-8'>WishList</h2>
            </div>
            {
                favorites.map(favorite => <ShowWishList handleFavorite={handleFavorite} favorite={favorite}></ShowWishList>)
            }
        </div>
    );
};

export default WishList;