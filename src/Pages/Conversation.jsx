import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Conversation = () => {
  return (
    <>
      <Navbar />

      <Link className="btn bg-yellow-400 font-bold">Start</Link>
    </>
  );
};

export default Conversation;
