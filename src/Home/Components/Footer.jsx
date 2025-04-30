import React from 'react';
import { FaFacebookF, FaDribbble, FaInstagram, FaBehance, FaDiscord } from 'react-icons/fa';
import Button from './Button';

function Footer() {
  return (
    <footer className="bg-white p-6 h-[350px] mt-12 px-4 md:px-16">
      <div className="max-w-7xl mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-8">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Lets work together</h2>
          <p className="text-gray-600 mb-6">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          <div className="flex space-x-4 text-black text-2xl">
            <FaDiscord className="cursor-pointer w-12 hover:text-gray-600" />
            <FaFacebookF className="cursor-pointer w-12 hover:text-gray-600" />
            <FaDribbble className="cursor-pointer  w-12 hover:text-gray-600" />
            <FaInstagram className="cursor-pointer  w-12 hover:text-gray-600" />
            <FaBehance className="cursor-pointer  w-12 hover:text-gray-600" />
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-100 p-4 w-full h-1/3 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-100 p-4 w-full h-1/3 focus:outline-none"
          />
          <Button name="Submit"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
