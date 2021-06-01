import React from 'react';
import { Link } from 'react-router-dom';
import useform from './UseSignupform';
import SignUpValidate from './Validate';
import './FormSignup.css';

/**
 * FormSignup
 * @returns SignUp Form
 */
const FormSignup = () => {
  const {
    handleChange, newuser, handleSubmit, errors,
  } = useform(SignUpValidate);

  return (
    <div className="formSignUpContent">

      <form onSubmit={handleSubmit} className="signupForm">
        <i className="flickrIcon" />
        <h className="signupformTitle"> Sign up for Flickr </h>

        <div className="signupInputs">

          <input
            type="text"
            name="first_name"
            className="signupInput"
            placeholder="First name"
            no-autoFocus
            value={newuser.first_name}
            onChange={handleChange}
          />
          {errors.first_name && <p>{errors.first_name}</p>}

        </div>

        <div className="signupInputs">

          <input
            type="text"
            name="last_name"
            className="signupInput"
            placeholder="last name"
            value={newuser.last_name}
            onChange={handleChange}
          />
          {errors.last_name && <p>{errors.last_name}</p>}

        </div>

        <div className="signupInputs">

          <input
            type="number"
            name="age"
            className="signupInput"
            placeholder="Your age"
            value={newuser.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}

        </div>

        <div className="signupInputs">

          <input
            type="text"
            name="email"
            className="signupInput"
            placeholder="Email address"
            value={newuser.email}
            onChange={handleChange}
            novalid
          />
          {errors.email && <p>{errors.email}</p>}

        </div>

        <div className="signupInputs">

          <input
            type="password"
            name="password"
            className="signupInput"
            placeholder="Password"
            value={newuser.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}

        </div>

        <button
          className="signupButton"
          type="submit"

        >
          Sign up
        </button>

        <span className="formLogin">
          By signing up, you agree with Flickrs Terms of
          <br />
          <h> Services </h>
          {' '}
          and
          {' '}
          <h>Privacy Policy </h>
          .

          <hr className="seperationLine" />

          Already a Flickr member?
          <Link to="/login">Log in here.</Link>
        </span>

      </form>

    </div>
  );
};

export default FormSignup;
