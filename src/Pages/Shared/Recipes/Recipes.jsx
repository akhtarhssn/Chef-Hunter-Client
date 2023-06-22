import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../../../Components/RecipeCard/RecipeCard";

const Recipes = () => {
  const [recipe, setRecipe] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetch("https://chef-recipe-server-itsakhtar-outlookcom.vercel.app/recipe")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  useEffect(() => {
    const selected = localStorage.getItem("selectedCountry");
    if (selected) {
      setSelectedCountry(selected);
    }
  }, []);

  const handleCountryChange = (event) => {
    const selected = event.target.value;
    setSelectedCountry(selected);
    localStorage.setItem("selectedCountry", selected);
  };

  // filter recipes based on selected country value
  const filteredRecipes = selectedCountry
    ? recipe.filter((chef) => chef.cuisine === selectedCountry)
    : recipe;

  return (
    <div className="my-16 p-5">
      <h1 className="text-3xl text-center font-bold my-5 md:my-0">
        Our Recipes:
      </h1>
      <div className="md:flex justify-between">
        <div></div>
        <div className="w-60">
          {/* Category */}

          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a Cuisine
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleCountryChange}
            value={selectedCountry}
          >
            <option value="Bangladeshi">Bangladeshi</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="French">French</option>
            <option value="Thai">Thai</option>
            <option value="Japanese">Japanese</option>
            <option value="Chinese">Chinese</option>
            <option value="Mexican">Mexican</option>
            <option value="Korean">Korean</option>
          </select>
        </div>
      </div>
      {filteredRecipes.map((chef) => (
        <div key={chef.id}>
          <h4 className="text-lg font-bold mt-5 mb-5">
            {chef.cuisine} Cuisine
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {chef.recipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
