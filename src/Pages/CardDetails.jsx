import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";
import Specification from "../components/Specification/Specification";
import { IoCartOutline } from "react-icons/io5";
import { addGadgetToCart, addGadgetToFavorite } from "../utilities/storeCard";
import { dataContext, priceContext } from "../Layout/Main";
import { Helmet } from "react-helmet";
import favIcon from "../assets/assets/favicon-16x16.png";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const CardDetails = () => {
  const details = useLoaderData();
  const { CardId } = useParams();
  console.log(CardId);
  const [detailsItem, setDetailsItem] = useState([]);
  const { cartCount, setCartCount, favoriteCount, setFavoriteCount } =
    useContext(dataContext);
  const {
    priceItem,
    setPrice,
    resetItems,
    setResetItems,
    modalBtnDisable,
    setModalBtnDisable,
  } = useContext(priceContext);
  const [favoriteDisable, setFavoriteDisable] = useState(false);

  useEffect(() => {
    const detailsData = details.find(
      (singleItem) => singleItem.product_id === CardId
    );
    setDetailsItem(detailsData);
    console.log(detailsData);
  }, [details, CardId]);

  const {
    product_id,
    product_image,
    product_title,
    price,
    description,
    Specifications,
    availability,
    rating,
  } = detailsItem;

  const handleAddToCart = (detailsItem, price) => {
    addGadgetToCart(detailsItem);

    const newCount = cartCount + 1;
    setCartCount(newCount);

    const newPrice = priceItem + price;
    setPrice(newPrice);

    if (resetItems) {
      setResetItems(false);
      setCartCount(0 + 1);
      setPrice(0 + price);
    }
  };

  const handleAddToFavorite = (detailsItem) => {
    addGadgetToFavorite(detailsItem);
    setFavoriteDisable(true);

    const newFavorite = favoriteCount + 1;
    setFavoriteCount(newFavorite);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CardDetails - gadget</title>
        <link rel="canonical" href={favIcon} />
      </Helmet>

      <div className="bg-[#9538E2] pt-8 pb-48">
        <HeaderTitle
          heading="Product Details"
          title="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></HeaderTitle>
      </div>

      <div className="w-[70%] mx-auto -mt-40 pb-20">
        <div className="flex bg-base-100 shadow-xl rounded-xl">
          <figure className="border m-4 w-[40%] flex items-center">
            <img className="w-full" src={product_image} alt="Album" />
          </figure>
          <div className="m-4">
            <h2 className="card-title">{product_title}</h2>
            <p className="py-2">Price: $ {price}</p>
            <p className="py-2">
              {availability ? (
                <button className="py-1 px-2 bg-[#2f9c0851] text-sm border-2 border-[#2f9c08c8] rounded-full text-[#309C08] ">
                  In Stock
                </button>
              ) : (
                <button className="py-1 px-2 bg-[#2f9c084b] text-sm border-2 border-[#309C08] rounded-full text-[#309C08] ">
                  Not Available
                </button>
              )}
            </p>
            <p className="py-2">{description}</p>
            <h2 className="font-bold text-2xl py-4">Specifications:</h2>
            <ol className="list-decimal pl-6">
              {Specifications?.map((item, index) => (
                <Specification key={index} item={item}></Specification>
              ))}
            </ol>
            <div className="">
              <h2 className="text-xl font-bold py-3">Rating</h2>

              <div className="flex gap-4 items-center py-6">
                {/* <Rate defaultValue={4.5} allowHalf allowClear={false} disabled></Rate> */}
                <Rating style={{ maxWidth: 180 }} value={rating} readOnly />

                <button className="btn">{rating}</button>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <button
                onClick={() => handleAddToCart(detailsItem, price)}
                className="btn bg-[#9538E2] text-white"
              >
                Add to cart
                <i href="" className="text-xl text-white">
                  <IoCartOutline />
                </i>
              </button>
              <button
                disabled={favoriteDisable}
                onClick={() => handleAddToFavorite(detailsItem)}
                className="btn bg-white border-2 w-12 h-12 rounded-full shadow-2xl flex justify-center items-center"
              >
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
