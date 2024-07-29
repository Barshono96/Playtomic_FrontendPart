// src/components/SearchCourt.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourts } from "../api/CourtApi";

interface Court {
  id: number;
  type: string;
  start: string;
  end: string;
  slot: string;
  images: string[];
}

const SearchCourt: React.FC = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const [courts, setCourts] = useState<Court[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const fetchedCourts = await getCourts(clubId!);
        setCourts(fetchedCourts);
      } catch (error) {
        console.error("Error fetching courts", error);
      }
    };

    fetchCourts();
  }, [clubId]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourts = courts.filter((court) =>
    court.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative p-4 bg-gradient-to-br from-blue-100 to-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Courts
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
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
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

export default SearchCourt;
