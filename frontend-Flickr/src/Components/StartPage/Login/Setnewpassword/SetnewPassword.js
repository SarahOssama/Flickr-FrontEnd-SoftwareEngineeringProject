import React from 'react';
import './SetnewPassword.css';
import UseSetnewPassword from './UseSetnewPassword';
import SetnewpasswordValidate from './SetnewpasswordValidate';
/**
 * Setnewpassword
 * @returns set new password form
 */
function Setnewpassword() {
  const {
    handleChange, usernewpassword, handleSubmit, passworderror,
  } = UseSetnewPassword(SetnewpasswordValidate);

  return (
    <div className="confirmformContent">
      <form onSubmit={handleSubmit} className="newpasswordForm">

        <i className="lockIcon" />
        <h> Set your new Flickr password </h>

        <div className="newpasswordInputs">

          <input
            type="password"
            name="password"
            className="passwordInput"
            placeholder="Password"
            value={usernewpassword.password}
            onChange={handleChange}
          />
          {passworderror.password && <p>{passworderror.password}</p>}
          <span style={{
            fontSize: '0.75rem', color: 'grey',
          }}
          >
            Please use at least:
            <br />

            &#9675;12 characters &nbsp;&nbsp;&nbsp;&nbsp; &#9675; No leading space
          </span>
        </div>

        <button
          className="confirmButton"
          type="submit"
        >
          Confirm
        </button>

      </form>

    </div>

  );
}

export default Setnewpassword;
