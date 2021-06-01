import React from 'react';
import './RightView.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RightView = () => {
  const views = 234;
  const faves = 3;
  const comments = 9;
  return (
    <div>
      <div className="rightRow1">
        <div className="subPhotoRightStars">
          <div className="starsDetails">
            <div className="viewCount">
              <div className="viewCountLabel">{views}</div>
              <div className="starsLabel">views</div>

            </div>

            <div className="faveCount">
              <div className="favesCountLabel">{faves}</div>
              <div className="favesLabel">faves</div>
            </div>

            <div className="commentCount">
              <div className="commentsCountLabel">{comments}</div>
              <div className="commentsLabel">comments</div>
            </div>

          </div>
        </div>
        <div className="dateLicenseContainer">
          <p> &copy; All rights reserved</p>
        </div>

        {/* <li><hr className="dropdown-divider" /></li> */}

      </div>
      <div className="subPhotoCharmView">
        This photo is in 8 groups
      </div>
      <div className="subPhotoContexts">
        This Photo in 88 albums
      </div>
      <div className="subPhotoTags">
        tags
      </div>
      <div className="subPhotoAdditionalInfo">
        Additional Info
      </div>
    </div>
  );
};
export default RightView;
