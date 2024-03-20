import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      {" "}
      <p>PageNotFound</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default PageNotFound;
