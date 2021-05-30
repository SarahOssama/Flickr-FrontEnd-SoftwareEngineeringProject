/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './RecentPhotos.css';
import { RiLayoutMasonryFill, RiShareForwardLine } from 'react-icons/ri';
import { BsSquareFill, BsX } from 'react-icons/bs';
import { ImFacebook2, ImTumblr2 } from 'react-icons/im';
import { FaTwitterSquare, FaPinterestSquare } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import ImageGrid from './ImageGrid';
import SubNav from './SubNav';

function openShareExplore(e) {
  document.getElementById('shareExplore').style.display = 'block';
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.log('Share Explore');
}

function closeShareExplore(e) {
  document.getElementById('shareExplore').style.display = 'none';
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.log('close Share Explore');
}

const RecentPhotos = () => {
  const [photoData, setphotoData] = useState([]);

  const fetchPhoto = async () => {
    const res = await fetch('http://localhost:5000/photoData');
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    const getPhoto = async () => {
      const photoFromServer = await fetchPhoto();
      setphotoData(photoFromServer);
    };
    getPhoto();
  }, []);

  return (
    <div className="mainExplore" style={{ backgroundColor: '#fafafa' }}>
      <div id="shareExplore">
        <div className="addGalleryLayout">
          <div className="addGalleryForm">
            <div className="formLayout">
              <BsX style={{ alignSelf: 'end', cursor: 'pointer' }} onClick={closeShareExplore} />
              <h4 style={{ fontWeight: 'bolder', marginBottom: '5px' }}>Share Explore to:</h4>
              <div id="shareIconsLinks">
                <span style={{ borderBottom: '3px solid #0091dc' }}>Share</span>
                <span>Embed</span>
                <span>Email</span>
              </div>
              <div id="shareIcons">
                <ImFacebook2 style={{ cursor: 'pointer', color: '#4d4d7a' }} />
                <ImTumblr2 style={{ cursor: 'pointer' }} />
                <FaTwitterSquare style={{ cursor: 'pointer', color: '#53bddd' }} />
                <FaPinterestSquare style={{ cursor: 'pointer', color: '#dd2525' }} />
              </div>
              <h5 id="shareLink">https://flic.kr/y/3Gy5FCb</h5>
            </div>
          </div>
        </div>
      </div>
      <SubNav />
      <div className="scrollingLayoutExplore" style={{ position: 'relative', top: '160px' }}>
        <div className="contentExplore">
          <div className="headerRowExplore" style={{ height: '50px' }}>
            <h4>Explore</h4>
            <div className="layoutExplore">
              <span onClick={openShareExplore} style={{ color: '#858585', cursor: 'pointer', fontSize: '115%' }}>
                <RiShareForwardLine style={{ marginRight: '3px' }} />
                Share
              </span>
              <span style={{ color: '#a6a6a6', cursor: 'pointer', fontSize: '115%' }}>
                {' '}
                <RiLayoutMasonryFill style={{ rotate: '90deg' }} className="selectedItemExplore" />
              </span>
              <span style={{ color: '#a6a6a6', cursor: 'pointer', alignSelf: 'center' }}>
                {' '}
                <BsSquareFill />
                {' '}
              </span>
            </div>
          </div>
          <div className="photosExplore">
            {' '}
            <ImageGrid photoData={photoData} />
            {' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPhotos;
