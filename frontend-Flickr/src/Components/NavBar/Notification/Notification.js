import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ nCard }) => (
  <div>
    <div className="card w-100 h-25 ">
      <div className="card-body">
        <h5 className="card-title">{nCard.type}</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/" className="test">Button</a>
      </div>
    </div>

  </div>
);

Notification.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  nCard: PropTypes.object.isRequired,
};

export default Notification;
