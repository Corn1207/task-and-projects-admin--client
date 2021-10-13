import React, { useState } from "react";
import { Link } from "react-router-dom"

const Register = () => {

  // State for Login
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  })

  const { name, email, password, confirm } = user;
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validate empty fields

    // Password min 6 characters

    // Validate same password

    //Do action
  }
  return (
    <div className="form-user">
      <div className="form-container dark-shadow">
        <h1>Register</h1>

        <form
          onSubmit={onSubmit}
        >
        <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="User name"
              value={name}
              onChange={onChange}
            />
          </div>
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

          <div className="form-field">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Confirm Password"
              value={confirm}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Sign up"
            />
          </div>
        </form>
        <Link to={'/'} className="link-register">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
