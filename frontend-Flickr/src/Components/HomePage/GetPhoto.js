import { useEffect, useState } from 'react';
import axios from 'axios';
import Conf from '../../Conf';

const accessToken = localStorage.getItem('access token');

const GetPhoto = () => {
  const [photoData, setphotoData] = useState([]);

  useEffect(() => {
    const getPhoto = async () => {
      axios
        .get(`${Conf.LocalNoPath}/photoData`, {
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
        //   console.log(res.data);
          const photoFromServer = res.data;
          setphotoData(photoFromServer);
        });
    };
    getPhoto();

    const getHomePhoto = async () => {
      axios
        .get(`${Conf.backURL}photos/home`, {
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
          console.log(res.data.results.public_photos);
          const photoFromServer = res.data.results.public_photos;
          setphotoData(photoFromServer);
        });
    };
    getHomePhoto();
  }, [/* dependency array (value when it changes we want the code to run) */]);
  return (
    photoData
  );
};

export default GetPhoto;
