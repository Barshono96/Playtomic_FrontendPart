import React from 'react'
import { GoHome } from "react-icons/go";
import { IoNewspaperOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-inner flex justify-around p-4">
      <button className="text-blue-700">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l-5.5 9h11L12 2zM2 20h20v2H2v-2zm10-4.5l-5.5 9h11l-5.5-9z" />
        </svg>
        <span className="block text-xs">Home</span>
      </button>
      <Link to="/news">
        <button className="text-blue-700">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 12h18v2H3v-2zm0 6h18v2H3v-2zM3 6h18v2H3V6z" />
          </svg>
          <span className="block text-xs">News</span>
        </button>
      </Link>
      <Link to="/profile">
        <button className="text-blue-700">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a7 7 0 00-7 7v5H4a2 2 0 00-2 2v2a2 2 0 002 2h16a2 2 0 002-2v-2a2 2 0 00-2-2h-1V9a7 7 0 00-7-7zm-7 9a5 5 0 1110 0v5H5v-5zm10 5H9v5h6v-5z" />
          </svg>
          <span className="block text-xs">Profile</span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;