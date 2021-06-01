import React from 'react';

const Notification = ({ nCard }) => {
  // const [notificationMsg, setnotificationMsg] = useState('');
  // const msgCheck = nCard.type;
  // if (msgCheck === 'comment') {
  //   setnotificationMsg('commented on Your photo');
  // } else if (msgCheck === 'faved') {
  //   setnotificationMsg('faved your photo');
  // } else {
  //   setnotificationMsg('is now following you!');
  // }
  const Message = `${nCard.notifierName} commented on Your photo `;
  return (
    <div>
      <div className="card w-100 h-25 ">
        <div className="card-body">
          <h5 className="card-title">{nCard.type}</h5>
          <p className="card-text">{Message}</p>
          <a href="/" className="test">Button</a>
        </div>
      </div>

    </div>
  );
};

export default Notification;
