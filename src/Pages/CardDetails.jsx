import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";

const CardDetails = () => {
  const details = useLoaderData();
  const { CardId } = useParams();
  console.log(CardId);
  const [detailsItem, setDetailsItem] = useState([]);
  const {
    product_id,
    product_image,
    product_title,
    price,
    description,
    Specification,
    availability,
    rating,
  } = detailsItem;
  useEffect(() => {
    const detailsData = details.find(singleItem => singleItem.product_id === CardId
    );
    setDetailsItem(detailsData);
    console.log(detailsData);
  }, [details, CardId]);

  return (
    <div>
      <HeaderTitle
        heading="Product Details"
        title="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      ></HeaderTitle>
      <div className="">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={product_image}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
