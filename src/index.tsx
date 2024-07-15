// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import Error from "./pages/Error.page";
// import reportWebVitals from "./reportWebVitals";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import CreateClub from "./components/CreateClub";
// import CreateCourt from "./components/CreateCourt"
// import MainPage from "./components/MainPage";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <App />
//     // errorElement: <Error />,
//   },
//   {
//     path: "/login",
//     element: <SignIn />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
//   {
//     path: "/mainpage",
//     element: <MainPage />,
//   },
//   {
//     path: "/addclub",
//     element: <CreateClub />,
//   },
//   {
//     path: "/addcourt",
//     element: <CreateCourt />,
//   },

// ]);

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

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
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
