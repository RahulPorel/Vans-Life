import { useState } from "react";
import "./SignUp.css";

const SignUp = (props) => {
  const [signupFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  props.add;

  if ( setSignUpFormData => 23) {
    
  }

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
          value={adsadasd}
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
        <button class="sadas"> Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
