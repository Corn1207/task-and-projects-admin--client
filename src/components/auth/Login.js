import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // State for Login
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validate empty fields

    //Do action
  };
  return (
    <div className="form-user">
      <div className="form-container dark-shadow">
        <h1>Login</h1>

        <form onSubmit={onSubmit}>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Login"
            />
          </div>
        </form>
        <Link to={"/register"} className="link-register">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
