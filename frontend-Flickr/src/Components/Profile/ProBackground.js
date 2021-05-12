import React from 'react';
import './Profile.css';
import Data from '../../db2.json';

const Background = () => (
  <div className="profile-container">
    <div className="profile-overlay">
      <div className="profile-image">
        <img
          className="ProImg"
          src={Data.profileUsers.map((data) => (data.img))}
          img-responsive
          height="40%"
          alt=""
        />
      </div>
      <div className="profile-links">
        <div className="name">
          {
          Data.profileUsers.map((data) => (<h1>{data.Name}</h1>))
          }
        </div>
        <div className="links">
          <ul>
            {Data.profileUsers.map((data) => (<li>{data.email}</li>))}
            {Data.profileUsers.map((data) => (<li><a href="/">{`${data.followers}  Followers`}</a></li>))}
            {Data.profileUsers.map((data) => (<li><a href="/">{`${data.followings} Followings`}</a></li>))}
          </ul>
        </div>
      </div>
      <div className="photos-details">
        <ul>
          {Data.profileUsers.map((data) => (<li>{`${data.NumberOfPhotos} Photos `}</li>))}
          {Data.profileUsers.map((data) => (<li>{`Joined  ${data.DateJoined}`}</li>))}
        </ul>
      </div>
    </div>
  </div>
);

export default Background;
