/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Conf from '../../Conf';

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyNDYyMzAyLCJqdGkiOiJlMGMzN2JhMzQ5ZTc0OWFjOWVmYTU5ZWQ3MjU4Njc1NSIsInVzZXJfaWQiOjF9.ZxiNRDibN0bxAzsFNi8PzmdIMwV4HZXWu-ViFifAxsc';

const UploadPhoto = ({ imgUpload }) => {
  // const [mediafield, setmediafield] = useState('Test');
  const [upload, setUpload] = useState(false);
  //   imgUpload.forEach((file) => setmediafield(file.preview));
  // eslint-disable-next-line no-console
  // console.log(imgUpload);
  const photo_height = 234;
  const photo_width = 234;
  // const file = imgUpload;
  // const media_file = document.querySelector('input[type="file"]').imgUpload;
  // data.append("data", imagedata);
  const media_file = imgUpload;
  // const formData = new FormData();
  // formData.append('image', imgUpload);
  // formData.append()
  // console.log(formData);
  // const media_file = formData;
  // console.log(formData);
  const headers = {
    authorization: `Bearer ${accessToken}`,
    'Content-type': 'multipart/form-data',
    accept: '*/*',
  };
  const data = {
    media_file,
    photo_width,
    photo_height,
  };
  const handleUpload = (e) => {
    e.preventDefault();

    setUpload(true);
  };

  useEffect(() => {
    console.log(upload, 'reachUpload');

    if (upload) {
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
  }, [upload]);
  // const postUploadPhotoBack = () => {

  // };

  // const postUploadPhoto = async () => {
  //   axios.post(`${Conf.LocalNoPath}/upload/`, {
  //     media_file: mediafield,
  //     lastName: 'Flintstone',
  //   })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   const postUploadPhotoBack = () => {
  //     axios.post(`${Conf.backURL}/photos/upload`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         'content-type': 'application/json',
  //         accept: 'application/json',
  //       },
  //       body: {
  //         media_file: mediafield,
  //         photo_height: 678,
  //         photo_width: 456,
  //       },

  //     })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   return () => {
  //   };
  // }, []);
  return {
    handleUpload,
  };
};

export default UploadPhoto;
