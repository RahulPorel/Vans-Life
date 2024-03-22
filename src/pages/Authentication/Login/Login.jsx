import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Login.css";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

const Login = () => {
  const [loginFormData, SetLoginFormData] = useState({
    email: "",
    password: "",
  });

  const message = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
  };

  const handleCh = (e) => {
    const { name, value } = e.target;
    SetLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [rmLogin, setRmLogin] = useState(false);

  const createAcc = () => {
    setRmLogin(!rmLogin);
  };

  //sign

  const [signupFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    console.log(signupFormData);
  };

  const handleChSignUp = (e) => {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return !rmLogin ? (
    <div className="login-container">
      <h1>Login to your account</h1>
      {message && <h3 style={{ color: "red" }}>{message}</h3>}
      <form className="login-form" onSubmit={handleSubmit} action="#">
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

      <p> Don't have an account </p>

      <Link onClick={createAcc} className="createAcc-Btn">
        Create account
      </Link>
    </div>
  ) : (
    <div className="signup-container">
      <h1>Sign up to your account</h1>
      <form className="signup-form" onSubmit={handleSubmitSignUp} action="#">
        <input
          type="name"
          onChange={handleChSignUp}
          placeholder="Enter name "
          name="name"
          value={signupFormData.name}
        />
        <input
          type="email"
          onChange={handleChSignUp}
          placeholder="Enter email address"
          name="email"
          value={signupFormData.email}
        />

        <input
          type="email"
          onChange={handleChSignUp}
          placeholder="Enter your confirm email"
          name="confirmEmail"
          value={signupFormData.confirmEmail}
        />
        <input
          type="text"
          onChange={handleChSignUp}
          placeholder="Enter password"
          name="password"
          value={signupFormData.password}
        />

        <input
          type="password"
          onChange={handleChSignUp}
          placeholder="Enter confirm password "
          name="confirmPassword"
          value={signupFormData.confirmPassword}
        />

        <button> Sign Up</button>
      </form>

      <p> Already have an account </p>

      <Link onClick={createAcc} className="loginAcc-Btn">
        Login
      </Link>
    </div>
  );
};

export default Login;
