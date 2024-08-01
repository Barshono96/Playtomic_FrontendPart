import React, { useEffect, useState } from "react";
import Slide1 from "../Assets/slide1.jpg";
import Slide2 from "../Assets/slide2.jpg";
import Slide3 from "../Assets/slide3.jpg";
import Court1 from "../Assets/Court.jpg";
import Court2 from "../Assets/Bc.jpg";
import Navbar from "./Navbar";
import FixedPlusButton from "./FixedButton";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 min-h-screen flex flex-col relative pt-16 pb-16">
      <Header />
      <ImageSlider />
      <div className="flex-grow">
        <Card user={user} />
      </div>
      <Navbar />
      {user?.userType?.toLowerCase() === "owner" && <FixedPlusButton />}
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-cyan-400 text-white flex justify-between items-center p-6 h-30 fixed top-0 left-0 w-full z-10">
      <h1 className="text-lg max-h-20">Hi shifat 👋</h1>
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

interface CardProps {
  user: any;
}

const Card: React.FC<CardProps> = ({ user }) => {
  const isOwner = user?.userType?.toLowerCase() === "owner";

  return (
    <>
      <div className="m-4 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-2">Find your perfect match</h2>
        <div className="relative">
          <img
            src={Court1}
            alt="Court"
            className="w-full h-48 object-cover rounded"
          />
          {!isOwner ? (
            <Link to="/searchclub">
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 17l6-6-6-6v12z" />
                </svg>
              </button>
            </Link>
          ) : (
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-2 rounded-full cursor-not-allowed"
              disabled
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 17l6-6-6-6v12z" />
              </svg>
            </button>
          )}
        </div>
        <div className="mt-4">
          <p className="text-lg">Book a court</p>
          <p className="text-gray-600">
            If you already know who you are playing with
          </p>
        </div>
      </div>

      <div className="m-4 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-2">Find your Suitable slot</h2>
        <div className="relative">
          <img
            src={Court2}
            alt="Court"
            className="w-full h-48 object-cover rounded"
          />
          {!isOwner ? (
            <Link to="/search-all-courts">
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 17l6-6-6-6v12z" />
                </svg>
              </button>
            </Link>
          ) : (
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-2 rounded-full cursor-not-allowed"
              disabled
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 17l6-6-6-6v12z" />
              </svg>
            </button>
          )}
        </div>
        <div className="mt-4">
          <p className="text-lg">Search court</p>
          <p className="text-gray-600">
            If you already know who you are playing with
          </p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
