// src/pages/BookingConfirmation.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Update the path as per your project structure

interface BookingData {
  date: string;
  time: string;
  duration: number;
  playerCount: number;
}

const BookingConfirmation: React.FC = () => {
  const location = useLocation();
  const bookingDetails = location.state as BookingData | undefined;

  if (!bookingDetails) {
    return <div>No booking details found.</div>;
  }

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 min-w-screen flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-2xl p-8 transform transition-transform hover:scale-105 duration-300">
          <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6">Booking Confirmation</h1>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-xl font-semibold text-gray-800"><strong>Date:</strong></p>
              <p className="text-xl text-gray-900">{bookingDetails.date}</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-xl font-semibold text-gray-800"><strong>Time:</strong></p>
              <p className="text-xl text-gray-900">{bookingDetails.time}</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-xl font-semibold text-gray-800"><strong>Duration:</strong></p>
              <p className="text-xl text-gray-900">{bookingDetails.duration} minutes</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold text-gray-800"><strong>Player Count:</strong></p>
              <p className="text-xl text-gray-900">{bookingDetails.playerCount}</p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default BookingConfirmation;
