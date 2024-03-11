import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import HomePage from "./pages/homePage";
import About from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import JoinUs from "./pages/joinUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage2 from "./pages/homePage2";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <>
            {" "}
            <HomePage /> <HomePage2 />
          </>
        ),
      },
      {
        path: "home",
        element: (
          <>
            {" "}
            <HomePage /> <HomePage2 />
          </>
        ),
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
      { path: "joinus", element: <JoinUs /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      {
        path: "homepage2",
        element: (
          <>
            {" "}
            <HomePage2 />
            <HomePage />
          </>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
