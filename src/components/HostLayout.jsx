import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
const HostLayout = () => {
  return (
    <div className="mt-24 p-8">
      <nav className="uppercase font-bold flex space-x-16">
        <NavLink
          to="/host"
          end
          className={({ isActive }) => (isActive ? "text-[#FFCC8D]" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => (isActive ? "text-[#FFCC8D]" : "")}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          className={({ isActive }) => (isActive ? "text-[#FFCC8D]" : "")}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
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
