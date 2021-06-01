import './Member.css';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { FaUserFriends } from 'react-icons/fa';

// import { useState, useEffect } from 'react';
// // eslint-disable-next-line import/no-cycle
// import Mapmember from './Mapmember';
/**
 * Cover photo and profile picture component
*/

const Member = () => (
  // const [memberData, setmemberData] = useState([]);
  // const fetchMember = async () => {
  //   const res = await fetch('http://localhost:5000/GroupMemberData');
  //   const data = await res.json();
  //   return data;
  // };
  // useEffect(() => {
  //   const getMember = async () => {
  //     const memberFromServer = await fetchMember();
  //     console.log(memberFromServer);
  //     setmemberData(memberFromServer);
  //   };
  //   // getMember();
  // }, []);

  <div className="memberprofile-container">
    <div className="memberprofile-overlay">
      <div className="memberprofile-image">
        <img
          className="memberProImg"
          src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"
          // img-responsive="true"
          height="20%"
          alt=""
        />
      </div>
      <div className="memberprofile-links">
        <div className="memberName">
          <a href="/"> Menna </a>
          <button type="button">+ Follow</button>
        </div>
        <div className="memberLinks">
          <a href="/">
            <HiOutlinePhotograph style={{ height: '25', width: '35', color: 'grey' }} />
            785
          </a>
          <a href="/">
            <FaUserFriends style={{ height: '20', width: '30', color: 'grey' }} />
            987
          </a>
        </div>
        {/* <div className="member">
            {' '}
            <Mapmember memberData={memberData} />
            {' '}
          </div> */}
      </div>
    </div>
  </div>
);

export default Member;
