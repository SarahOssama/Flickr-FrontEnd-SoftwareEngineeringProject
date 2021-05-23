import './RecentPhotos.css';
/* import { useState } from 'react'; */
import { RiLayoutMasonryFill, RiShareForwardLine } from 'react-icons/ri';
import { AiTwotoneLayout } from 'react-icons/ai';
import ImageGrid from './ImageGrid';

const RecentPhotos = () => (
  <div className="main">
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
          <ImageGrid />
          {' '}
        </div>
      </div>
    </div>
  </div>
);

export default RecentPhotos;
