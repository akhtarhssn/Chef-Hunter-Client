import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import NavigationBar from "../../../Components/Navbar/NavigationBar";
import ChefFooter from "../../Shared/Footer/Footer";
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signInUser, googleSignIn, githubLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        // console.log(loggedUser);
        setSuccess("Login successful");
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        setSuccess("");
        return;
      });
  };
  const handleGoogleSignIn = (event) => {
    googleSignIn()
      .then((res) => {
        const loggedUser = res.user;
        // console.log(loggedUser);
        setSuccess("Login successful");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        setSuccess("");
        return;
      });
  };

  const handleGithubSignIn = () => {
    githubLogin()
      .then((res) => {
        const loggedUser = res.user;
        setSuccess("Login Successful");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        setSuccess("");
        return;
      });
  };

  return (
    <>
      <NavigationBar />
      <div className="max-w-lg mx-auto my-10 rounded-md border p-10 shadow-md hover:shadow-2xl duration-500">
        <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
        <form
          className="flex flex-col gap-4 space-y-3"
          onSubmit={handleSignInUser}
        >
          {error && (
            <span className="text-center text-orange-400 font-medium border border-orange-400 p-2 rounded">
              {error}
            </span>
          )}
          {success && (
            <span className="text-center text-blue-600 font-medium border border-blue-500 p-2 rounded">
              {success}
            </span>
          )}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <input
              className="w-full rounded py-3.5 px-5 border-0 outline outline-1 outline-gray-400 focus:outline-gray-700 focus:outline-0 bg-gray-100 text-sm"
              id="email2"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <input
              className="w-full rounded py-3.5 px-5 border-0 outline outline-1 outline-gray-400 focus:outline-gray-700 focus:outline-0 bg-gray-100 text-sm"
              id="password2"
              type="password"
              name="password"
              required
              placeholder="******"
            />
          </div>
          <button className="rounded-md bg-blue-700 text-white text-lg w-full p-3 font-semibold">
            Login
          </button>
          <div className="mb-8 text-center mt-0">
            <p className="text-gray-500">
              New to Dragon News?{" "}
              <span className="font-semibold text-blue-700">
                <Link to="/register">Register Now</Link>
              </span>{" "}
            </p>
            <div className="my-5 flex items-center gap-6">
              <span className="bg-gray-200 h-0.5 w-full"></span>
              <p>or</p>
              <span className="bg-gray-200 h-0.5 w-full"></span>
            </div>
          </div>
        </form>
        <div className="space-y-2 text-blue-700">
          <button
            className="flex items-center justify-center gap-4 border-2 rounded-md border-gray-300 w-full p-3 font-medium"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="text-xl" /> Continue With Google
          </button>
          <button
            className="flex items-center justify-center gap-4 border-2 rounded-md border-gray-300 w-full p-3 font-medium"
            onClick={handleGithubSignIn}
          >
            <FaGithub className="text-xl" /> Continue With Github
          </button>
        </div>
      </div>
      <ChefFooter />
    </>
  );
};

export default Login;
