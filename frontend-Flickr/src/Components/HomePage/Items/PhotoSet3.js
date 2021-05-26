import React from 'react';

/* eslint-disable react/prop-types */
const PhotoSet3 = ({ pCard }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Special title treatment</h5>
      <img src={pCard.img} className="card-img" alt="..." />

      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
);

export default PhotoSet3;
