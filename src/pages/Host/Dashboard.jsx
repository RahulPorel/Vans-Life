import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard goes here</h1>
      <Outlet />
    </>
  );
};

export default Dashboard;
