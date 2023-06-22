import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Shared/Home/Home";
import ErrorPage from "../Pages/Shared/404/ErrorPage";
import Login from "../Pages/Authenticate/Login/Login";
import Register from "../Pages/Authenticate/Register/Register";
import Recipes from "../Pages/Shared/Recipes/Recipes";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";
import PrivateRoute from "./PrivateRoute";
import ChefRecipe from "../Pages/Shared/ChefRecipe/ChefRecipe";
import Blog from "../Pages/Shared/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/recipe/:id",
    element: (
      <PrivateRoute>
        <RecipeDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://chef-recipe-server-itsakhtar-outlookcom.vercel.app/recipe/${params.id}`
      ),
  },
  {
    path: "/chef/:id",
    element: (
      <PrivateRoute>
        <ChefRecipe />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://chef-recipe-server-itsakhtar-outlookcom.vercel.app/chef/${params.id}`
      ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
