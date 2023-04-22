import React from "react";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-5xl mt-16"> Dashboard Here</h1>
      <Outlet />
    </div>
  );
};

export default Dashboard;
