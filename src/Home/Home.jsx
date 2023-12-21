import Banner from "./Banner";

import Users from "./Users";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mb-36 mt-36">
        <Users></Users>
      </div>
    </div>
  );
};

export default Home;
