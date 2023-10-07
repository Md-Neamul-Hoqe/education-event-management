import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
AOS.init();

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Education Care | Home</title>
      </Helmet>
      <Navbar />
      <h1 data-aos="fade-in" className="text-4xl font-extrabold">
        Home page
      </h1>
    </>
  );
};

export default Home;
