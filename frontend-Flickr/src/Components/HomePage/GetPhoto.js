import { useEffect, useState } from 'react';
import axios from 'axios';
import Conf from '../../Conf';

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyMTk0ODgwLCJqdGkiOiJkYzk1MzAwZWZhYTE0M2JiYWY4NDFlOTc1ODM3YTUwYiIsInVzZXJfaWQiOjE1fQ.H8Rs_bXBst1DazgpSifvEIbptdjQe2r4XqjDlnmN6og';

const GetPhoto = () => {
  const [photoData, setphotoData] = useState([]);

  useEffect(() => {
    const getPhoto = async () => {
      axios
        .get(`${Conf.localURL}`, {
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

    const getTasks = async () => {
      axios
        .get(`${Conf.backURL}gallery/`, {
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
        });
    };
    // getTasks();
  }, [/* dependency array (value when it changes we want the code to run) */]);
  return (
    photoData
  );
};

export default GetPhoto;
