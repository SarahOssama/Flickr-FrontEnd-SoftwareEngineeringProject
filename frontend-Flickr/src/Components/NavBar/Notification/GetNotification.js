import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Conf from '../../../Conf';

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIxOTgxODY5LCJqdGkiOiJlNWQxMmY2NTk0OWM0ZDBiOTQ0YWMyYWE5NzdlYjQ4MiIsInVzZXJfaWQiOjEyfQ.jKqtHFs3__F7LbCBU4Eib-Atwfh2RV4cuuQ4TOsZmdM';

const GetNotification = () => {
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    const getNotification = async () => {
      axios
        .get(`${Conf.LocalNoPath}/notificationData`, {
          headers: {
          // Authorization: `Bearer ${accessToken}`,
          // 'content-type': 'application/json',
          // accept: 'application/json',
          },
          body: {

          },
        })
        .then((res) => {
        // eslint-disable-next-line no-console
          console.log(res.data);
          const notificationFromServer = res.data;
          setNotification(notificationFromServer);
        });
    };
    // getNotification();
  }, [/* dependency array (value when it changes we want the code to run) */]);

  return (

    notification
  );
};

export default GetNotification;
