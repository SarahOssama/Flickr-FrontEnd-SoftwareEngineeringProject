import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import useform from './UseSignupform';
import Validate from './Validate';
import './FormSignup.css';

const FormSignup = () => {
  const {
    handleChange, values, handleSubmit, errors,
  } = useform(Validate);

  return (
    <div className="formSignUpContent">

      <form onSubmit={handleSubmit} className="Signup-form">
        <i className="Flickr-icon" />
        <h> Sign up for Flickr </h>

        <div className="Form-user-inputs">

          <input
            type="text"
            name="NewuserFirstname"
            className="Form-user-input"
            placeholder="First name"
            no-autoFocus
            value={values.NewuserFirstname}
            onChange={handleChange}
          />
          {errors.NewuserFirstname && <p>{errors.NewuserFirstname}</p>}

        </div>

        <div className="Form-user-inputs">

          <input
            type="text"
            name="NewuserLastname"
            className="Form-user-input"
            placeholder="Last name"
            value={values.NewuserLastname}
            onChange={handleChange}
          />
          {errors.NewuserLastname && <p>{errors.NewuserLastname}</p>}

        </div>

        <div className="Form-user-inputs">

          <input
            type="number"
            name="Newuserage"
            className="Form-user-input"
            placeholder="Your age"
            value={values.Newuserage}
            onChange={handleChange}
          />
          {errors.Newuserage && <p>{errors.Newuserage}</p>}

        </div>

        <div className="Form-user-inputs">

          <input
            type="text"
            name="Newuseremailaddress"
            className="Form-user-input"
            placeholder="Email address"
            value={values.Newuseremailaddress}
            onChange={handleChange}
            novalid
          />
          {errors.Newuseremailaddress && <p>{errors.Newuseremailaddress}</p>}

        </div>

        <div className="Form-user-inputs">

          <input
            type="password"
            name="Newuserpassword"
            className="Form-user-input"
            placeholder="Password"
            value={values.Newuserpassword}
            onChange={handleChange}
          />
          {errors.Newuserpassword && <p>{errors.Newuserpassword}</p>}

        </div>

        <button
          className="Signup-button"
          type="submit"
        >
          Sign up
        </button>

        <section>
          <span className="Form-input-login">
            By signing up, you agree with Flickrs Terms of
            <br />
            <h> Services </h>
            {' '}
            and
            {' '}
            <h>Privacy Policy </h>
            .
          </span>
        </section>

        <hr />

        <section>
          <span className="Form-input-login">
            Already a Flickr member?
            <h>Log in here</h>
            .
          </span>
        </section>

      </form>

    </div>
  );
};

export default FormSignup;
