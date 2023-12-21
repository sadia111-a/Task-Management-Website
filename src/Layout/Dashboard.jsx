import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="flex max-w-7xl mx-auto">
      {/* dashboard side bar */}
      <div className="lg:w-64  min-h-screen bg-cyan-200">
        <div className="flex justify-center mt-5 items-center">
          <div className="mr-3">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="text-black text-sm lg:text-lg font-semibold">
            {user.displayName}
          </div>
        </div>
        <ul className="menu p-8">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addTask">
              <FaCalendar></FaCalendar>
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allTask">
              <FaTasks />
              All Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/taskList">
              <FaList></FaList>
              Task List
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/team">
              <FaSearch></FaSearch>
              Team Member
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
