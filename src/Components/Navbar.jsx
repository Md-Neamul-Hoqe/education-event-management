import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcReading } from "react-icons/fc";

const Navbar = () => {
  const NavLinks = (
    <>
      <li>
        <NavLink
          className="hover:border-b-4 active:border-b-4 pb-2 border-yellow-400 hover:text-yellow-400 active:text-yellow-400"
          to="#about-section">
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:border-b-4 active:border-b-4 pb-2 border-yellow-400 hover:text-yellow-400 active:text-yellow-400"
          to="#service-section">
          serviece
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:border-b-4 active:border-b-4 pb-2 border-yellow-400 hover:text-yellow-400 active:text-yellow-400"
          to="#service-section">
          work
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:border-b-4 active:border-b-4 pb-2 border-yellow-400 hover:text-yellow-400 active:text-yellow-400"
          to="#blog-section">
          blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:border-b-4 active:border-b-4 pb-2 border-yellow-400 hover:text-yellow-400 active:text-yellow-400"
          to="#contact-section">
          contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="max-w-6xl mx-auto sticky">
      <div className="navbar">
        <div className="navbar-start">
          <Link className="text-5xl" to="./index.html">
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
              {/* <i className="fas fa-shopping-cart"></i> */}
              <span className="badge badge-xs badge-primary indicator-item">
                8
              </span>
            </div>
          </button>
          <button className="btn btn-ghost btn-circle">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-bottom dropdown-left">
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
      </div>
    </nav>
  );
};

export default Navbar;