import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">ShebaFinder</div>
        <div className="flex space-x-4">
          <Link
            to="/register"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded transition"
          >
            Login
          </Link>
          <Link
            to="/home"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded transition"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
