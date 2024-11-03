import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const cards = useLoaderData();
    const [categoriesCard, setCategoryCard] = useState([]);
    const {CategoryId} = useParams();
    
    useEffect(()=> {
        if(CategoryId){
            const categoryItem = cards.filter(card => card.category === CategoryId);
            setCategoryCard(categoryItem);
        }else{
            setCategoryCard(cards)
        }
    }, [cards,CategoryId])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
            {
                categoriesCard.map((card,index) => <Category key={index} card={card}></Category>)
            }
        </div>
    );
};

export default Categories;