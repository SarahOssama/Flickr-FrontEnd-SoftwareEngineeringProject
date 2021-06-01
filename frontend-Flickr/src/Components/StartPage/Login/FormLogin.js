import React from 'react';
import { Link } from 'react-router-dom';
import LoginValidate from './LoginValidate';
import UseLoginform from './UseLoginform';

import './FormLogin.css';
/**
 * FormLogin
 * @returns Login Form
 */
const FormLogin = () => {
  const {
    handleChange, user, handleSubmit, error,
  } = UseLoginform(LoginValidate);

  return (
    <div className="formloginContent">
      <form onSubmit={handleSubmit} className="loginForm">

        <i className="flickrIcon" />
        <h> Log in to Flickr </h>

        <div className="loginInputs">

          <input
            type="text"
            name="email"
            className="loginInput"
            placeholder="Email address"
            value={user.emailaddress}
            onChange={handleChange}
          />
          {error.email && <p>{error.email}</p>}

        </div>

        <div className="loginInputs">

          <input
            type="password"
            name="password"
            className="loginInput"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          {error.password && <p>{error.password}</p>}
          {/* <label htmlFor="rememberCheckbox" className="formSignUp">

            <input id="rememberCheckbox" type="checkbox" />
            Remember email address
          </label> */}

        </div>

        <button
          className="signinButton"
          type="submit"
        >
          Sign in
        </button>
        <span className="formSignUp">
          <Link to="/forgot-password">Forgot password?</Link>

          <hr className="line" />

          Not a Flickr member?
          <Link to="/SignUp">Sign up here.</Link>
        </span>

      </form>

    </div>

  );
};
export default FormLogin;
