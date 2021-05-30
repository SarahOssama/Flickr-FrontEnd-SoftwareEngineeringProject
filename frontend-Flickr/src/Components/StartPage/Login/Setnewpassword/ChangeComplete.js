import React from 'react';
import { useHistory } from 'react-router-dom';
import './ChangeComplete.css';

/**
 * ChangeComplete
 * @returns ChangeComplete Form
 */
function ChangeComplete() {
  const history = useHistory();
  return (
    <div className="formcompleteContent">
      <form className="changecompleteForm">

        <i className="trueIcon" />
        <h> Your Flickr password is updated </h>
        <span className="pragrapgh">
          Congratiolations ! Now use your new
          {' '}
          <br />
          password to acsses your Flickr account.

        </span>

        <button
          className="lastButton"
          type="submit"
          onClick={() => history.push('/login')}
        >
          Okay, got it
        </button>
      </form>

    </div>

  );
}
export default ChangeComplete;
