import React from "react";
import AppleLogo from "../Assets/apple.png";
import GoogleLogo from "../Assets/google.png";
import FacebookLogo from "../Assets/facebook-icon.png";
import PlaytomicLogo from "../Assets/playtomic_logo-3.png";
import BackgroundImage from "../Assets/Bc.jpg"; // Add your background image here
import { Link } from "react-router-dom";

const AuthPage: React.FC = () => {
  return (
    <div
      className="relative flex flex-col justify-center min-h-screen text-white bg-black bg-opacity-50"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-0 "></div>
      <div className="mt-60 z-10 p-6 bg-black bg-opacity-10  rounded-lg ">
        <div className="text-3xl mb-4">
          <img
            src={PlaytomicLogo}
            alt="Playtomic"
            className="w-40 mx-auto rounded-3xl"
          />{" "}
          {/* Increase the size */}
        </div>
        <h1 className="text-xl mb-2 mt-10">
          Join the biggest racket sports players community
        </h1>
        <p className="mb-4 mt-5">And find your perfect match</p>
        <Link to="/SignUp">
          <button className="w-full py-2 mb-2 text-lg text-white bg-blue-600 rounded-full">
            Register
          </button>
        </Link>
        <Link to="/SignIn">
          <button className="w-full py-2 mb-2 text-lg text-blue-600 bg-white rounded-full">
            Log in
          </button>
        </Link>
        <p className="mb-2 mt-10">Or continue with:</p>
        <div className="flex justify-center space-x-4 mb-4">
          <img src={AppleLogo} alt="Apple" className="w-10" />
          <img src={GoogleLogo} alt="Google" className="w-10" />
          <img src={FacebookLogo} alt="Facebook" className="w-10" />
        </div>
        <p className="text-xs">
          By registering you are accepting our{" "}
          <a href="#" className="underline">
            terms of use
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
