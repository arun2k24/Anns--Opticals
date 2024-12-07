import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-red-500 text-white h-28 px-6">
      <div className="navbar-start flex items-center space-x-4">
        <img className="h-16 w-20" src="/logo.jpg" alt="logo" />
        <Link to="/home" className="text-xl font-bold uppercase">
          Ann's Opticals
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex justify-center">
        <ul className="menu menu-horizontal px-1 text-white">
          <li className="inline-block px-4">
            <Link to="/home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li className="inline-block px-4">
            <Link to="/ourbrand" className="hover:text-gray-300">
              Our Brand
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Additional elements for the navbar can go here */}
      </div>
    </div>
  );
}

export default Navbar;
