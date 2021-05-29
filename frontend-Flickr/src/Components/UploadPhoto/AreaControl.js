import React, { useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import './Upload.css';

const AreaControl = ({ onClickOpen }) => {
  const [toggleUPloadAreaControl, setToggleUploadAreaControl] = useState(false);

  return (
    <div className=" uploadWorkingAreaControls">

      <div className="uploadLeftAreaControls">
        <button
          type="button"
          id="addUploadButton"
          onClick={onClickOpen}
          title="No file chosen"
        >
          <FcAddImage />
          {' '}
          Add

        </button>
      </div>

      {toggleUPloadAreaControl
        ? (
          <div className="uploadEnabledRightAreaControl">
            <h2>Enabled</h2>
          </div>
        )
        : (
          <div className="uploadDisabledRightAreaControls">
            <p id="disabledUpload">Upload</p>
          </div>
        )}
    </div>
  );
};

export default AreaControl;
