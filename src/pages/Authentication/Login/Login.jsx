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

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [rmLogin, setRmLogin] = useState(false);
  const message = useLoaderData();
  const dbCEmail = localStorage.getItem("confirmEmail");
  const dbCPass = localStorage.getItem("confirmPassWord");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    if (
      dbCEmail === loginFormData.email &&
      dbCPass === loginFormData.password
    ) {
      localStorage.setItem("loggedin", true);
      window.location.href = "host";
    } else {
      setError(true);
      setStatus("idle");
    }
  };

  const handleCh = (e) => {
    const { name, value } = e.target;
    SetLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createAcc = () => {
    setRmLogin(!rmLogin);
  };

  const handlePassShow = () => {
    const passInput = document.getElementById("cPass-ch");
    const toggleShowEyeIcon = document.querySelector("#showEye");
    const toggleHideEyeIcon = document.querySelector("#hideEye");

    if (passInput.type === "text") {
      passInput.type = "password";
      toggleShowEyeIcon.style.display = "inline";
      toggleHideEyeIcon.style.display = "none";
    } else {
      passInput.type = "text";
      toggleShowEyeIcon.style.display = "none";
      toggleHideEyeIcon.style.display = "inline";
    }
  };

  const togglePasShow = () => {
    const passInput = document.getElementById("pass-ch");
    const toggleShowEyeIcon = document.querySelector("#showEye-login  ");
    const toggleHideEyeIcon = document.querySelector("#hideEye-login");

    if (passInput.type === "text") {
      passInput.type = "password";
      toggleShowEyeIcon.style.display = "inline";
      toggleHideEyeIcon.style.display = "none";
    } else {
      passInput.type = "text";
      toggleShowEyeIcon.style.display = "none";
      toggleHideEyeIcon.style.display = "inline";
    }
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
    localStorage.setItem("name", signupFormData.name);
    localStorage.setItem("confirmEmail", signupFormData.confirmEmail);
    localStorage.setItem("confirmPassWord", signupFormData.confirmPassword);
    setRmLogin(!rmLogin);
  };

  const handleChSignUp = (e) => {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // login form
  return !rmLogin ? (
    <div className="login-container">
      <h1>Login to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && (
        <>
          <h3 style={{ color: "red" }} className="red err-msg">
            No user with those credentials found!
            <Link
              onClick={createAcc}
              style={{ color: "#2a82d6", textDecoration: "none" }}
            >
              &nbsp; Create account
            </Link>
          </h3>
        </>
      )}

      <form className="login-form" onSubmit={handleSubmit} action="#">
        <input
          type="email"
          onChange={handleCh}
          placeholder="Enter email address"
          name="email"
          value={loginFormData.email}
        />{" "}
        <input
          type="password"
          onChange={handleCh}
          placeholder="Enter password"
          name="password"
          id="pass-ch"
          value={loginFormData.password}
        />
        <i
          id="showEye-login"
          onClick={togglePasShow}
          className="fa-regular fa-eye-slash cPass-eye"
        ></i>
        <i
          id="hideEye-login"
          onClick={togglePasShow}
          className="fa-regular fa-eye cPass-eye"
          style={{ display: "none" }}
        ></i>
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>

      <p> Don't have an account </p>

      <Link onClick={createAcc} className="createAcc-Btn">
        Create account
      </Link>
    </div>
  ) : (
    // sign up form
    <div className="signup-container">
      <h1>Sign up to your account</h1>
      {message && <h3 style={{ color: "red" }}>{message}</h3>}

      <form className="signup-form" onSubmit={handleSubmitSignUp} action="#">
        <input
          type="name"
          required
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
        {signupFormData.email === signupFormData.confirmEmail ? (
          <i
            style={{ color: "darkgreen" }}
            className="fa-regular fa-circle-check email-check"
          ></i>
        ) : (
          <i
            style={{ color: "red" }}
            className="fa-regular fa-circle-check email-check"
          ></i>
        )}
        <input
          type="email"
          required
          onChange={handleChSignUp}
          placeholder="Enter your confirm email"
          name="confirmEmail"
          value={signupFormData.confirmEmail}
        />
        {signupFormData.confirmEmail === signupFormData.email ? (
          <i
            style={{ color: "darkgreen" }}
            className="fa-regular fa-circle-check cemail-check"
          ></i>
        ) : (
          <i
            style={{ color: "red" }}
            className="fa-regular fa-circle-check cemail-check"
          ></i>
        )}
        <input
          type="text"
          onChange={handleChSignUp}
          placeholder="Enter password"
          name="password"
          value={signupFormData.password}
        />
        {signupFormData.password === signupFormData.confirmPassword ? (
          <i
            style={{ color: "darkgreen" }}
            className="fa-regular fa-circle-check pass-check"
          ></i>
        ) : (
          <i
            style={{ color: "red" }}
            className="fa-regular fa-circle-check pass-check"
          ></i>
        )}
        <input
          type="password"
          onChange={handleChSignUp}
          placeholder="Enter confirm password "
          name="confirmPassword"
          value={signupFormData.confirmPassword}
          id="cPass-ch"
        />

        <i
          id="hideEye"
          style={{ display: "none" }}
          onClick={handlePassShow}
          className="fa-regular fa-eye cPass-eye"
        ></i>

        <i
          id="showEye"
          onClick={handlePassShow}
          className="fa-regular fa-eye-slash cPass-eye"
        ></i>

        {signupFormData.confirmPassword === signupFormData.password ? (
          <i
            style={{ color: "darkgreen" }}
            className="fa-regular fa-circle-check cpass-check"
          ></i>
        ) : (
          <i
            style={{ color: "red" }}
            className="fa-regular fa-circle-check cpass-check"
          ></i>
        )}
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
