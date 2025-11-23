import React from "react";
import { NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">DP</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium  rounded-lg bg-white items-center justify-center flex font-bold shadow-md px-5 py-2">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "blue-gradient_text"  :"text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "blue-gradient_text" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "blue-gradient_text" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
