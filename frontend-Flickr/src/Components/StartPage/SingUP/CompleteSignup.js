import { Link } from 'react-router-dom';
import '../Login/Checkinbox/Checkinbox';
import UseCompleteSignup from './UseCompleteSignup';
/**
 * CompleteSignup
 * @returns CompleteSignup Form
 */
function CompleteSignup() {
  const {
    handleSubmit,
  } = UseCompleteSignup();

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
          for the next step.

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
export default CompleteSignup;
