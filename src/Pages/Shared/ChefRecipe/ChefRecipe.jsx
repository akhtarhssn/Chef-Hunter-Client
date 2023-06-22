import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NavigationBar from "../../../Components/Navbar/NavigationBar";
import ChefFooter from "../Footer/Footer";
import RecipeCard from "../../../Components/RecipeCard/RecipeCard";
import LazyLoad from "react-lazy-load";

const ChefRecipe = () => {
  const recipes = useLoaderData();
  const chefParamId = useParams();
  const chefId = chefParamId.id;
  // console.log(chefId);

  const [chefInfo, setCheInfo] = useState([]);
  // console.log(chefInfo.length);

  useEffect(() => {
    fetch("https://chef-recipe-server-itsakhtar-outlookcom.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setCheInfo(data));
  }, []);

  if (chefInfo.length < 0) {
    return <h2>No Chef Found</h2>;
  }

  // const selectedChef = chefInfo.find((chef) => chef.id === parseInt(chefId));

  useEffect(() => {
    if (chefInfo.length > 0) {
      const chef = chefInfo.find((chef) => chef.id == chefId);
      setCheInfo(chef);
    }
  }, [chefInfo, chefId]);

  // console.log(chefInfo);
  const { image, name, details, likes, recipe_item, experience } = chefInfo;

  return (
    <div>
      <NavigationBar />
      <div className="bg-center bg-gradient-to-r from-blue-400 to-red-600 bg-opacity-80 ">
        <div className="max-w-3xl mx-auto container md:flex items-center justify-center gap-10 p-5">
          {/* chef image */}
          <div className="flex justify-center mt-5 md:mt-0">
            <LazyLoad height={225}>
              <img
                className="md:h-52 md:w-80 w-48 h-48 rounded-full object-cover"
                src={image}
                alt={name}
              />
            </LazyLoad>
          </div>

          <div className="relative container mx-auto px-4 mb-16 mt-8">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-3">{name}</h1>
              <p className="text-lg text-white">{details}</p>
              <div className="text-white my-5">
                <p>
                  <span className="text-lg font-semibold">Total Likes: </span>{" "}
                  {likes}{" "}
                </p>
                <p>
                  <span className="text-lg font-semibold">Recipe Items: </span>
                  {recipe_item}
                </p>
                <p>
                  <span className="text-lg font-semibold">Experience: </span>
                  {experience}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl container mx-auto p-5 lg:p-0 my-20">
        <h2 className="text-xl font-semibold my-5">Chef {name}'s Recipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recipes[0].recipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      </div>
      <ChefFooter />
    </div>
  );
};

export default ChefRecipe;
