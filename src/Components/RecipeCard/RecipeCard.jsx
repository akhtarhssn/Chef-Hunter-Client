import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="hover:shadow-2xl hover:-translate-y-2 duration-500 rounded-xl p-5 border ">
      <div className="h-60 ">
        <img
          className="h-full mx-auto rounded-xl"
          src={recipe.image}
          alt={recipe.title}
        />
      </div>
      <h3 className="text-lg font-semibold mt-5 mb-2">
        <Link to={""}>{recipe.title}</Link>
      </h3>
      <p className="mb-3">
        <span className="font-semibold">Ingredients: </span>
        <span className="text-sm text-gray-500">{recipe.ingredients}</span>
      </p>
      <div className="text-center mt-8 mb-3">
        <Link to={`/recipe/${recipe.id}`}>
          <button className="bg-[#C59D5F] py-3 px-10 rounded-md font-semibold text-white">
            Check Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
