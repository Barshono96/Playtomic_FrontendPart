import React from "react";
import Slide1 from "../Assets/slide1.jpg"; 
import Slide2 from "../Assets/slide2.jpg";
import Slide3 from "../Assets/slide3.jpg";
import Slide4 from "../Assets/Court.jpg";

interface Court {
  id: number;
  name: string;
  imageUrl: string;
}

interface Club {
  id: number;
  name: string;
  courts: Court[];
}

const clubs: Club[] = [
  {
    id: 1,
    name: "Gulshan Club",
    courts: [
      { id: 1, name: "Court 1", imageUrl: Slide1 },
      { id: 2, name: "Court 2", imageUrl: Slide2 },
      { id: 3, name: "Court 3", imageUrl: Slide3 },
      { id: 4, name: "Court 4", imageUrl: Slide4 },
    ],
  },
  // Add more clubs and courts as needed
];

const ClubList: React.FC = () => {
  const club = clubs[0]; // Assuming there is only one club as per the design
  
  return (
    <div className="relative p-4 bg-gradient-to-br from-blue-100 to-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">{club.name}</h1>
      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
        {club.courts.map((court) => (
          <div
            key={court.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={court.imageUrl}
              alt={court.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-blue-700">{court.name}</h3>
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
