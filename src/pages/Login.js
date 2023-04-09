import React, { useState } from "react";
import "../styles/login.css";
import InsuranceLogo from "../assests/images.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login submit logic here
  };

  return (
    <div className="container">
      <div classname="header d-flex flex-row" style={{display:"flex"}}>
        <div className="imagecontainer">
        <img src={InsuranceLogo} alt="Insurance Website Logo" style={{width:"100px", height:"auto"}} />
        </div>
        <div>
          <h1>Randi Insurance</h1>
        </div>
      </div>

      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username-email">Username or Email:</label>
          <input
            type="text"
            id="username-email"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <label htmlFor="remember-me">Remember Me</label>
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <input type="submit" value="Login" />
        </form>
        <div className="links">
          <a href="#">Forgot your password? Click here.</a>
          <p>
            Not a Member Yet? <a href="#">Sign Up</a>
          </p>
        </div>
        <p>
          By logging in, you agree to our <a href="#">Terms and Conditions</a>{" "}
          and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
