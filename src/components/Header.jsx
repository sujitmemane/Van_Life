import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="w-full  flex flex-row items-center justify-between py-4 px-8 fixed  top-0 z-50 bg-white">
        <Link to="/" className=" md:text-xl text-[#333333]">
          <h1 className="text-2xl md:text-3xl font-bold">VanLife</h1>
        </Link>
        <ul className="uppercase text-sm md:text-md font-bold  text-[#333333] flex space-x-8">
          <li>
            <NavLink
              to="/host"
              className={({ isActive }) => (isActive ? "text-[#FFCC8D]" : "")}
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-[#FFCC8D]" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vans"
              className={({ isActive }) => (isActive ? "text-[#FFCD8D]" : "")}
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
