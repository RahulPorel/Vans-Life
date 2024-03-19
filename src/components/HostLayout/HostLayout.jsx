import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.css";
const HostLayout = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host"
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host/reviews"
        >
          Views
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host/views"
        >
          Reviews
        </NavLink>
      </nav>{" "}
      <Outlet />
    </>
  );
};

export default HostLayout;
