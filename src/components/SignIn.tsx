import React, { useState } from "react";
import { login } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUpImage from "../Assets/Login.avif";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      localStorage.setItem("token", response.token); // Store token in localStorage upon successful login
      localStorage.setItem("user", JSON.stringify(response.sendUserObject));
      console.log("Login response:", response);
      navigate("/MainPage"); // Navigate to main page upon successful login
    } catch (error) {
      console.error("Login failed", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full transform transition-transform hover:scale-105 duration-300 relative z-10">
        <div className="flex justify-center mb-6">
          <img
            src={SignUpImage}
            alt="Illustration"
            className="w-32 h-32 rounded-full border-4 border-teal-500 shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-center text-teal-800 mb-4">
          Playtomic
        </h1>
        <h3 className="text-xl font-medium text-center text-gray-700 mb-8">
          Sign In
        </h3>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-200"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Or sign up using{" "}
            <Link to="#" className="text-teal-600 hover:underline">
              Social Media
            </Link>
            .
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Need to create an account?{" "}
            <Link to="/signup" className="text-teal-600 hover:underline">
              Sign Up
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
