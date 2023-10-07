import { Link } from "react-router-dom";

const ErrorService = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl text-periwinkle my-5">
        Sorry! No Such Kind of Service Found
      </h1>

      <div className="flex items-center gap-6 my-5">
        <p className="text-xl">Please search another one Or </p>
        <Link className="btn text-xl bg-yellow-400" to="/">
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorService;
