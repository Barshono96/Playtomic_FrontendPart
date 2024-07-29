import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../Assets/Home2.png"; // Update the path as per your project structure
import newsIcon from "../Assets/news.png";
import profileIcon from "../Assets/profile-.jpg";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-inner flex justify-around p-4 fixed bottom-0 left-0 w-full z-10">
      <Link to="/mainpage">
        <button className="text-blue-700 flex flex-col items-center">
          <img src={homeIcon} alt="Home" className="w-6 h-6" />
          <span className="block text-xs">Home</span>
        </button>
      </Link>
      <Link to="/news">
        <button className="text-blue-700 flex flex-col items-center">
          <img src={newsIcon} alt="News" className="w-6 h-6" />
          <span className="block text-xs">News</span>
        </button>
      </Link>
      <Link to="/profile">
        <button className="text-blue-700 flex flex-col items-center">
          <img src={profileIcon} alt="Profile" className="w-6 h-6" />
          <span className="block text-xs">Profile</span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
