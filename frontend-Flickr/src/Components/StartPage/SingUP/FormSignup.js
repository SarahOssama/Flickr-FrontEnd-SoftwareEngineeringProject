import React from 'react';
import { Link } from 'react-router-dom';
import useform from './UseSignupform';
import SignUpValidate from './SignUpValidate';
import './FormSignup.css';

/**
 * FormSignup
 * @returns SignUp Form
 */
const FormSignup = () => {
  const {
    handleChange, values, handleSubmit, errors,
  } = useform(SignUpValidate);

  return (
    <div className="formSignUpContent">

      <form onSubmit={handleSubmit} className="signupForm">
        <i className="flickrIcon" />
        <h className="signupformTitle"> Sign up for Flickr </h>

        <div className="signupInputs">

          <input
            type="text"
            name="firstname"
            className="signupInput"
            placeholder="First name"
            no-autoFocus
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}

        </div>

        <div className="signupInputs">

          <input
            type="text"
            name="lastname"
            className="signupInput"
            placeholder="last name"
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}

        </div>

        <div className="signupInputs">

          <input
            type="number"
            name="age"
            className="signupInput"
            placeholder="Your age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}

        </div>

        <div className="signupInputs">

          <input
            type="text"
            name="emailaddress"
            className="signupInput"
            placeholder="Email address"
            value={values.emailaddress}
            onChange={handleChange}
            novalid
          />
          {errors.emailaddress && <p>{errors.emailaddress}</p>}

        </div>

        <div className="signupInputs">

          <input
            type="password"
            name="password"
            className="signupInput"
            placeholder="Password"
            value={values.Newuserpassword}
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
