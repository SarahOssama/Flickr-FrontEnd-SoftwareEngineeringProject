import React from 'react';
import moment from 'moment';

/* eslint-disable react/prop-types */
const PhotoSet3 = ({ pCard }) => {
  // console.log(moment.utc(pCard.date_posted).local().startOf('seconds').fromNow());
  const date = moment.utc(pCard.date_posted).local().startOf('seconds').fromNow();
  const imgSrc = `https://fotone.me${pCard.media_file}`;
  // console.log(imgSrc);
  const avatar = 'https://www.w3schools.com/w3images/avatar2.png';
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{pCard.title}</h5>
        <img src={imgSrc} className="card-img" alt="..." />

        <p className="card-text">{pCard.description}</p>
      </div>
    </div>
  );
};

export default PhotoSet3;
