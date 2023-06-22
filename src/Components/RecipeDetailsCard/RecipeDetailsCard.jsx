import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import "@smastrom/react-rating/style.css";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { AiOutlineHeart } from "react-icons/ai";

const RecipeDetailsCard = ({ recipeDetails }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    if (!isFavorited) {
      toast.success("Added to favorites!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setIsFavorited(true);
    } else {
      toast.warning("Removed from favorites!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setIsFavorited(false);
    }
  };

  console.log(recipeDetails);
  const { title, image, description, details, ingredients, ratings } =
    recipeDetails;
  return (
    <div>
      {/* Banner */}
      <div className="relative bg-center bg-cover h-80 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 bg-opacity-80 ">
        <img
          className="absolute inset-0 w-full h-full object-cover bg-black bg-opacity-50"
          src="https://fastwpdemo.com/newwp/ticrou/wp-content/themes/ticrou/assets/images/background/page-title.jpg"
          alt=""
        />
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-3">{title}</h1>
            <p className="text-lg text-white">{description}</p>
          </div>
        </div>
      </div>
      {/* Details */}
      <div className="max-w-7xl container mx-auto p-5 lg:p-0 my-20">
        <div className="md:grid md:grid-cols-12 gap-10 items-center ">
          <div className="col-span-4 border-2 rounded-xl p-10 overflow-hidden">
            <img
              className="bg-center bg-cover  rounded-xl hover:scale-125 duration-500 object-contain"
              src={image}
              alt={title}
            />
          </div>
          <div className="col-span-8 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold my-2">{title}</h2>
            <p className="mb-2">
              <span className="font-semibold">Short Description</span>{" "}
              <span className="text-gray-500 ">{description} </span>
            </p>
            <p>
              <span className="font-semibold">Ingredinets </span>
              <span className="text-gray-500">{ingredients}</span>
            </p>
            <p className="text-gray-500 my-5">
              <span className="text-lg font-semibold text-black">
                Cooking Method:{" "}
              </span>{" "}
              {details}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex">
                <Rating
                  style={{ maxWidth: 160, maxHeight: 25 }}
                  value={ratings}
                  readOnly
                />
                <span className="mr-2 ml-3 rounded bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                  {ratings}
                </span>
              </div>
              <div className="text-2xl text-pink-500">
                {/* Likes Button */}
                <button onClick={handleFavoriteClick}>
                  {isFavorited ? <FaHeart /> : <AiOutlineHeart />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related Item */}
      {/* <div className="max-w-7xl container mx-auto p-5 lg:p-0 my-20">
        <h2 className="text-3xl font-bold">Related Item:</h2>
      </div> */}
    </div>
  );
};

export default RecipeDetailsCard;
