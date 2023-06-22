import React from "react";
import bannerImage from "../../assets/images/banner/banner.jpeg";

const Banner = () => {
  return (
    <div className="max-w-7xl container mx-auto p-5 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between md:gap-10 pt-0 md:pt-10 flex-row-reverse space-y-10 md:space-y-0">
        {/* Left Side */}
        <div>
          <p className="text-lg font-medium underline underline-offset-8 decoration-red-500 decoration-4 my-5">
            Welcome!
          </p>
          <h1 className="text-3xl md:text-6xl font-bold font-poppins leading-snug capitalize">
            Experience a world of flavors in your kitchen.
          </h1>
          <p className="text-gray-400">
            Welcome to [Name of Your Chef Recipe Website], your go-to
            destination for delicious and easy-to-make recipes. Whether you're a
            seasoned chef or a beginner in the kitchen, our recipes are designed
            to help you create mouth-watering dishes that will impress your
            family and friends. From classic comfort food to international
            cuisine, we've got you covered.
          </p>
        </div>
        {/* Right Side */}
        <div>
          <img src={bannerImage} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
