/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Conf from '../../Conf';

const accessToken = localStorage.getItem('access token');

const UploadPhoto = ({ imgUpload }) => {
  // const [mediafield, setmediafield] = useState('Test');
  const [upload, setUpload] = useState(false);
  const [done, setDone] = useState(false);

  //   imgUpload.forEach((file) => setmediafield(file.preview));
  // eslint-disable-next-line no-console
  // console.log(imgUpload);
  const photo_height = 234;
  const photo_width = 234;
  // const file = imgUpload;
  // const media_file = document.querySelector('input[type="file"]').imgUpload;
  // data.append("data", imagedata);
  const media_file = '@"/C:/Users/sarah/Pictures/wallpaper/69F88801-E0B7-48F0-AC94-F0680BB33A6C.jpg"';
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
  const body = new FormData();
  // eslint-disable-next-line no-useless-escape
  body.append('media_file', imgUpload);
  body.append('', '\\');
  body.append('photo_height', '123');
  body.append('', '\\');
  body.append('photo_width', '234');
  body.append('', '\\');
  body.append('is_public', 'true');
  // {
  //   media_file,
  //   photo_width,
  //   photo_height,
  // };
  const handleUpload = (e) => {
    e.preventDefault();

    setUpload(true);
  };

  useEffect(async () => {
    console.log(upload, 'reachUpload');

    if (upload) {
      console.log(body);

      await axios
        .post(`${Conf.backURL}photos/upload`, body, {
          headers,
        })
        .then((response) => {
          if (response.status === 201) {
            setDone(true);
          }
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
    handleUpload, done,
  };
};

export default UploadPhoto;
