/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './Photo.css';
import { MdMoreHoriz } from 'react-icons/md';
import { AiOutlinePlusSquare, AiOutlineStar } from 'react-icons/ai';
import { RiChat3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import ViewPhoto from '../../ViewPhoto/ViewPhoto';
// import ViewPhotoServices from '../../ViewPhoto/ViewPhotoServices';

/* eslint-disable react/prop-types */

const PhotoSet1 = ({ pCard }) => {
  // console.log(moment.utc(pCard.date_posted).local().startOf('seconds').fromNow());
  const date = moment.utc(pCard.date_posted).local().startOf('seconds').fromNow();
  const imgSrc = `https://fotone.me${pCard.media_file}`;
  // const imgSrc = pCard.img;
  const avatar = 'https://www.w3schools.com/w3images/avatar2.png';
  // const [viewGetPhotoData, setViewGetphotoData] = useState([]);
  // const handleGetViewPhoto = () => {
  //   // const viewPhotoData = ViewPhotoServices(pCard.id, setViewGetphotoData);
  //   // console.log(viewPhotoData);
  //   // ViewPhoto(imgSrc);
  //   history.push('/photo');
  // };

  return (
    <div className="containerHome">
      <div className="imageHeaderHome">
        <img src={avatar} alt="Avatar" className="avatar" />
        <h3>{pCard.owner.username}</h3>
        <h3>{date}</h3>
        <MdMoreHoriz style={{ color: 'rgb(137, 137, 137)', marginLeft: '7px' }} />
      </div>
      <div className="photoCardHolder">
        <Link
          to="/photos"

        >
          <img
            src={imgSrc}
            alt="Avatar"
            className="imageCompHome"
          />
        </Link>
        <div className="imgOverlayHome">
          <div className="overlayLeftContHome">
            <Link className="photoNameLinkHome" to="/photos">{pCard.title}</Link>

          </div>
          <div className="overlayRightContHome" />
          <span className="overlayFave" role="button">
            <AiOutlineStar />
            <span>{pCard.count_favourites}</span>

          </span>
          <span className="overlayCommentHome" role="button">
            <RiChat3Line />
            <span>{pCard.count_comments}</span>

          </span>

          <span className="overlayAddToHome" role="button">
            <AiOutlinePlusSquare />
          </span>

        </div>
      </div>

    </div>
  );
};

export default PhotoSet1;
