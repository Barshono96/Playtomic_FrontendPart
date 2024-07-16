import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CreateClub from "./components/CreateClub";
import ClubPage from "./pages/ClubPage";
import MainPage from "./components/MainPage";
import Booking from "./components/Booking";
import ClubList from "./components/ClubList";
import VcourtList from "./components/VendorCourtList"
import Error from "./pages/Error.page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },

  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "mainpage",
    element: <MainPage />,
  },
  {
    path: "create-club",
    element: <CreateClub />,
  },
  {
    path: "clubs/:clubId",
    element: <ClubPage />,
  },
  {
    path: "booking",
    element: <Booking />,
  },
  {
    path: "clublist",
    element: <ClubList />,
  },
  {
    path: "courtlist",
    element: <VcourtList />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
