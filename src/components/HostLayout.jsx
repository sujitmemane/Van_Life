import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
const HostLayout = () => {
  return (
    <div className="mt-24 p-8">
      <nav className="uppercase font-bold flex space-x-16">
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "text-[#FFCC8D]" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? "text-[#FFCC8D]" : "")}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "text-[#FFCC8D]" : "")}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? "text-[#FFCC8D]" : "")}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
