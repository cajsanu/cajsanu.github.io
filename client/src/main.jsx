import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import { ErrorPage } from "./pages/ErrorPage";
import { CoursePage } from "./pages/CoursePage";
import { AboutMe } from "./components/AboutMe";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <AboutMe />,
        errorElement: <ErrorPage />,
      },
    ]
  },
  {
    path: "courses",
    element: <CoursePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
