import React, { useEffect, useState } from 'react';
import { getGadgetFavoriteList } from '../../utilities/storeCard';
import ShowWishList from './ShowWishList';

const WishList = () => {
    const [favorites,setFavorites] = useState([]);

    useEffect(() => {
        const favoritesItem = getGadgetFavoriteList();
        setFavorites(favoritesItem);
    },[])

    return (
        <div>
            {
                favorites.map(favorite => <ShowWishList favorite={favorite}></ShowWishList>)
            }
        </div>
    );
};

export default WishList;