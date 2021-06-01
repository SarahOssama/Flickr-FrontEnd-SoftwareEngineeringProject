import React from 'react';
import { Link } from 'react-router-dom';
import Forgotpasswordvalidate from './Forgotpasswordvalidate';
import Useforgotpasswordform from './UseforgotpasswordForm';

import './FormForgotpassword.css';
/**
 * Forgotpassword
 * @returns Forgotpassword Form
 */
function Forgotpassword() {
  const {
    handleChange, EmailsToReset, handleSubmit, emailerror,
  } = Useforgotpasswordform(Forgotpasswordvalidate);

  return (
    <div className="forgotpasswordContent">
      <form onSubmit={handleSubmit} className="forgotpaswwordForm">
        <i className="lockIcon" />

        <h> Change your Flickr password </h>

        <span className="pragrapgh">
          Please enter your email address below and
          {' '}
          <br />
          we will send you instructions on how to
          <br />
          reset your password.

        </span>

        <div className="forgotpasswordInputs">

          <input
            type="text"
            name="email"
            className="emailInput"
            placeholder="Email address"
            value={EmailsToReset.email}
            onChange={handleChange}
          />
          {emailerror.email && <p>{emailerror.email}</p>}

        </div>

        <button
          className="sendemailButton"
          type="submit"
          // onClick={() => history.push('/check-email/forgot-password')}
        >
          Send email
        </button>

        <Link to="/help" className="pragrapgh" style={{ color: 'rgb(69, 137, 240)' }}>Can not access your email?</Link>
      </form>

    </div>

  );
}
export default Forgotpassword;
