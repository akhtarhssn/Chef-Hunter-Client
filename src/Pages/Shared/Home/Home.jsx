import React, { useContext } from "react";
import Banner from "../../../Components/Banner/Banner";
import Recipes from "../Recipes/Recipes";
import Chef from "../Chef/Chef";
import OurLocation from "../../../Components/OurLocation/OurLocation";
import Faq from "../../../Components/Faq/Faq";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Spinner } from "flowbite-react";
const Home = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  } else if (user) {
  }
  return (
    <>
      <div className="max-w-7xl container mx-auto my-5 md:my-16">
        <Banner />
        <Chef />
        <Recipes />
      </div>
      <OurLocation />
      <Faq />
    </>
  );
};

export default Home;
