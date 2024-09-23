import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="conatiner">
      <div className="addUser">
        <h3>Sign Up</h3>
        <form className="addUserForm">
          <div className="inputGroup">
            <label htmlFor="name">Institution:</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Enter your name"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
            />
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter Password"
            />
            <button type="submit" class="btn btn-success">
              Sign Up
            </button>
          </div>
        </form>
        <div className="login">
          <p>Already have an Account? </p>
          <Link to="/login" type="submit" class="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
