import React, { useEffect, useState } from "react";
import Slide1 from "../Assets/slide1.jpg";
import Slide2 from "../Assets/slide2.jpg";
import Slide3 from "../Assets/slide3.jpg";
import Slide4 from "../Assets/Court.jpg";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 min-h-screen flex flex-col relative">
      <Header />
      <ImageSlider />
      <div className="flex-grow">
        <Card />
      </div>
      <Navbar />
      <FixedPlusButton />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white flex justify-between items-center p-4">
      <h1 className="text-lg">Hi shifat 👋</h1>
      <button className="text-white">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
    </header>
  );
};

const ImageSlider: React.FC = () => {
  const slides = [Slide1, Slide2, Slide3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="h-64 bg-gray-200 relative overflow-hidden">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

const Card: React.FC = () => {
  return (
    <div className="m-4 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-2">Find your perfect match</h2>
      <div className="relative">
        <img
          src={Slide4}
          alt="Court"
          className="w-full h-48 object-cover rounded"
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 17l6-6-6-6v12z" />
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <p className="text-lg">Book a court</p>
        <p className="text-gray-600">
          If you already know who you are playing with
        </p>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-inner flex justify-around p-4">
      <button className="text-blue-700">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l-5.5 9h11L12 2zM2 20h20v2H2v-2zm10-4.5l-5.5 9h11l-5.5-9z" />
        </svg>
        <span className="block text-xs">Home</span>
      </button>
      <Link to="/news">
        <button className="text-blue-700">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 12h18v2H3v-2zm0 6h18v2H3v-2zM3 6h18v2H3V6z" />
          </svg>
          <span className="block text-xs">News</span>
        </button>
      </Link>
      <Link to="/profile">
        <button className="text-blue-700">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a7 7 0 00-7 7v5H4a2 2 0 00-2 2v2a2 2 0 002 2h16a2 2 0 002-2v-2a2 2 0 00-2-2h-1V9a7 7 0 00-7-7zm-7 9a5 5 0 1110 0v5H5v-5zm10 5H9v5h6v-5z" />
          </svg>
          <span className="block text-xs">Profile</span>
        </button>
      </Link>
    </nav>
  );
};

const FixedPlusButton: React.FC = () => {
  return (
    <button
      className="fixed bottom-20 right-4 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
      aria-label="Add Club"
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        ></path>
      </svg>
    </button>
  );
};

export default MainPage;
