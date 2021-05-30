import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Conf from '../../Conf';

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyMzgxOTAxLCJqdGkiOiIzYTkwN2MyZGExMWE0YWIxYWYwOWEwNzJmZTQ2YmZjMCIsInVzZXJfaWQiOjl9.Gq0_TsxrVpi6XSE1xmYIirpeOCQSrYEpSVlhi86znSk';

const UploadPhoto = () => {
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
  useEffect(() => {
    const postUploadPhotoBack = () => {
      axios.post(`${Conf.backURL}/photos/upload`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: {
          media_file: mediafield,
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
    return () => {
    };
  }, []);
};

export default UploadPhoto;
