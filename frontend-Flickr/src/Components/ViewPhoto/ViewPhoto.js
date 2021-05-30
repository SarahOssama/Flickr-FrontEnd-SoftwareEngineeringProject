import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewPhoto.css';

import UpperView from './ViewPhotoItems/UpperView';

const ViewPhoto = () => (
  <div className=" viewPhotoPage">
    <div className="viewPhotoUpperComp">
      <UpperView />
    </div>

    <div className=".container fluid-centered viewSubPhotoInfo">
      {/* <div className=" centered-content   subPhotoContainer"> */}
      <div className="col-xl-12 rowViewPhotoInfo">
        <div className="col-lg-7 viewSubViewLeft">
          <h2>Left View</h2>
        </div>
        <div className="col-lg-5 viewSubViewPhotoRight">
          <h2>Right View</h2>
        </div>
      </div>
    </div>
  </div>

  // </div>
);

export default ViewPhoto;
