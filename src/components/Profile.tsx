import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import Navbar from './Navbar';

interface User {
  id: number;
  username: string;
  email: string;
  type: string;
  address: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
          throw new Error('No user found in localStorage');
        }

        const { userId } = JSON.parse(storedUser);
        const response = await axiosInstance.get(`/users/${userId}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signin'); // Navigate to the SignIn page after logout
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">User Profile</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <div className="w-full p-2 border border-gray-300 rounded mt-1">{user.username}</div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <div className="w-full p-2 border border-gray-300 rounded mt-1">{user.email}</div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <div className="w-full p-2 border border-gray-300 rounded mt-1">{user.type}</div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <div className="w-full p-2 border border-gray-300 rounded mt-1">{user.address}</div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default Profile;
