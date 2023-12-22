import { FaUser, FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa6";
import TypeOfUser from "./TypeOfUser";
const Users = () => {
  return (
    <div data-aos="fade-down">
      <h2 className="text-5xl mb-12 text-center font-bold text-black my-5">
        Our Users
      </h2>
      <div className="flex-col flex lg:flex-row justify-center gap-6 ">
        <div>
          <img src="https://i.ibb.co/3B91KkC/hero-icon-1.png" alt="" />
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure lg:text-3xl text-primary">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg> */}
              <FaUsers></FaUsers>
            </div>
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">Jun 1st - Dec 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <TypeOfUser></TypeOfUser>
      </div>
    </div>
  );
};

export default Users;
