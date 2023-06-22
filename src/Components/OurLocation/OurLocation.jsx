import React from "react";
import banner from "../../assets/images/banner/timer-bg.jpg";
import shape from "../../assets/images/banner/title-shape.png";
import {
  FaFacebook,
  FaTwitter,
  FaBehance,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const OurLocation = () => {
  return (
    <div className="md:grid grid-cols-2 mt-32 items-center p-10">
      <div className="text-center">
        <div className="flex justify-center my-10">
          <img src={shape} alt="" />
        </div>
        <h2 className="text-5xl font-semibold font-Arapey">
          Unique Recipe Lounge
        </h2>
        <div className="flex justify-center mt-4">
          <div className="h-1 bg-black w-16"></div>
        </div>
        <div className="text-gray-500 text-lg mt-8 space-y-3">
          <p>18/B, New Ave 1000 New York</p>
          <p>+1 023456789</p>
          <p>info@uniquerecipe.com</p>
        </div>
        <div className="text-gray-500 text-lg mt-8 space-y-2">
          <p>Mon - Thu: 10 AM - 02 AM</p>
          <p>Fri - Sun: 10 AM - 02 AM</p>
        </div>
        <div className="flex gap-5 my-10 text-xl text-gray-500 justify-center">
          <Link>
            <FaFacebook />
          </Link>
          <Link>
            <FaTwitter />
          </Link>
          <Link>
            <FaBehance />
          </Link>
          <Link>
            <FaYoutube />
          </Link>
          <Link>
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div>
        <img className="rounded-xl" src={banner} alt="" />
      </div>
    </div>
  );
};

export default OurLocation;
