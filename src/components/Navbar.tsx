import React from 'react'
import { GoHome } from "react-icons/go";
import { IoNewspaperOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="bg-white p-4 border-t border-gray-200 flex justify-around">
      <button className="flex flex-col items-center">
        <GoHome fontSize={25} />
      </button>
      <button className="flex flex-col items-center">
        <IoNewspaperOutline fontSize={25} />
      </button>
      <button className="flex flex-col items-center">
        <FiUser fontSize={25} />
      </button>
    </nav>
  );
}

export default Navbar