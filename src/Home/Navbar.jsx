import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaBlog, FaBookOpen } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt1 } from "react-icons/hi";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //   toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // navItems here
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Team Members", path: "/team" },
    // { link: "Login", path: "/login" },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 right-0 transition-all ease-in duration-300 z-10 lg:z-50">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block"></FaBlog> TaskFlow
          </Link>
          {/* nav items for large device */}
          <ul className="md:flex space-x-12 hidden font-semibold">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>
          {/* button for lg device */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              {user?.email ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    {/* <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt={user.displayName} />
                    </div> */}
                    <HiMenuAlt1 className="w-5 text-3xl hover:text-blue-700" />
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <button className="btn btn-sm  btn-ghost">
                        {user.displayName}
                      </button>
                    </li>
                    <li className="flex justify-center">
                      <Link to="/dashboard">
                        <button className="btn btn-sm  btn-ghost">
                          DashBoard <FaBookOpen />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="btn btn-sm  btn-ghost"
                        onClick={logOut}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/login">
                  <button className="btn btn-sm  btn-ghost">Login</button>
                </Link>
              )}
            </button>
          </div>
          {/* manu button for the mobile device */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <RxCross2 className="h-5 w-5 text-black" />
              ) : (
                <FaBars className="h-5 w-5 text-black"></FaBars>
              )}
            </button>
          </div>
        </div>
        {/* navitems for sm devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } `}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
