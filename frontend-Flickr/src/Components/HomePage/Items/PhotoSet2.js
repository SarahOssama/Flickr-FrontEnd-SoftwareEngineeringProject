import React from 'react';
import moment from 'moment';

/* eslint-disable react/prop-types */
const PhotoSet2 = ({ pCard }) => {
  // console.log(moment.utc(pCard.date_posted).local().startOf('seconds').fromNow());
  const date = moment.utc(pCard.date_posted).local().startOf('seconds').fromNow();
  const imgSrc = `https://fotone.me${pCard.media_file}`;
  const avatar = 'https://www.w3schools.com/w3images/avatar2.png';
  return (
    <div className="card" style={{ width: '19rem' }}>
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{pCard.photoName}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default PhotoSet2;
