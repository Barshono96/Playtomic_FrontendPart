import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MainPage from "./components/MainPage";
import CreateClub from "./components/CreateClub";
import ClubPage from "./pages/ClubPage";
import Booking from "./components/Booking";
import VClubList from "./components/VendorClubList";
import VcourtList from "./components/VendorCourtList";
import Error from "./pages/Error.page";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createclub" element={<CreateClub />} />
        <Route path="/clubs/:clubId" element={<ClubPage />} />
        <Route path="/booking/:userId/:clubId/:courtId" element={<Booking />} />
        <Route path="clublist" element={<VClubList />} />
        <Route path="courtlist" element={<VcourtList />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
