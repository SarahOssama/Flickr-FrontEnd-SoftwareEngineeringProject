import React from 'react';
import './Member.css';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { FaUserFriends } from 'react-icons/fa';
import Data from '../../../db2.json';

/**
 * Cover photo and profile picture component
*/
const Member = () => (
  <div className="memberprofile-container">
    <div className="memberprofile-overlay">
      <div className="memberprofile-image">
        <img
          className="memberProImg"
          src="https://i.pinimg.com/736x/6e/ff/53/6eff53e82b80fb5dd7614d5ba054f144.jpg"
          img-responsive
          height="20%"
          alt=""
        />
      </div>
      <div className="memberprofile-links">
        <div className="memberName">
          <h>Menna Elkhodary</h>
          <button type="button" onClick="alert('Group Rules')">+ Follow</button>
        </div>
        <div className="memberLinks">
          <a href="/">
            <HiOutlinePhotograph style={{ height: '25', width: '35', color: 'grey' }} />
            8765
          </a>
          <a href="/">
            <FaUserFriends style={{ height: '20', width: '30', color: 'grey' }} />
            9876
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Member;
