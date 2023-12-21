import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex flex-col w-full md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="space-y-8 md:w-1/2 h-full">
          <h2 className="text-xl lg:text-4xl font-bold leading-snug text-black">
            Empower Your Team's Productivity{" "}
            <span className="text-blue-700">with TaskFlow</span>
          </h2>
          <p className="md:w-4/5">
            Experience seamless task coordination, real-time collaboration, and
            enhanced productivity. TaskFlow is your go-to solution for intuitive
            and visually engaging task management, designed to elevate teamwork
            and streamline project workflows.
          </p>
          <div>
            <Link to="/dashboard">
              <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
                Let's Explore
              </button>
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="md:w-2/5">
          <img src="https://i.ibb.co/Qc1YM59/img-why-png.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
