import './RecentPhotos.css';
/* import { useState } from 'react'; */
import { RiLayoutMasonryFill, RiShareForwardLine } from 'react-icons/ri';
import { AiTwotoneLayout } from 'react-icons/ai';

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
        {/* <div className="photos"> */}
        {/*   <div className="column"> */}
        {/*     <div className="row" id={1} style={{ backgroundImage: 'https://i.pinimg.com/originals/62/5b/82/625b824dc1cb31c58361655ff5e47f9b.jpg' }} /> */}
        {/*     <div className="row" id={2} style={{ backgroundImage: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190808205502-23-week-in-photos-0809-restricted.jpg' }} /> */}
        {/* </div> */}
        {/*  </div> */}
      </div>
    </div>
  </div>
);

export default RecentPhotos;
