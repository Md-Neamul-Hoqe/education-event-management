import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, error, setError, signInWithGoogle } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const Form = new FormData(e.currentTarget);
    const email = Form.get("email");
    const name = Form.get("name");
    const check = Form.get("check");
    const password = Form.get("password");

    /* Verifications */
    setError("");
    if (password.length < 6)
      return setError("Give a password with minimum 6 characters long.");

    console.log(name, email, password, check);

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="bg-base-200 font-poppins">
      <Navbar />
      <div className="hero min-h-screen">
        <div className="card w-full max-w-xl bg-white">
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-2xl text-center text-dark font-semibold">
              Register a new account
            </h2>
            <hr className="my-5 text-light" />
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered bg-light mt-4 mb-6"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered bg-light mt-4 mb-6"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered bg-light mt-4 mb-6"
                required
              />
            </div>
            <div className="form-control mt-6 flex flex-row gap-2 text-base">
              <input type="checkbox" name="check" id="check" required />{" "}
              <span className=" text-gray">Accept Terms & Conditions</span>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral w-full">
                Register
              </button>
            </div>

            <div className="form-control mt-6 flex flex-row gap-2 text-base">
              Already have an account?{" "}
              <Link className="text-info font-bold" to="/login">
                Login
              </Link>
            </div>

            <div className="flex items-center justify-between my-2">
              <hr className="h-1 bg-periwinkle w-1/3" /> Or{" "}
              <hr className="h-1 bg-periwinkle w-1/3" />
            </div>
            <Link onClick={signInWithGoogle} className="flex justify-center w-full border rounded-2xl py-3 text-3xl">
              <FcGoogle />{" "}
              <span className="text-xl ms-3 font-semibold capitalize">
                Sign in with google
              </span>
            </Link>
            {error ? (
              <p className="text-red-800 bg-red-300 p-3 rounded-lg">{error}</p>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
