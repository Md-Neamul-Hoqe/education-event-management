
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl text-periwinkle my-5">Oops!</h1>
      <p className="text-xl">Sorry! Not Found.</p>
      <Link className="btn text-xl bg-yellow-400" to="/">Go to home page</Link>
    </div>
  );
};

export default Error404;
