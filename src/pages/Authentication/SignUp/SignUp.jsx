/** @format */

import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [signupFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="singup-container">
      <h1>Sign up to your account</h1>
      <form action="">
        <input
          type="name"
          onChange={handleCh}
          placeholder="Enter name "
          name="name"
          value={signupFormData.name}
        />
        <input
          type="email"
          onChange={handleCh}
          placeholder="Enter email address"
          name="email"
          value={signupFormData.email}
        />
        <input
          type="email"
          onChange={handleCh}
          placeholder="Enter your confirm email"
          name="confirmEmail"
          value={signupFormData.confirmEmail}
        />
        <input
          type="password"
          onChange={handleCh}
          placeholder="Enter confirm password "
          name="email"
          value={signupFormData.password}
        />
        <input
          type="text"
          onChange={handleCh}
          placeholder="Enter password"
          name="password"
          value={signupFormData.confirmPassword}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
