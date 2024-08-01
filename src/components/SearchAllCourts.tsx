import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCourts } from "../api/CourtApi";

interface Court {
  id: number;
  type: string;
  start: string;
  end: string;
  slot: string;
  images: string[];
  clubId: number; // Add clubId to Court interface
}

const SearchAllCourts: React.FC = () => {
  const [courts, setCourts] = useState<Court[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch courts data
    const fetchCourts = async () => {
      try {
        const fetchedCourts = await getAllCourts();
        setCourts(fetchedCourts);
      } catch (error) {
        console.error("Error fetching courts", error);
      }
    };

    // Retrieve userId from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser.userId);
    }

    fetchCourts();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCourtClick = (court: Court) => {
    if (userId) {
      navigate(`/booking/${court.clubId}/${court.id}`, { state: { userId } }); // Pass both clubId and courtId, and userId
    } else {
      console.error("User ID is not available");
    }
  };

  const filteredCourts = courts.filter((court) =>
    court.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative p-4 bg-gradient-to-br from-blue-100 to-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        All Courts
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search courts..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-md p-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
        {filteredCourts.map((court) => (
          <div
            key={court.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => handleCourtClick(court)}
          >
            <img
              src={court.images[0]}
              alt={court.type}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-blue-700">{court.type}</h3>
              <p>Start: {court.start}</p>
              <p>End: {court.end}</p>
              <p>Slot: {JSON.stringify(court.slot)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchAllCourts;
