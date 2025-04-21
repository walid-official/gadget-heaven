import React from "react";
import BannerImage from "../../assets/assets/banner.jpg"
import { useNavigate } from "react-router-dom";


const Banner = () => {
 const navigate = useNavigate()
  
  return (
    <div className="">

      <div className="hero bg-[#9538E2] w-[95%] mx-auto rounded-bl-2xl rounded-br-2xl pt-16 pb-60 md:pb-80 lg:pb-80">
        <div className="hero-content text-center">
          <div className="w-full">
            <h1 className="md:text-5xl text-4xl font-bold text-white md:w-[70%] mx-auto md:leading-tight">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6 md:w-[70%] mx-auto text-white">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button onClick={() => navigate('/Dashboard')} className="btn px-8 py-3 bg-white text-[#9538E2] rounded-full">Shope Now</button>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto -mt-72">
        <div className="w-[75%] mx-auto lg:border backdrop-blur-lg rounded-xl flex justify-center">
            <img className="h-[520px] w-full m-6 rounded-xl object-contain lg:object-cover" src={BannerImage} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Banner;
