import Navbar from "../Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import Carousel from "../Components/Carousel";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import UpComing from "../Components/UpComing";
// import LatestBlog from "../Components/LatestBlog";
import Testimonial from "../Components/Testimonial";
import { ToastContainer } from "react-toastify";

AOS.init();

const Home = () => {
  return (
    <>
      <Navbar />

      <Carousel />

      {/* Extra section */}
      <UpComing />

      <Services />

      {/* Extra section */}
      <Testimonial />
      {/* <LatestBlog /> */}

      <Footer />

      {/* Title of the page */}
      <Helmet>
        <title>Education Care | Home</title>
      </Helmet>
      <ToastContainer />
    </>
  );
};

export default Home;
