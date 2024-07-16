import React from "react";
import Slide1 from "../Assets/slide1.jpg"; 
import Slide2 from "../Assets/slide2.jpg";
import Slide3 from "../Assets/slide3.jpg";
import Slide4 from "../Assets/Court.jpg";

interface Club {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
}

const clubs: Club[] = [
  {
    id: 1,
    name: "Club 1",
    address: "Address 1",
    imageUrl: Slide1, // Use the imported image
  },
  {
    id: 2,
    name: "Club 2",
    address: "Address 2",
    imageUrl: Slide2, // Use the imported image or import and use another image
  },
  {
    id: 3,
    name: "Club 3",
    address: "Address 3",
    imageUrl: Slide3, // Use the imported image or import and use another image
  },
  {
    id: 4,
    name: "Club 4",
    address: "Address 4",
    imageUrl: Slide4, // Use the imported image or import and use another image
  },
  // Add more clubs as needed
];

const ClubList: React.FC = () => {
  return (
    <div className="relative p-4 bg-gradient-to-br from-blue-100 to-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Your Club List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={club.imageUrl}
              alt={club.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-blue-700">{club.name}</h2>
              <p className="text-gray-600">{club.address}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="fixed bottom-4 right-4 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
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
    </div>
  );
};

export default ClubList;
