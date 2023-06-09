import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar h-20 shadow-sm sticky top-0 flex flex-row ">
      <div className="navbar-start basis-1/4 px-20">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Career</a>
            </li>
          </ul>
        </div>
        <div>
          <Link to={"/"}>
            <svg
              width="125"
              height="57"
              viewBox="0 0 125 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8 22.6849C7.52 22.6849 0 30.2049 0 39.4849C0 48.7649 7.52 56.2849 16.8 56.2849C26.08 56.2849 33.6 48.7649 33.6 39.4849C33.6 30.2049 26.08 22.6849 16.8 22.6849ZM16.8 50.4649C10.73 50.4649 5.82 45.5449 5.82 39.4849C5.82 33.4249 10.74 28.5049 16.8 28.5049C22.86 28.5049 27.78 33.4249 27.78 39.4849C27.78 45.5449 22.87 50.4649 16.8 50.4649Z"
                fill="#FFCE07"
              />
              <path
                d="M71.3 22.6849C62.02 22.6849 54.5 30.2049 54.5 39.4849C54.5 48.7649 62.02 56.2849 71.3 56.2849C80.58 56.2849 88.1 48.7649 88.1 39.4849C88.1 30.2049 80.58 22.6849 71.3 22.6849ZM71.3 50.4649C65.23 50.4649 60.32 45.5449 60.32 39.4849C60.32 33.4249 65.24 28.5049 71.3 28.5049C77.36 28.5049 82.28 33.4249 82.28 39.4849C82.28 45.5449 77.37 50.4649 71.3 50.4649Z"
                fill="#FFCE07"
              />
              <path
                d="M33.6 56.2849C31.9 56.2849 30.52 54.9049 30.52 53.2049V25.7649C30.52 24.0649 31.9 22.6849 33.6 22.6849C35.3 22.6849 36.68 24.0649 36.68 25.7649V53.2049C36.68 54.9049 35.3 56.2849 33.6 56.2849Z"
                fill="#FFCE07"
              />
              <path
                d="M121.7 56.2849C120 56.2849 118.62 54.9049 118.62 53.2049V25.7649C118.62 24.0649 120 22.6849 121.7 22.6849C123.4 22.6849 124.78 24.0649 124.78 25.7649V53.2049C124.77 54.9049 123.4 56.2849 121.7 56.2849Z"
                fill="#FFCE07"
              />
              <path
                d="M44.05 56.285C42.35 56.285 40.97 54.905 40.97 53.205V15.355C40.97 13.655 42.35 12.275 44.05 12.275C45.75 12.275 47.13 13.655 47.13 15.355V53.205C47.13 54.905 45.75 56.285 44.05 56.285Z"
                fill="#FFCE07"
              />
              <path
                d="M54.5 56.285C52.8 56.285 51.42 54.905 51.42 53.205V3.79497C51.42 2.09497 52.8 0.714966 54.5 0.714966C56.2 0.714966 57.58 2.09497 57.58 3.79497V53.205C57.58 54.905 56.2 56.285 54.5 56.285Z"
                fill="#FFCE07"
              />
              <path
                d="M104.9 22.6849C95.62 22.6849 88.1 30.2049 88.1 39.4849C88.1 48.7649 95.62 56.2849 104.9 56.2849C114.18 56.2849 121.7 48.7649 121.7 39.4849C121.7 30.2049 114.18 22.6849 104.9 22.6849ZM104.9 50.4649C98.83 50.4649 93.92 45.5449 93.92 39.4849C93.92 33.4249 98.84 28.5049 104.9 28.5049C110.96 28.5049 115.88 33.4249 115.88 39.4849C115.88 45.5449 110.96 50.4649 104.9 50.4649Z"
                fill="#FFCE07"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex basis-1/2 ">
        <ul className="menu menu-horizontal text-lg font-normal ">
          <li className="mx-4">
            <a>Service</a>
          </li>
          <li className="mx-4">
            <a>About</a>
          </li>
          <li className="mx-4">
            <a>Portfolio</a>
          </li>
          <li className="mx-4">
            <a>Blog</a>
          </li>
          <li className="mx-4">
            <a>Career</a>
          </li>

          <li className="mx-4">
            <Link to={"/login"}>
              {" "}
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block navbar-end basis-1/4 px-20 ">
        <button className="rounded-full bg-[#FFCE07] w-36 h-12 font-bold">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
