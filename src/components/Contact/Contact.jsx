import React from "react";
import { Helmet } from "react-helmet";
import { SiSimilarweb } from "react-icons/si";
import favIcon from '../../assets/assets/favicon-16x16.png'
const Contact = () => {
  return (
    <div className="w-[65%] mx-auto">
       <Helmet>
              <meta charSet="utf-8" />
              <title>Contact - gadget</title>
              <link rel="canonical" href={favIcon} />
        </Helmet>
      <h2 className="text-center font-bold text-4xl py-10">Have Some Questions?</h2>
      <div className="flex ">
        <div className="bg-gradient-to-b from-[#9538e2] to-[#49279d] w-[50%] py-6 px-8 shadow-2xl rounded-lg">
            <div className="">
                <h2 className="font-medium text-white text-2xl py-6">Send us a message</h2>
            </div>
          <div className="m">
            <input type="text" className="bg-transparent text-white px-2 pt-2 pb-6 placeholder-[#caa1dc] border-b border-b-[#caa1dc] font-bold w-full" placeholder="Name" />
          </div>
          <div className="my-6">
            <input type="email" className="bg-transparent text-white px-2 pt-2 pb-6 placeholder-[#caa1dc] border-b border-b-[#caa1dc] font-bold w-full" placeholder="Email" />
          </div>
          <div className="">
            <input type="text" className="bg-transparent text-white px-2 pt-2 pb-6 placeholder-[#caa1dc] border-b border-b-[#caa1dc] font-bold w-full" placeholder="Subject" />
          </div>
          <div className="my-6">
          <textarea
            placeholder="Message"
            className="bg-transparent text-white px-2 pt-2 pb-10 placeholder-[#caa1dc] border-b border-b-[#caa1dc] font-bold w-full"
          ></textarea>
          </div>
          <div className="">
            <button className="btn bg-gradient-to-b from-[#9538e2] to-[#49279d] rounded-full text-[#caa1dc]">Send Message</button>
          </div>
        </div>
        <div className="bg-white w-[50%] rounded-lg shadow-2xl py-6 px-8">
            <h2 className="font-medium text-2xl py-6">Contact Us</h2>
            <p className="text-[#666679] w-[90%] pb-6">We're open for any suggestion or just to have a chat</p>
            <div className="space-y-8">
                <div className="flex items-center gap-3">
                    <div className="bg-white  shadow-2xl border w-12 h-12 rounded-full flex justify-center items-center">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <span className="font-bold">Address:</span>
                    <a href=""> Suite 721 New York NY 10016</a>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-white shadow-2xl border w-12 h-12 rounded-full flex justify-center items-center">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <span className="font-bold">Phone:</span>
                    <a href=""> + 1235 2355 98</a>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-white shadow-2xl border w-12 h-12 rounded-full flex justify-center items-center">
                    <i class="fa-solid fa-paper-plane"></i>
                    </div>
                    <span className="font-bold">Email:</span>
                    <a href=""> info@yoursite.com</a>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-white shadow-2xl border w-12 h-12 rounded-full flex justify-center items-center">
                        <SiSimilarweb></SiSimilarweb>
                    </div>
                    <span className="font-bold">Website:</span>
                    <a href="">webWish.com</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
