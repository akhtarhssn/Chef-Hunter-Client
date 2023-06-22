import { Card } from "flowbite-react";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, name, image, experience, likes, recipe_item } = chef;
  return (
    <div>
      <div className="max-w-sm">
        <div className="p-5 border hover:shadow-2xl hover:-translate-y-2 duration-500 rounded-xl">
          <img
            src={image}
            alt={name}
            className="h-60 rounded-xl mb-5 object-cover object-top w-96"
          />
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center flex items-center gap-3">
            {name}{" "}
            <span className="text-blue-500">
              <BsFillCheckCircleFill />
            </span>
          </h5>
          <div>
            <div className="mb-5 text-center mt-5 flex gap-3">
              <p className="border py-1 px-3 text-sm border-black rounded-lg">
                Experience: {experience}yrs
              </p>
              {/* <p className="text-lg ">Years Of Experience: {experience}</p> */}
              <p className="border py-1 px-3 text-sm border-black rounded-lg">
                Recipes: {recipe_item}
              </p>
            </div>
            <p className="flex items-center gap-3">
              {" "}
              <span className="text-pink-500 text-lg">
                <AiFillHeart />
              </span>{" "}
              {likes} Likes
            </p>

            <div className=" my-5">
              <Link to={`/chef/${id}`}>
                <button className="px-8 py-1 rounded-md border-2 border-[#C59D5F] text-black">
                  See Recipes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
