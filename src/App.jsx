import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import UserProvider from "./context/UserProvider";
import "./index.css";
import Layout from "../components/layout/HomeLayout";
import DashboardLayout from "../components/layout/DashboardLayout";
import Home from "../pages/auth/HomePage";
import Login from "../pages/auth/LoginPage";
import Register from "../pages/auth/RegisterPage";
import Settings from "../pages/auth/SettingsPage";
import Dashboard from "../pages/dashboard/DashboardPage";
import Project from "../pages/dashboard/ProjectPage";
import Board from "../pages/dashboard/BoardPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="settings" element={<Settings />}></Route>
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path=":projectId" element={<Project />}></Route>
        <Route path=":projectId/:boardId" element={<Board />}></Route>
      </Route>
    </>
  )
);

export default function App() {
  return (
    <React.StrictMode>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </React.StrictMode>
  );
}
