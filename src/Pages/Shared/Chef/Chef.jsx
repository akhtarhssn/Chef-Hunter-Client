import React, { useEffect, useState } from "react";
import ChefCard from "../../../Components/ChefCard/ChefCard";

const Chef = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-server-itsakhtar-outlookcom.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  // console.log(chefs);

  return (
    <div className="max-w-7xl container mx-auto p-5 lg:p-0 my-20">
      <h2 className="text-3xl font-bold my-10 text-center">Meet the Chef</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
