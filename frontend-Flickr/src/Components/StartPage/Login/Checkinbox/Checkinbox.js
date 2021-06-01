import React from 'react';
import { Link } from 'react-router-dom';
import './Checkinbox.css';
import UseCheckinbox from './UseCheckinbox';

/**
 * Checkinbox
 * @returns Checkinbox Form
 */
function Checkinbox() {
  const { handleSubmit } = UseCheckinbox();
  return (
    <div className="formcheckinboxContent">
      <form onSubmit={handleSubmit} className="checkinboxForm">

        <i className="messageIcon" />
        <h> Check your inbox </h>
        <span className="pragrapgh">
          We sent a verivecation link to you
          {' '}
          <br />
          please check your email
          <br />
          to reset your password.

        </span>

        <button
          className="resendButton"
          type="submit"
        >
          Resend email
        </button>
        <Link to="/help" className="pragrapgh" style={{ color: 'rgb(69, 137, 240)' }}>Can not access your email?</Link>
      </form>

    </div>

  );
}
export default Checkinbox;
