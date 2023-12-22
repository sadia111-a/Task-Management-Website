import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";
import About from "../Pages/About";
import Team from "../Pages/Team";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "../Provider/PrivateRoute";
import UserHome from "../Pages/DashBoard/UserHome";
import AddTask from "../Pages/DashBoard/AddTask";
import AllTask from "../Pages/DashBoard/AllTask";
import Tasklist from "../Pages/DashBoard/Tasklist";
import MyTask from "../Pages/DashBoard/MyTask";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/team",
        element: <Team></Team>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user route
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "allTask",
        element: <AllTask></AllTask>,
      },
      {
        path: "taskList",
        element: <Tasklist></Tasklist>,
      },
      {
        path: "myTask",
        element: <MyTask></MyTask>,
      },
    ],
  },
]);
