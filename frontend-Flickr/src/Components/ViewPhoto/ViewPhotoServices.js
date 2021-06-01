import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Conf from '../../Conf';

const accessToken = localStorage.getItem('access token');

const ViewPhotoServices = ({ id, setViewGetphotoData }) => {
  // const [viewphoto, viewPhoto] = useState(true);
  // const [viewGetPhotoData, setViewGetphotoData] = useState([]);
  // const id = 1;
  console.log(id);
  const handleViewPhoto = (e) => {
    e.preventDefault();

    // viewPhoto(!viewphoto);
  };

  const viewphoto = true;

  useEffect(() => {
    console.log(viewphoto, 'reachUpload');

    if (viewphoto) {
      axios
        .get(`${Conf.backURL}photos/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'content-type': 'application/json',
            accept: 'application/json',
          },
          body: {

          },
        })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res.data);
          setViewGetphotoData(res.data.photo);
        });
    }
  }, [viewphoto]);
  return { };
};

export default ViewPhotoServices;
