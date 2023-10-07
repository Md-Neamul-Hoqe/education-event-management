import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import Carousel from "./Components/Carousel";
import Services from "./Components/Services";
AOS.init();

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Services />
      <Helmet>
        <title>Education Care | Home</title>
      </Helmet>
    </>
  );
};

export default Home;
