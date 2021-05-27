import './RecentPhotos.css';
/* import { useState } from 'react'; */
import { RiLayoutMasonryFill, RiShareForwardLine } from 'react-icons/ri';
import { AiTwotoneLayout } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import ImageGrid from './ImageGrid';
import SubNav from './SubNav';

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
    <div className="main">
      <SubNav />
      <div className="scrollingLayout">
        <div className="content">
          <div className="headerRow">
            <h4>Explore</h4>
            <div className="layout">
              <a href="/">
                <RiShareForwardLine />
          &nbsp;&nbsp;Share
              </a>
              <a href="/">
                {' '}
                <RiLayoutMasonryFill style={{ rotate: '90deg' }} />
              </a>
              <a href="/">
                {' '}
                <AiTwotoneLayout />
                {' '}
              </a>
            </div>
          </div>
          <div className="photos">
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
