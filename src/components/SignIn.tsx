import React from 'react';
import SignInImage from '../Assets/Login.avif';

const SignIn: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img
            src={SignInImage} 
            alt="Illustration"
            className="w-24 h-24"
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-6">Playtomic</h1>
        <h3 className="text-2xl font-normal text-center mb-6">Sign In</h3>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
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
          <div className="flex items-center justify-between mb-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Or sign in using <a href="#" className="text-blue-600 hover:underline">Social Media</a>.
          </p>
          <p className="text-sm mt-2">
            Don't have an account yet? <a href="#" className="text-blue-600 hover:underline">Sign up</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
