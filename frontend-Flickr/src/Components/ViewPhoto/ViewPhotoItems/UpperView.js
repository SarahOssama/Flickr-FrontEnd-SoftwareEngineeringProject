import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { ImEnlarge2 } from 'react-icons/im';
import { AiOutlinePlusSquare, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { TiArrowForwardOutline } from 'react-icons/ti';
import { RiDownloadLine } from 'react-icons/ri';
import './UpperView.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Share from './Share';
import ViewPhotoServices from '../ViewPhotoServices';

const UpperView = () => {
  // const { handleFave } = ViewPhotoServices();
  const viewPhotoIcons = {
    color: 'white',
    height: '20',
    width: '20',
    margin: '7',
  };
  const [show, setShow] = useState(false);
  const [faved, setFaved] = useState(true);

  // const imgDown = 'pexels-eberhard-grossgasteiger-691668.jpg';
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const viewPhotoData = ViewPhotoServices();
  // const imgUrl = `https://fotone.me${viewPhotoData.media_file}`;
  const imgUrl = 'https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg';
  // console.log(imgUrl);
  /**
   * fetch download to download an image
   * @param {event} e
   */
  const download = (e) => {
    // console.log(e);
    fetch(e.target.href, {
      method: 'GET',
      headers: { responseType: 'arraybuffer' },
    })
      .then((response) => {
        // eslint-disable-next-line no-unused-vars
        response.arrayBuffer().then((buffer) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image.png'); // or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(() => {
        // console.log(err);
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
        {faved
          ? <AiFillStar style={viewPhotoIcons} />
          : <AiOutlineStar style={viewPhotoIcons} />}

        <AiOutlinePlusSquare style={viewPhotoIcons} />
        <TiArrowForwardOutline onClick={handleShow} style={viewPhotoIcons} />

        <Share
          shareUrl={imgUrl}
          shows={show}
          onClose={handleClose}
          style={viewPhotoIcons}
        />
        {/* <Link to={imgDown} target="_blank" download> </Link> */}
        <RiDownloadLine
          onClick={(e) => download(e)}
          style={viewPhotoIcons}
        />
        Download

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
