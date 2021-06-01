import React from 'react';

import Notification from './Notification';
import GetNotification from './GetNotification';

const NotificationCard = () => {
  const notification = GetNotification();
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
