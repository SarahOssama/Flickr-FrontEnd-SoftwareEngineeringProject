import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Conf from '../../Conf';

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyMTk0ODgwLCJqdGkiOiJkYzk1MzAwZWZhYTE0M2JiYWY4NDFlOTc1ODM3YTUwYiIsInVzZXJfaWQiOjE1fQ.H8Rs_bXBst1DazgpSifvEIbptdjQe2r4XqjDlnmN6og';

const UploadPhoto = ({ imgUpload }) => {
  const [mediafield, setmediafield] = useState('Test');

  //   imgUpload.forEach((file) => setmediafield(file.preview));

  const postUploadPhoto = async () => {
    axios.post(`${Conf.LocalNoPath}/upload/`, {
      media_file: mediafield,
      lastName: 'Flintstone',
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return postUploadPhoto();
};

export default UploadPhoto;
