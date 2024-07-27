import React, { useEffect, useState } from "react";
import Slide1 from "../Assets/slide1.jpg";
import Slide2 from "../Assets/slide2.jpg";
import Slide3 from "../Assets/slide3.jpg";
import Slide4 from "../Assets/Court.jpg";
import  Navbar  from "./Navbar";
import FixedPlusButton from "./FixedButton";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") as any ) ;
  console.log("user=====", user);
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 min-h-screen flex flex-col relative">
      <Header />
      <ImageSlider />
      <div className="flex-grow">
        <Card />
      </div>
      <Navbar />
      {user.userType.toLowerCase() =="vendor" && <FixedPlusButton/>}
      {/* <FixedPlusButton /> */}
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




export default MainPage;
