// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getClubs } from "../api/clubApi";

// interface Club {
//   id: number;
//   clubname: string;
//   address: string;
//   country: string;
//   city: string;
//   images: string[];
// }

// const VendorClubList: React.FC = () => {
//   const navigate = useNavigate();
//   const [clubs, setClubs] = useState<Club[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [userId, setUserId] = useState<string | null>(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       if (parsedUser.userId) {
//         setUserId(parsedUser.userId);
//       } else {
//         console.error("User ID not found in stored user data");
//       }
//     } else {
//       console.error("No user data found in localStorage");
//     }
//   }, []);

//   useEffect(() => {
//     const fetchClubs = async () => {
//       try {
//         if (userId) {
//           const fetchedClubs = await getClubs(userId); // Fetch clubs by user ID
//           setClubs(fetchedClubs);
//         } else {
//           console.error("User ID is not set",userId);
//         }
//       } catch (error) {
//         console.error("Error fetching clubs", error);
//       }
//     };

//     fetchClubs();
//   }, [userId]);

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredClubs = clubs.filter((club) =>
//     club.clubname.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleClubClick = (clubId: number) => {
//     navigate(`/club/${clubId}`);
//   };

//   return (
//     <div className="relative p-4 bg-gradient-to-br from-blue-100 to-white min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
//         Your Club List
//       </h1>

//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search clubs..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="w-full max-w-md p-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredClubs.map((club) => (
//           <div
//             key={club.id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
//             onClick={() => handleClubClick(club.id)}
//           >
//             <img
//               src={club.images[0] || "https://via.placeholder.com/500"} 
//               alt={club.clubname || "Club Image"}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-2xl font-bold text-blue-700">
//                 {club.clubname || "No Name"}
//               </h2>
//               <p className="text-gray-600">{club.address || "No Address"}</p>
//               <p className="text-gray-600">{club.country || "No Country"}</p>
//               <p className="text-gray-600">{club.city || "No City"}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Link to="/create-club">
//         <button
//           className="fixed bottom-4 right-4 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
//           aria-label="Add Club"
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 4v16m8-8H4"
//             ></path>
//           </svg>
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default VendorClubList;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getClubs } from "../api/clubApi";

interface Club {
  id: number;
  clubname: string;
  address: string;
  country: string;
  city: string;
  images: string[];
}

const VendorClubList: React.FC = () => {
  const navigate = useNavigate();
  const [clubs, setClubs] = useState<Club[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.userId) {
        setUserId(parsedUser.userId);
      } else {
        console.error("User ID not found in stored user data");
      }
    } else {
      console.error("No user data found in localStorage");
    }
  }, []);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        if (userId) {
          const fetchedClubs = await getClubs(userId); // Fetch clubs by user ID
          setClubs(fetchedClubs);
        } else {
          console.error("User ID is not set", userId);
        }
      } catch (error) {
        console.error("Error fetching clubs", error);
      }
    };

    fetchClubs();
  }, [userId]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredClubs = clubs.filter((club) =>
    club.clubname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClubClick = (clubId: number) => {
    navigate(`/createcourts/${clubId}/courts`); // Navigate to CourtPage with clubId
  };

  return (
    <div className="relative p-4 bg-gradient-to-br from-blue-100 to-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Your Club List
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search clubs..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-md p-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club) => (
          <div
            key={club.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => handleClubClick(club.id)}
          >
            <img
              src={club.images[0] || "https://via.placeholder.com/500"} 
              alt={club.clubname || "Club Image"}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-blue-700">
                {club.clubname || "No Name"}
              </h2>
              <p className="text-gray-600">{club.address || "No Address"}</p>
              <p className="text-gray-600">{club.country || "No Country"}</p>
              <p className="text-gray-600">{club.city || "No City"}</p>
            </div>
          </div>
        ))}
      </div>

      <Link to="/create-club">
        <button
          className="fixed bottom-4 right-4 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
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
      </Link>
    </div>
  );
};

export default VendorClubList;
