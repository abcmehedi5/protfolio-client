import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/Home/Projects/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />
      },
    ],
  },
]);

export default router;
