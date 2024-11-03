import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-base-200 text-base-content rounded p-10">
        <div className="border-b-2 w-full">
          <h2 className="font-bold text-4xl text-center my-4">Gadget Heaven</h2>
          <p className="text-center mb-10">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="md:w-[70%] mx-auto py-8">
          <div className="flex justify-between">
            <nav className="">
              <h6 className="footer-title text-center">Services</h6>
              <a className="link link-hover block text-center py-1">Branding</a>
              <a className="link link-hover block text-center py-1">Design</a>
              <a className="link link-hover block text-center py-1">Marketing</a>
              <a className="link link-hover block text-center py-1">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title text-center">Company</h6>
              <a className="link link-hover block text-center py-1">About us</a>
              <a className="link link-hover block text-center py-1">Contact</a>
              <a className="link link-hover block text-center py-1">Jobs</a>
              <a className="link link-hover block text-center py-1">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title text-center">Legal</h6>
              <a className="link link-hover block text-center py-1">Terms of use</a>
              <a className="link link-hover block text-center py-1">Privacy policy</a>
              <a className="link link-hover block text-center py-1">Cookie policy</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
