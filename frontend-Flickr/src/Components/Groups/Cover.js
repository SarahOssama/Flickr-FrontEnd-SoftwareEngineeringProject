import React from 'react';
import './Cover.css';
import Data from '../../db2.json';

/**
 * Cover photo and profile picture component
*/
const Cover = () => (
  <div className="profile-container">
    <div className="profile-overlay">
      <div className="profile-image">
        <img
          className="ProImg"
          src="https://i.pinimg.com/736x/6e/ff/53/6eff53e82b80fb5dd7614d5ba054f144.jpg"
          // img-responsive="true"
          height="40%"
          alt=""
        />
      </div>
      <div className="profile-links">
        <div className="name">
          <ul>
            {Data.Groups.map((data) => (
              <a href="/">{data.GroupName}</a>
            ))}
            <button type="button">+ Join Group</button>
          </ul>
        </div>
        <div className="links">
          <ul>
            {Data.Groups.map((data) => (
              <li>
                {data.Members}
                <a href="/">Members</a>
              </li>
            ))}
            {Data.Groups.map((data) => (
              <li>
                {data.PhotosNum}
                <a href="/">Photos</a>
              </li>
            ))}
            {Data.Groups.map((data) => (
              <li>
                {data.Discussions}
                <a href="/">Discussions</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="photos-details">
        <ul>
          {Data.Groups.map((data) => (
            <li>
              Group Since
              {data.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Cover;
