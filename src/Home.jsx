import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import Carousel from "./Components/Carousel";
AOS.init();

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Helmet>
        <title>Education Care | Home</title>
      </Helmet>
    </>
  );
};

export default Home;
