/** @format */

import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [loginFormData, SetLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleCh = () => {
    console.log("hand;ed");
  };

  return (
    <div className="login-container">
      <h1>Login to your account</h1>
      <form action="">
        <input
          type="email"
          onChange={handleCh}
          placeholder="Enter email address"
          name="email"
          value={loginFormData.email}
        />
        <input
          type="password"
          onChange={handleCh}
          placeholder="Enter password"
          name="password"
          value={loginFormData.password}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
