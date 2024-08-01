import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Navbar from "./Navbar";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";

interface User {
  id: number;
  username: string;
  email: string;
  type: string;
  address: string;
}

interface Booking {
  id: number;
  date: string;
  time: string;
  duration: number;
  playerCount: number;
  court: { name: string };
}

// Define the Profile component
const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const sliderRef = useRef<Slider | null>(null); // Reference to the slider

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
          throw new Error("No user found in localStorage");
        }

        const { userId } = JSON.parse(storedUser);
        const response = await axiosInstance.get(`/users/${userId}`);
        setUser(response.data);

        // Fetch user bookings
        const bookingsResponse = await axiosInstance.get(
          `/bookings/user/${userId}`
        );
        setBookings(bookingsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signin"); // Navigate to the SignIn page after logout
  };

  const slideRight = () => {
    sliderRef.current?.slickNext();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mt-6">
        <h1 className="text-2xl font-bold text-center mb-6">User Profile</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <div className="w-full p-2 border border-gray-300 rounded mt-1">
            {user.username}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <div className="w-full p-2 border border-gray-300 rounded mt-1">
            {user.email}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <div className="w-full p-2 border border-gray-300 rounded mt-1">
            {user.type}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <div className="w-full p-2 border border-gray-300 rounded mt-1">
            {user.address}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full  mb-12 relative">
        <h2 className="text-xl font-bold mb-4">My Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings available.</p>
        ) : (
          <div className="relative">
            <Slider {...sliderSettings} ref={sliderRef}>
              {bookings.map((booking, index) => (
                <div
                  key={booking.id}
                  className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col"
                >
                  <h2 className="text-lg font-bold mb-2">
                    Booking-{index + 1}
                  </h2>
                  <h6 className="text-lg font-semibold mb-0">Court:</h6>
                  <p>
                    <strong>Date:</strong> {booking.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {booking.time}
                  </p>
                  <p>
                    <strong>Duration:</strong> {booking.duration} minutes
                  </p>
                  <p>
                    <strong>Player Count:</strong> {booking.playerCount}
                  </p>
                </div>
              ))}
            </Slider>
            <button
              onClick={slideRight}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 text-white rounded-full shadow-lg p-3 hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              style={{ zIndex: 10 }}
            >
              <FaArrowRight className="text-2xl" />
            </button>
          </div>
        )}
        <div className="mt-12">
          {" "}
          {/* Increased margin-top */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white p-3 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 flex items-center justify-center"
          >
            <span className="text-sm font-semibold">Logout</span>
          </button>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Profile;
