// import React, { useState } from "react";
// import Slider from "react-slick";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import SlickImage1 from "../Assets/slide1.jpg";
// import SlickImage2 from "../Assets/slide2.jpg";
// import SlickImage3 from "../Assets/slide3.jpg";
// import axiosInstance from "../api/axiosInstance";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// interface BookingData {
//   hour:string,
//   time: Date;
//   slot: number;
// }

// const Booking: React.FC = () => {
//   const {userId,clubId,courtId} = useParams();
//   // console.log("userId:", userId);
//   // console.log("clubId:", clubId);
//   // console.log("courtId:", courtId);

//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);
//   const [playerCount, setPlayerCount] = useState<number>(2); 
  
//   const times = [
//     "9:00 am",
//     "10:00 am",
//     "11:00 am",
//     "12:00 pm",
//     "1:00 pm",
//     "2:00 pm",
//     "3:00 pm",
//     "4:00 pm",
//     "5:00 pm",
//     "6:00 pm",
//   ];

//   const handleTimeClick = (time: string) => {
//     setSelectedTime(time);
//   };

  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true, 
  //   autoplaySpeed: 3000, 
  // };

//   const handleIncrement = () => {
//     setPlayerCount((prevCount) => (prevCount < 4 ? prevCount + 1 : prevCount));
//   };

//   const handleDecrement = () => {
//     setPlayerCount((prevCount) => (prevCount > 2 ? prevCount - 1 : prevCount));
//   };

//   const handleConfirmBooking = async () => {
//     if (!selectedDate || !selectedTime) {
//       return;
//     }

//     const bookingData: BookingData = {
//       time: new Date(selectedDate),
//       // time: selectedDate,
//       hour:selectedTime,
//       slot: playerCount,
//     };
//     console.log("bookingData======",bookingData);

//     try {
//       const response = await axiosInstance.post(`/bookings/${userId}/${clubId}/${courtId}`, bookingData);

//       console.log("Booking successful:", response.data);
//     } catch (error) {
//       console.error("Error creating booking:", error);
//     }
//   };

//   return (
    // <div className="bg-gray-100 min-w-screen">
    //   <Slider {...sliderSettings}>
    //     <div>
    //       <img className="h-50 w-full object-cover rounded-md" src={SlickImage1} alt="Slide 1" />
    //     </div>
    //     <div>
    //       <img className="h-50 w-full object-cover rounded-md" src={SlickImage2} alt="Slide 2" />
    //     </div>
    //     <div>
    //       <img className="h-50 w-full object-cover rounded-md" src={SlickImage3} alt="Slide 3" />
    //     </div>
    //   </Slider>
//       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-2xl font-bold">Club Name</h1>
//         <h6 className="text-gray-600 mb-6">Road 104, Gulshan-2, Dhaka-1230</h6>

//         <div className="mb-4">
//           <h2 className="text-lg font-semibold my-4">Select Date</h2>

//           <div className="flex justify-center">
//             <DatePicker
//               selected={selectedDate}
//               onChange={(date: Date | null) => setSelectedDate(date)}
//               inline
//             />
//           </div>
//         </div>

//         <div className="mb-4">
//           <h2 className="text-lg font-semibold my-4">Select Time</h2>
//           <div className="grid grid-cols-3 gap-4">
//             {times.map((time, index) => (
//               <button
//                 key={index}
//                 className={`px-4 py-2 border font-semibold rounded whitespace-nowrap ${
//                   selectedTime === time ? "bg-blue-500 text-white" : "bg-white"
//                 }`}
//                 onClick={() => handleTimeClick(time)}
//               >
//                 {time}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mb-4">
//           <h2 className="text-lg font-semibold my-4">Player Count</h2>
//           <div className="flex items-center justify-center">
//             <button
//               onClick={handleDecrement}
//               className="px-4 py-2 bg-gray-300 text-gray-800 rounded-l-md hover:bg-gray-400 transition-colors duration-200"
//               disabled={playerCount === 2}
//             >
//               -
//             </button>
//             <div className="px-4 py-2 bg-gray-100 text-gray-800 border-t border-b">
//               {playerCount}
//             </div>
//             <button
//               onClick={handleIncrement}
//               className="px-4 py-2 bg-gray-300 text-gray-800 rounded-r-md hover:bg-gray-400 transition-colors duration-200"
//               disabled={playerCount === 4}
//             >
//               +
//             </button>
//           </div>
//         </div>

//         <div className="mt-6">
//           <button
//             className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors duration-200"
//             disabled={!selectedDate || !selectedTime}
//             onClick={handleConfirmBooking}
//           >
//             Confirm Booking
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;




import React, { useState } from "react";
import Slider from "react-slick";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickImage1 from "../Assets/slide1.jpg";
import SlickImage2 from "../Assets/slide2.jpg";
import SlickImage3 from "../Assets/slide3.jpg";
import axiosInstance from "../api/axiosInstance";
import axios from "axios";
import { useParams } from "react-router-dom";

interface BookingData {
  date: string;
  time: string;
  duration: number;
  playerCount: number;
}

const Booking: React.FC = () => {
  const { userId, clubId, courtId } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [playerCount, setPlayerCount] = useState<number>(2);
  const [duration, setDuration] = useState<number>(30);

  const times = [
    '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm'
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
    { label: '30 minutes', value: 30 },
    { label: '60 minutes', value: 60 },
    { label: '120 minutes', value: 120 },
  ];

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleIncrement = () => {
    setPlayerCount(prevCount => (prevCount < 4 ? prevCount + 1 : prevCount));
  };

  const handleDecrement = () => {
    setPlayerCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDuration(parseInt(event.target.value));
  };

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedTime) {
      return;
    }

    const bookingData: BookingData = {
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
      duration,
      playerCount,
    };

    console.log("bookingdata============",bookingData);

    try {
      const response = await axiosInstance.post(`/bookings/${userId}/${clubId}/${courtId}`, bookingData);
      console.log('Booking successful:', response.data);
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-w-screen">
      <Slider {...sliderSettings}>
         <div>
           <img className="h-50 w-full object-cover rounded-md" src={SlickImage1} alt="Slide 1" />
         </div>
         <div>
           <img className="h-50 w-full object-cover rounded-md" src={SlickImage2} alt="Slide 2" />
         </div>
         <div>
           <img className="h-50 w-full object-cover rounded-md" src={SlickImage3} alt="Slide 3" />
         </div>
       </Slider>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold">Club Name</h1>
        <h6 className="text-gray-600 mb-6">Address of the club</h6>
        <div className="mb-4">
          <h2 className="text-lg font-semibold my-4">Select Date</h2>
          <div className="flex justify-center">
            <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} inline />
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold my-4">Select Time</h2>
          <div className="grid grid-cols-3 gap-4">
            {times.map((time, index) => (
              <button key={index} className={`px-4 py-2 border rounded ${selectedTime === time ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`} onClick={() => handleTimeClick(time)}>{time}</button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold my-4">Select Duration</h2>
          <select value={duration} onChange={handleDurationChange} className="px-4 py-2 border rounded w-full">
            {durations.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold my-4">Select Player Count</h2>
          <div className="flex items-center">
            <button className="px-4 py-2 border rounded bg-white text-gray-800" onClick={handleDecrement}>-</button>
            <span className="px-4 py-2">{playerCount}</span>
            <button className="px-4 py-2 border rounded bg-white text-gray-800" onClick={handleIncrement}>+</button>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
