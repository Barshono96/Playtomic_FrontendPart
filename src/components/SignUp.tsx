import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../api/authApi';
import SignUpImage from '../Assets/Login.avif';
import { User } from '../types/User';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    username: '',
    email: '',
    type: '',
    address: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
      console.log('User signed up successfully:', response);
    } catch (error) {
      console.error('Error signing up user:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img src={SignUpImage} alt="Illustration" className="w-24 h-24" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-6">Playtomic</h1>
        <h3 className="text-2xl font-normal text-center mb-6">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Type</option>
              <option value="Player">Player</option>
              <option value="Club Owner">Club Owner</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main St"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Or sign up using{' '}
            <Link to="#" className="text-blue-600 hover:underline">
              Social Media
            </Link>
            .
          </p>
          <p className="text-sm mt-2">
            Already have an account?{' '}
            <Link to="/sign-in" className="text-blue-600 hover:underline">
              Sign In
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
