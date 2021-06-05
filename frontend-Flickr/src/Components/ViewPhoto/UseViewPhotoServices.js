import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Conf from '../../Conf';
import ViewPhotoServices from './ViewPhotoServices';

const accessToken = localStorage.getItem('access token');

const UseViewPhotoServices = () => {
  // const [viewphoto, viewPhoto] = useState(true);
  const [viewGetPhotoData, setViewGetphotoData] = useState([]);
  const [PhotoProps, setPhotoProps] = useState({
    id: localStorage.getItem('ImgID'),
    Token: accessToken,
  });
  // console.log(id);
  const handleViewPhoto = (e) => {
    e.preventDefault();

    // viewPhoto(!viewphoto);
  };

  const viewphoto = false;

  useEffect(async () => {
  //  console.log(viewphoto, 'reachUpload');

    // if (viewphoto) {
    const response = await ViewPhotoServices.getPhotoInfo(PhotoProps);
    // console.log(response);
    await setViewGetphotoData(response);
    // }
  }, [viewphoto]);
  return (viewGetPhotoData);
};

export default UseViewPhotoServices;
