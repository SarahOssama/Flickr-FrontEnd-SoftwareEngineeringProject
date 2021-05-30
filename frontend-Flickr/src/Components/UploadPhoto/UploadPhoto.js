import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Conf from '../../Conf';

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyNDEzNzgzLCJqdGkiOiJmYTNlMmJjOTVkM2Y0ZjAwYjE2NjE1NzNjNWY2NTU4MiIsInVzZXJfaWQiOjE3fQ.G5mHgzVkYS2b3FF3QBnAcoWcYJys3iTb6r-4eG4ha2Q';

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
