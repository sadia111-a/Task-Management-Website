import Banner from "./Banner";
import Footer from "./Footer";
import Users from "./Users";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mb-36 mt-36">
        <Users></Users>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
