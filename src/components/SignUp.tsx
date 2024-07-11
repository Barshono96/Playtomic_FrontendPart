import React from 'react';
import SignUpImage from '../Assets/Login.avif';

const SignUp: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img
            src={SignUpImage} 
            alt="Illustration"
            className="w-24 h-24"
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-6">Playtomic</h1>
        <h3 className="text-2xl font-normal text-center mb-6">Sign Up</h3>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="123-456-7890"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Type</label>
            <select
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            >
              <option>Player</option>
              <option></option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              placeholder="123 Main St"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
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
            Or sign up using <a href="#" className="text-blue-600 hover:underline">Social Media</a>.
          </p>
          <p className="text-sm mt-2">
            Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign In</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
