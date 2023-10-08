import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const { createUser, error, setError, signInWithGoogle } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const Form = new FormData(e.currentTarget);
    const email = Form.get("email");
    const password = Form.get("password");
    // const name = Form.get("name");
    // const check = Form.get("check");

    /* Verifications */
    setError("");

    if (password.length < 6)
      return setError("Give a password with minimum 6 characters long.");
    else if (!/[A-Z]/.test(password))
      return setError("Please use at lease a uppercase character.");
    else if (!/[^a-zA-Z0-9]/.test(password))
      return setError("Please use at least a special character.");

    createUser(email, password)
      .then((res) => {
        console.log(res);
        res && notify();
      })
      .catch((error) => setError(error));
  };

  const notify = () => toast("Registered successfully.");

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
              <input
                type="checkbox"
                name="check"
                className="toggle toggle-warning"
                required
              />
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

            <div className="divider">OR</div>
            <Link
              onClick={signInWithGoogle}
              className="flex justify-center w-full border rounded-2xl py-3 text-3xl">
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

          {/* <div className="toast toast-top toast-center">
            <div className="alert alert-info">
              <span>New mail arrived.</span>
            </div>
            <div className="alert alert-success">
              <span>Message sent successfully.</span>
            </div>
          </div> */}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Register;
