import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Conf from '../../../Conf';
import Notification from './Notification';

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIxOTgxODY5LCJqdGkiOiJlNWQxMmY2NTk0OWM0ZDBiOTQ0YWMyYWE5NzdlYjQ4MiIsInVzZXJfaWQiOjEyfQ.jKqtHFs3__F7LbCBU4Eib-Atwfh2RV4cuuQ4TOsZmdM';

const NotificationCard = () => {
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    const getPhoto = async () => {
      axios
        .get(`${Conf.LocalNoPath}/notificationData`, {
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
          // console.log(res.data);
          const notificationFromServer = res.data;
          setNotification(notificationFromServer);
        });
    };
    getPhoto();
  }, [/* dependency array (value when it changes we want the code to run) */]);

  return (
    <>
      {notification.map((nDetails) => (
        <>

          <Notification key={nDetails.id} nCard={nDetails} />

        </>
      ))}
    </>
  );
};

export default NotificationCard;
