import React from 'react';
import { FcAddImage } from 'react-icons/fc';
import '../Upload.css';
import UploadPhoto from '../UploadPhoto';

const AreaControl = ({ onClickOpen, toggleUPloadAreaControl, imgUpload }) => (
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
          <button
            type="button"
            onClick={UploadPhoto(imgUpload)}
          >
            Upload

          </button>
        </div>
      )
      : (
        <div className="uploadDisabledRightAreaControls">
          <p id="disabledUpload">Upload</p>
        </div>
      )}
  </div>
);

export default AreaControl;
