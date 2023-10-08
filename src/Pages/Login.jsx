import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../Components/Navbar";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, createUser, error, setError, signInWithGoogle } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // console.log(e.currentTarget);

    const Form = new FormData(e.currentTarget);
    const email = Form.get("email");
    // const photo = Form.get("photo");
    const password = Form.get("password");

    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        createUser(result.user);

        console.log(location);
        /* navigate after login */
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.code, error.name, error.stack, error.message);
        console.table(error.customData);

        // console.log(error.slice(37));
        return setError(error.message);
      });
  };

  return (
    <section className="bg-base-200">
      <Navbar />
      <div className="hero min-h-screen">
        <div className="card w-full max-w-lg bg-white">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-2xl text-center text-dark font-semibold">
              Login your account
            </h2>

            <hr className="my-5 text-light" />

            {/* Email */}
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

            {/* password */}
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

            {/* submit button */}
            <div className="form-control mt-2">
              <button type="submit" className="btn btn-neutral w-full">
                Login
              </button>
            </div>

            {/* go to register page */}
            <div className="text-center py-7">
              <span>Don&apos;t have an account?</span>
              <Link to="/register" className="link link-hover text-info ps-2">
                Register
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

            {error && (
              <div>
                <p>{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
