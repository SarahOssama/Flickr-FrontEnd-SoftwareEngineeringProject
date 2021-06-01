import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Conf from '../../Conf';

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyNDYyMzAyLCJqdGkiOiJlMGMzN2JhMzQ5ZTc0OWFjOWVmYTU5ZWQ3MjU4Njc1NSIsInVzZXJfaWQiOjF9.ZxiNRDibN0bxAzsFNi8PzmdIMwV4HZXWu-ViFifAxsc';

const ViewPhotoServices = () => {
  const [fave, setFave] = useState(false);

  const handleFave = (e) => {
    e.preventDefault();

    setFave(!fave);
  };
  const headers = {
    authorization: `Bearer ${accessToken}`,
    'Content-type': 'multipart/form-data',
    accept: '*/*',
  };
  const data = {

  };
  useEffect(() => {
    console.log(fave, 'reachUpload');

    if (fave) {
      console.log(data);

      axios
        .post(`${Conf.backURL}/photos/upload`, data, {
          headers,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [fave]);
  return { handleFave };
};

export default ViewPhotoServices;
