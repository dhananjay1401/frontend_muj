import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import "./logi.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alllogs, setLogs] = useState([]);
  const submitForm = () => {
    event.preventDefault();
    if (email && password) {
      const newlogs = { id: new Date().getTime().toString(), email, password };
      setLogs([...alllogs, newlogs]);
      console.log(alllogs);
      setEmail(""), setPassword("");
    } else {
      alert("Please Fill in the Details");
    }
  };
  return (
    <>
      <div className="login">
        <div className="container">
          <form action="" onSubmit={submitForm}>
            <h1 className="new">Sign In</h1>
            <input
              type="email"
              id="email"
              placeholder="Manipal Email-id"
              autoComplete="off"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button className="loginButton">Sign-In</button>
            <span>
              <b>Sign up now.</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;