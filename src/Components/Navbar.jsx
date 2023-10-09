import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcReading } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import userDefaultImg from "../assets/logo/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const NavLinks = (
    <>
      <li>
        <NavLink
          className="hover:border-b-4 pb-2 border-yellow-400 hover:text-yellow-400"
          to="/">
          Home
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className="hover:border-b-4 pb-2 border-yellow-400 hover:text-yellow-400"
              to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:border-b-4 pb-2 border-yellow-400 hover:text-yellow-400"
              to="/conversation">
              Conversation
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="relative z-20 bg-gradient-to-t from-[#799553] to-periwinkle-light text-periwinkle">
      <div className="navbar max-w-6xl mx-auto py-3">
        <div className="lg:hidden">
          <div className="dropdown dropdown-bottom dropdown-right">
            <label tabIndex="0" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
              {NavLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-start">
          <Link className="text-5xl" to="/">
            <FcReading />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="space-x-10 menu-horizontal px-3 uppercase">
            {NavLinks}
          </ul>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <AiOutlineShoppingCart />
              <span className="badge badge-xs badge-success text-white p-1 indicator-item">
                8
              </span>
            </div>
          </button>
          <button className="btn btn-ghost btn-circle">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="navbar-end">
          {user && Object.keys(user).length > 0 ? (
            <>
              <div className="avatar mr-2">
                <div className="w-12 rounded-full">
                  {/* <div className="w-12 rounded-full ring ring-dark ring-offset-base-100 ring-offset-2"> */}
                  <img
                    src={user?.photoURL || userDefaultImg}
                    alt={user && user?.displayName}
                  />
                </div>
              </div>
              <button className="font-bold mr-2 max-md:hidden">
                {user?.displayName || user?.email?.split("@")[0]}
              </button>
              <button onClick={logOut} className="btn">
                Log Out
              </button>
            </>
          ) : (
            <Link
              className="btn btn-warning ms-3 px-10 rounded-none text-periwinkle border-none"
              to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
