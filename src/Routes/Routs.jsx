import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/Home/Projects/ProjectDetails";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import adminDashboardChildren from "./AdminDashboardRoutes/AdminDashboardRoutes";

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
        element: <ProjectDetails />,
      },
    ],
  },

  // admin dashboard routes--------------------------------
  {
    path: "admin-dashboard",
    element: <AdminDashboardLayout></AdminDashboardLayout>,
    children: adminDashboardChildren,
  },
]);

export default router;
