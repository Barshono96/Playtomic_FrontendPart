import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllClubs } from "../api/clubApi";

interface Club {
  id: number;
  clubname: string;
  address: string;
  country: string;
  city: string;
  images: string[];
}

const SearchClub: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const fetchedClubs = await getAllClubs(); // Fetch all clubs
        setClubs(fetchedClubs);
        console.log("clubs======",getAllClubs);
      } catch (error) {
        console.error("Error fetching clubs", error);
      }
    };

    fetchClubs();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredClubs = clubs.filter((club) =>
    club.clubname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative p-4 bg-gradient-to-br from-blue-100 to-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Clubs
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search clubs..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-md p-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
        {filteredClubs.map((club) => (
          <Link to={`/searchcourts/${club.id}/courts`} key={club.id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img
                src={club.images[0]}
                alt={club.clubname}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-blue-700">
                  {club.clubname}
                </h3>
                <p>Address: {club.address}</p>
                <p>Country: {club.country}</p>
                <p>City: {club.city}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchClub;
