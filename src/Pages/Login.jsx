import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";

const notify = () => toast("Logged in successfully.");
const Login = () => {
  const { user, signIn, setUser, error, setError, signInWithGoogle } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const Form = new FormData(e.currentTarget);
    const email = Form.get("email");
    // const photo = Form.get("photo");
    const password = Form.get("password");

    signIn(email, password)
      .then((result) => {
        setUser(result.user);

        e.target.reset();

        console.log(location, location?.state);
        /* navigate after login */
        location?.state && navigate(location?.state);

        toast("Your are logged in successfully.");
      })
      .catch((error) => {
        console.table(error.customData);

        return setError(error.message);
      });
  };

  return (
    <section>
      <div className="hero min-h-screen">
        <div className="card w-full max-w-lg lg:bg-white">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-2xl text-center max-md:text-white text-dark font-semibold">
              Login to your account
            </h2>

            <hr className="my-5 text-light" />

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text max-md:text-white font-semibold">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered max-md:bg-periwinkle bg-light mt-4 mb-6"
                required
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text max-md:text-white font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered max-md:bg-periwinkle bg-light mt-4 mb-6"
                required
              />
            </div>

            {/* submit button */}
            <div className="form-control mt-2">
              <button type="submit" className="btn btn-success w-full">
                Login
              </button>
            </div>

            {/* go to register page */}
            <div className="text-center pt-7">
              <span>Don&apos;t have an account?</span>
              <Link to="/register" className="link link-hover text-info ps-2">
                Register
              </Link>
            </div>

            <div className="divider">OR</div>
            <Link
              onClick={() => {
                signInWithGoogle();
                user && notify();
              }}
              className="flex justify-center w-full border rounded-2xl py-3 text-3xl">
              <FcGoogle />{" "}
              <span className="text-xl ms-3 font-semibold capitalize">
                Sign in with google
              </span>
            </Link>

            {error && (
              <div>
                <p className="text-red-800 bg-red-300 p-3 rounded-lg">{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
