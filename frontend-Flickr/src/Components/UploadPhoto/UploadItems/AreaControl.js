/* eslint-disable camelcase */
import React from 'react';
import { FcAddImage } from 'react-icons/fc';
import '../Upload.css';
import axios from 'axios';
import UploadPhoto from '../UploadPhoto';
import Conf from '../../../Conf';

// import UploadPhoto from '../UploadPhoto';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyNDI1OTgzLCJqdGkiOiI2ZWJlODE4ZGFhOGE0ZmUzYmZhMGUxZGRhMGJiOTQzNyIsInVzZXJfaWQiOjE3fQ.3DCoK4MxJXX-mITOw3m9uWKRCCw1O8VMSq2DEP7MEWI';

const AreaControl = ({ onClickOpen, toggleUPloadAreaControl, imgUpload }) => {
  const { handleUpload } = UploadPhoto({ imgUpload });

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
            <button
              type="button"
              onClick={handleUpload}
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
};

export default AreaControl;
