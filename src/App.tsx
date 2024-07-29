// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import MainPage from "./components/MainPage";
// import CreateClub from "./components/CreateClub";
// import ClubPage from "./pages/ClubPage";
// import Booking from "./components/Booking";
// import VClubList from "./components/VendorClubList";
// import VcourtList from "./components/VendorCourtList";
// import ProfilePage from "./components/Profile";
// import Error from "./pages/Error.page";
// import NewsPage from "./components/News.Page";
// import SearchClub from "./components/SearchClub";
// import SearchCourt from "./components/SearchCourt";
// import StartPage from "./components/StartPage";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<StartPage />} />
//         <Route path="/mainpage" element={<MainPage />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/createclub" element={<CreateClub />} />
//         <Route path="/clubs/:clubId" element={<ClubPage />} />
//         <Route path="/booking/:userId/:clubId/:courtId" element={<Booking />} />
//         <Route path="/clublist" element={<VClubList />} />
//         <Route path="/courtlist" element={<VcourtList />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/news" element={<NewsPage />} />
//         <Route path="/searchclub" element={<SearchClub />} />
//         <Route path="/searchcourt" element={<SearchCourt />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// src/App.tsx
// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import CreateClub from './components/CreateClub';
import CourtPage from './pages/CourtPage';
import Booking from './components/Booking';
// import VClubList from './components/VendorClubList';
// import VcourtList from './components/VendorCourtList';
import ProfilePage from './components/Profile';
import Error from './pages/Error.page';
import NewsPage from './components/News.Page';
import SearchClub from './components/SearchClub';
import SearchCourt from './components/SearchCourt';
import StartPage from './components/StartPage';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mainpage" element={<ProtectedRoute element={<MainPage />} />} />
        <Route path="/createclubs/:userId/clubs" element={<ProtectedRoute element={<CreateClub />} />} />
        <Route path="/createcourts/:clubId/courts" element={<ProtectedRoute element={<CourtPage />} />} />
        <Route path="/booking/:userId/:clubId/:courtId" element={<ProtectedRoute element={<Booking />} />} />
        {/* <Route path="/clublist" element={<ProtectedRoute element={<VClubList />} />} /> 
        <Route path="/courtlist" element={<ProtectedRoute element={<VcourtList />} />} /> */}
        <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />} />
        <Route path="/news" element={<ProtectedRoute element={<NewsPage />} />} />

        <Route path="/searchclub" element={<ProtectedRoute element={<SearchClub />} />} />
        <Route path="/searchcourts" element={<ProtectedRoute element={<SearchCourt />} />} />

        
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;

