import React, { useState } from "react";
import Slider from "react-slick";
import SlickImage1 from "../Assets/slide1.jpg"; // Replace with your actual image paths
import SlickImage2 from "../Assets/slide2.jpg";
import SlickImage3 from "../Assets/slide3.jpg";
import Calendar from 'react-calendar';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = [
    "Tue 09 Jul",
    "Wed 10 Jul",
    "Thu 11 Jul",
    "Fri 12 Jul",
    "Sat 13 Jul",
  ];
  const times = [
    "9.00 am",
    "10.00 am",
    "11.00 am",
    "12.00 pm",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
    "4:00 pm",
    "5:00 pm",
    "6:00 pm",
  ];
const [hour, setHour] = useState(times);
const [value, onChange] = useState<Value>(new Date());

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 min-w-screen">
        <Slider {...sliderSettings}>
          <div>
            <img className="h-50  w-100vw object-cover rounded-md" src={SlickImage1} alt="Slide 1" />
          </div>
          <div>
            <img className="h-50 w-100vw object-cover rounded-md" src={SlickImage2} alt="Slide 2" />
          </div>
          <div>
            <img className="h-50 w-100vw object-cover rounded-md" src={SlickImage3} alt="Slide 3" />
          </div>
        </Slider>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        

        <>
          <h1 className="text-2xl font-bold ">Club Name</h1>
          <h6 className="text-gray-600 mb-6">Road 104, Gulshan-2, Dhaka-1230</h6>

          <div className="mb-4">
            <h2 className="text-lg font-semibold my-4">Select Date</h2>
            <Calendar onChange={onChange} value={value} />
            {/* <div className="flex space-x-4 overflow-x-auto">
              {dates.map((date, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded ${
                    selectedDate === date
                      ? "bg-blue-500 text-white"
                      : "bg-white"
                  }`}
                  onClick={() => handleDateClick(date)}
                >
                  {date}
                </button>
              ))}
            </div> */}
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold my-4">Select Time</h2>
            <div className="grid grid-cols-3 gap-4">
              {times.map((time, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border font-semibold rounded whitespace-nowrap  ${
                    selectedTime === time
                      ? "bg-blue-500 text-white"
                      : "bg-white"
                  }`}
                  onClick={() => handleTimeClick(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <button
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              disabled={!selectedDate || !selectedTime}
            >
              Confirm Booking
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Booking;
