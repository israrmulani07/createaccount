import React from "react";
import "./LoginAccount.css";

const LoginAccount = () => {
  return (
    <>
      <div className="main">
        <div className="one"></div>
        <div className="sqr"></div>
        <div className="sign">
          <br />
          <br />
          <span className="header">Create An Account</span>
          <br />
          <br />
          <span className="info">
            Create an account to enjoy all the services without any ads for
            free!
          </span>
          <br />
          <input type="text" className="input" placeholder="Email Address" />
          <br />
          <br />
          <input type="password" className="pas" placeholder="Password" />
          <br />
          <br />
          <button className="btn">Create Account</button>
          <br />
          <br />
          <span className="link">
            Already Have An Account? <u>Sign In</u>{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default LoginAccount;
