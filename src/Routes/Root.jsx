import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const Root = () => {
  const location = useLocation();
  const noHearderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div className="max-w-7xl mx-auto">
      {noHearderFooter || <Navbar></Navbar>}
      <div className="">
        <Outlet></Outlet>
      </div>

      {noHearderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
