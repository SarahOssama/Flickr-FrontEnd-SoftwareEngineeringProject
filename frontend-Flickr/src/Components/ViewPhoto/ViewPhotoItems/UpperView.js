import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { ImEnlarge2 } from 'react-icons/im';
import { AiOutlinePlusSquare, AiOutlineStar } from 'react-icons/ai';
import { TiArrowForwardOutline } from 'react-icons/ti';
import { RiDownloadLine } from 'react-icons/ri';
import './UpperView.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Share from './Share';

const UpperView = () => {
  const viewPhotoIcons = {
    color: 'white',
    height: '20',
    width: '20',
    margin: '7',
  };
  const [show, setShow] = useState(false);
  const imgUrl = 'https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg';

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: 'GET',
      headers: { responseType: 'arraybuffer' },
    })
      .then((response) => {
        response.arrayBuffer().then((buffer) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image.png'); // or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="viewPhotoUpperComp">
      <a className="navigateTargetNavigatePrev" href="/photos">
        ...
      </a>
      <div className="photoViewMedia">
        <img
          width="533"
          height="400"
          src={imgUrl}
          className="low-res-photo"
          alt="The Dome at Casa Linda | by Studio d'Xavier"
        />
      </div>
      <a className="navigateTargetNavigateNext" href="/photos">
        ...
      </a>
      <div className="toggleEnlarge">
        <ImEnlarge2 style={viewPhotoIcons} />
      </div>
      <div className="photoEngView">
        <AiOutlineStar style={viewPhotoIcons} />
        <AiOutlinePlusSquare style={viewPhotoIcons} />
        <TiArrowForwardOutline onClick={handleShow} style={viewPhotoIcons} />

        <Share
          shareUrl={imgUrl}
          shows={show}
          onClose={handleClose}
          style={viewPhotoIcons}
        />
        <RiDownloadLine
          onClick={(e) => download(e)}
          style={viewPhotoIcons}
        />
      </div>
      <div className="backEntryPoint">
        <Link to="/Home">
          <BiArrowBack style={viewPhotoIcons} />
          Back to activity feed
        </Link>
      </div>

      <div className="imageSlidder" />
    </div>
  );
};

export default UpperView;
