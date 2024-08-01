// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MainPage from "./components/MainPage";
import CreateClub from "./components/CreateClub";
import CourtPage from "./pages/CourtPage";
import Booking from "./components/Booking";
import VClubList from "./components/VendorClubList";
import VcourtList from "./components/VendorCourtList";
import ProfilePage from "./components/Profile";
import Error from "./pages/Error.page";
import NewsPage from "./components/News.Page";
import SearchClub from "./components/SearchClub";
import SearchCourt from "./components/SearchCourt";
import SearchAllCourts from "./components/SearchAllCourts";
import StartPage from "./components/StartPage";
import ProtectedRoute from "./components/ProtectedRoute";
import BookingConfirmation from "./pages/BookingConfirmation";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/mainpage"
          element={<ProtectedRoute element={<MainPage />} />}
        />
        <Route
          path="/create-club"
          element={<ProtectedRoute element={<CreateClub />} />}
        />
        <Route
          path="/createcourts/:clubId/courts"
          element={<ProtectedRoute element={<CourtPage />} />}
        />
        <Route
          path="/booking/:clubId/:courtId"
          element={<ProtectedRoute element={<Booking />} />}
        />
        <Route
          path="/booking-confirmation"
          element={<ProtectedRoute element={<BookingConfirmation />} />}
        />
        <Route
          path="users/:userId/clubs"
          element={<ProtectedRoute element={<VClubList />} />}
        />
        {/* <Route
          path="/courtlist"
          element={<ProtectedRoute element={<VcourtList />} />}
        /> */}
        <Route
          path="/profile"
          element={<ProtectedRoute element={<ProfilePage />} />}
        />
        <Route
          path="/news"
          element={<ProtectedRoute element={<NewsPage />} />}
        />

        <Route
          path="/searchclub"
          element={<ProtectedRoute element={<SearchClub />} />}
        />
        <Route
          path="/searchcourts/:clubId/courts"
          element={<ProtectedRoute element={<SearchCourt />} />}
        />
        <Route
          path="/search-all-courts"
          element={<ProtectedRoute element={<SearchAllCourts />} />}
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
