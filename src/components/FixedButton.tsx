import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FixedPlusButton: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  const handleCreateClub = () => {
    navigate("/create-club"); // Navigate to Create Club page
  };

  const handleShowClub = () => {
    navigate("/users/${userId}/clubs"); // Navigate to Show Club page
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="fixed bottom-20 right-4 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-10"
        aria-label="Add Club"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
      </button>

      {menuOpen && (
        <div className="fixed bottom-28 right-4 bg-white border border-gray-300 shadow-lg rounded-lg p-2 z-20">
          <div className="flex flex-col space-y-1">
            <button
              onClick={handleCreateClub}
              className="bg-blue-500 text-white rounded px-4 py-2 shadow-lg hover:bg-gray-700 transition-colors"
            >
              Create Club
            </button>
            <button
              onClick={handleShowClub}
              className="bg-blue-500 text-white rounded px-4 py-2 shadow-lg hover:bg-gray-700 transition-colors"
            >
              Show Club
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FixedPlusButton;
