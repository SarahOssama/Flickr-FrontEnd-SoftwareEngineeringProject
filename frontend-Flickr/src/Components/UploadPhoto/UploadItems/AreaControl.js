import React, { useEffect, useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import '../Upload.css';

import axios from 'axios';
import Conf from '../../../Conf';

// import UploadPhoto from '../UploadPhoto';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyMzk5NTYzLCJqdGkiOiI3YWE4MGExMTUyY2E0YTljOTRiYWFjYWQzOGIzNzRlZSIsInVzZXJfaWQiOjE3fQ.craiilIFPLtgSiOJV4bTfChDh8AZsKDLpmFrru75ffA';

const AreaControl = ({ onClickOpen, toggleUPloadAreaControl, imgUpload }) => {
  // const handleUpload = UploadPhoto();
  // useEffect(() => {
  const getURL = () => (imgUpload.forEach((file) => {
    URL.revokeObjectURL(file.preview);
    console.log(file.preview);
  }));
  getURL();
  const postUploadPhotoBack = () => {
    axios.post(`${Conf.backURL}/photos/upload`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
        'Content-type': 'multipart/form-data',
        accept: '*/*',
      },
      body: {
        media_file: 'mediafield',
        photo_height: 678,
        photo_width: 456,
      },

    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // }, []);
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
            <button
              type="button"
              onClick={postUploadPhotoBack()}
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
