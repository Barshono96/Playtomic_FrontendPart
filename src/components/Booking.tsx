import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickImage1 from "../Assets/slide1.jpg";
import SlickImage2 from "../Assets/slide2.jpg";
import SlickImage3 from "../Assets/slide3.jpg";
import axiosInstance from "../api/axiosInstance";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

interface BookingData {
  date: string;
  time: string;
  duration: number;
  playerCount: number;
}

const Booking: React.FC = () => {
  const { clubId, courtId } = useParams<{ clubId: string; courtId: string }>();
  const [userId, setUserId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [playerCount, setPlayerCount] = useState<number>(2);
  const [duration, setDuration] = useState<number>(30);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const navigate = useNavigate();

  const times = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const durations = [
    { label: "30 minutes", value: 30 },
    { label: "60 minutes", value: 60 },
    { label: "120 minutes", value: 120 },
  ];

  useEffect(() => {
    // Retrieve userId from localStorage when the component mounts
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser.userId);
    }
  }, []);

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleIncrement = () => {
    setPlayerCount((prevCount) => (prevCount < 4 ? prevCount + 1 : prevCount));
  };

  const handleDecrement = () => {
    setPlayerCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  const handleDurationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDuration(parseInt(event.target.value));
  };

  const checkBookingConflict = async (): Promise<boolean> => {
    if (!selectedDate || !selectedTime) {
      return false;
    }

    const startTime = selectedTime;
    const endTime = calculateEndTime(selectedTime, duration);

    try {
      const response = await axiosInstance.get(
        `/bookings/conflicts/${clubId}/${courtId}`,
        {
          params: {
            date: format(selectedDate, "yyyy-MM-dd"),
            startTime,
            endTime,
          },
        }
      );
      return response.data.conflict;
    } catch (error) {
      console.error("Error checking booking conflict:", error);
      return false;
    }
  };

  const calculateEndTime = (startTime: string, duration: number): string => {
    const [hours, minutes] = startTime.split(":").map(Number);
    const endHours = hours + Math.floor(duration / 60);
    const endMinutes = (minutes + (duration % 60)) % 60;

    return `${endHours.toString().padStart(2, "0")}:${endMinutes
      .toString()
      .padStart(2, "0")}`;
  };

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedTime || !userId) {
      setError("Please select a date, time, and ensure you are logged in.");
      return;
    }

    const conflict = await checkBookingConflict();
    if (conflict) {
      setShowPopup(true);
      return;
    }

    const bookingData: BookingData = {
      date: format(selectedDate, "yyyy-MM-dd"),
      time: selectedTime,
      duration,
      playerCount,
    };

    try {
      await axiosInstance.post(
        `/bookings/${userId}/${clubId}/${courtId}`,
        bookingData
      );
      navigate("/booking-confirmation", { state: bookingData }); // Navigate with booking details
    } catch (error) {
      console.error("Error creating booking:", error);
      setError("Error creating booking. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-w-screen">
      <Slider {...sliderSettings}>
        <div>
          <img
            className="h-50 w-full object-cover rounded-md"
            src={SlickImage1}
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            className="h-50 w-full object-cover rounded-md"
            src={SlickImage2}
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            className="h-50 w-full object-cover rounded-md"
            src={SlickImage3}
            alt="Slide 3"
          />
        </div>
      </Slider>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold">Club Name</h1>
        <h6 className="text-gray-600 mb-6">Address of the club</h6>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <h2 className="text-lg font-semibold my-4">Select Date</h2>
          <div className="flex justify-center">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
            />
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold my-4">Select Time</h2>
          <div className="grid grid-cols-3 gap-4">
            {times.map((time, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded ${
                  selectedTime === time
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold my-4">Select Duration</h2>
          <select
            value={duration}
            onChange={handleDurationChange}
            className="px-4 py-2 border rounded w-full"
          >
            {durations.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold my-4">Select Player Count</h2>
          <div className="flex items-center">
            <button
              className="px-4 py-2 border rounded bg-white text-gray-800"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="px-4 py-2">{playerCount}</span>
            <button
              className="px-4 py-2 border rounded bg-white text-gray-800"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-lg font-semibold">Court Already Booked</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
