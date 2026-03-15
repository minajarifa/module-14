import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navLinks = (
    <>
      <NavLink className={`m-3  `} to={`/`}>
        <button className="btn btn-outline btn-success">House</button>
      </NavLink>
      <NavLink className={`m-3  `} to={`/Listed-Books`}>
        <button className="btn btn-outline btn-success">Listed-Books</button>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vide</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end ">
          <Link
            to={`/Login`}
            className="btn btn-active btn-success bg-[#23BE0A] text-white m-5"
          >
            Sign In
          </Link>
          <Link
            to={`/Register`}
            className="btn btn-active btn-success bg-[#59C6D2] text-white m-5"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
