import React from "react";
import BannerImage from "../../assets/assets/banner.jpg"
const Banner = () => {
  return (
    <div className="">
      <div className="hero bg-[#9538E2] pt-16 pb-60 md:pb-80 lg:pb-96">
        <div className="hero-content text-center">
          <div className="w-full">
            <h1 className="md:text-5xl text-4xl font-bold text-white md:w-[70%] mx-auto md:leading-tight">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6 md:w-[70%] mx-auto text-white">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn bg-white text-[#9538E2] rounded-full">Shope Now</button>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto -translate-y-72 ">
        <div className="w-[75%] mx-auto lg:border rounded-xl flex justify-center">
            <img className="h-[520px] w-full m-6 rounded-xl object-contain lg:object-cover" src={BannerImage} alt="" />
        </div>
            
        </div>
    </div>
  );
};

export default Banner;
