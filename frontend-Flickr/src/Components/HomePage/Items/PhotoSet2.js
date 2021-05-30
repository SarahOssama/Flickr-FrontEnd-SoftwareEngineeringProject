import React from 'react';

/* eslint-disable react/prop-types */
const PhotoSet2 = ({ pCard }) => (
  <div className="card" style={{ width: '19rem' }}>
    <img src={pCard.img} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{pCard.photoName}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
      <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
);

export default PhotoSet2;
