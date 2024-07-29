// import React, { useState } from "react";
// // import BackgroundImage from "../Assets/clubimages.jpg";
// import { createClub } from "../api/clubApi";
// import { useNavigate } from "react-router-dom";

// const CreateClub: React.FC = () => {
//   const [clubData, setClubData] = useState({
//     clubname: "",
//     address: "",
//     country: "",
//     city: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setClubData({ ...clubData, [name]: value });
//   };

  

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const userId = "1";
//       await createClub(userId, clubData);
//       navigate("/clublist");
//     } catch (error) {
//       console.error("Error creating club", error);
//     }
//   };

//   return (
//     <div
//       className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
//       // style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       <div className=" p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h1 className="text-2xl font-bold text-center mb-6">Create Club</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-black-700 font-bold">Club Name</label>
//             <input
//               type="text"
//               name="clubname"
//               value={clubData.clubname}
//               onChange={handleChange}
//               placeholder="Enter club name"
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black-700 font-bold">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={clubData.address}
//               onChange={handleChange}
//               placeholder="Enter address"
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black-700 font-bold">Country</label>
//             <input
//               type="text"
//               name="country"
//               value={clubData.country}
//               onChange={handleChange}
//               placeholder="Enter country"
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black-700 font-bold">City</label>
//             <input
//               type="text"
//               name="city"
//               value={clubData.city}
//               onChange={handleChange}
//               placeholder="Enter city"
//               className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
//           >
//             Create Club
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateClub;

import React, { useState } from "react";
import axios from "axios";
import { createClub } from "../api/clubApi";
import { useNavigate } from "react-router-dom";

interface ClubData {
  clubname: string;
  address: string;
  country: string;
  city: string;
  images: string[];
}

const CreateClub: React.FC = () => {
  const [clubData, setClubData] = useState<ClubData>({
    clubname: "",
    address: "",
    country: "",
    city: "",
    images: [],
  });

  // const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClubData({ ...clubData, [name]: value });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageUrls: string[] = [];

      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "unsigned_preset");
        formData.append("folder", "playtomic");

        try {
          const res = await axios.post("https://api.cloudinary.com/v1_1/dd3xobziv/image/upload", formData);
          imageUrls.push(res.data.secure_url);
          console.log("Image uploaded:", res.data.secure_url); // Debug line
        } catch (error) {
          console.error("Error uploading image", error);
        }
      }

      setClubData({ ...clubData, images: imageUrls });
      console.log("Updated clubData with images:", { ...clubData, images: imageUrls }); // Debug line
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = localStorage.getItem('user');
      if (user) {
        const { userId } = JSON.parse(user);
        await createClub(userId, clubData);
        // navigate("/clublist");
      }
    } catch (error) {
      console.error("Error creating club", error);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center">
      <div className="p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Create Club</h1>
        <form onSubmit={handleSubmit}>
          {/* Club Name */}
          <div className="mb-4">
            <label className="block text-black-700 font-bold">Club Name</label>
            <input
              type="text"
              name="clubname"
              value={clubData.clubname}
              onChange={handleChange}
              placeholder="Enter club name"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Address */}
          <div className="mb-4">
            <label className="block text-black-700 font-bold">Address</label>
            <input
              type="text"
              name="address"
              value={clubData.address}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Country */}
          <div className="mb-4">
            <label className="block text-black-700 font-bold">Country</label>
            <input
              type="text"
              name="country"
              value={clubData.country}
              onChange={handleChange}
              placeholder="Enter country"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* City */}
          <div className="mb-4">
            <label className="block text-black-700 font-bold">City</label>
            <input
              type="text"
              name="city"
              value={clubData.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Images */}
          <div className="mb-4">
            <label className="block text-black-700 font-bold">Images</label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Create Club
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateClub;
