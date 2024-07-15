import React, { useState } from 'react';
import BackgroundImage from '../Assets/Background.jpg';
import { createClub } from '../api/clubApi';
import { useNavigate } from 'react-router-dom';

const CreateClub: React.FC = () => {
  const [clubData, setClubData] = useState({
    clubname: '',
    address: '',
    country: '',
    city: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClubData({ ...clubData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userId = '1';
      await createClub(userId, clubData);
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Error creating club', error);

    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Create Club</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Club Name</label>
            <input
              type="text"
              name="clubname"
              value={clubData.clubname}
              onChange={handleChange}
              placeholder="Enter club name"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={clubData.address}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={clubData.country}
              onChange={handleChange}
              placeholder="Enter country"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={clubData.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Create Club
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateClub;
