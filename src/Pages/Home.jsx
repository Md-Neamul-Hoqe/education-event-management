import Navbar from "../Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import Carousel from "../Components/Carousel";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import LatestBlog from '../Components/LatestBlog';

AOS.init();

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Services />
      <LatestBlog/>
      <Footer />
      <Helmet>
        <title>Education Care | Home</title>
      </Helmet>
    </>
  );
};

export default Home;
