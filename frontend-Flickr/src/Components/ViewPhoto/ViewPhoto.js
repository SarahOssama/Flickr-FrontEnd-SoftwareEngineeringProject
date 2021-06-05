import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewPhoto.css';
import UseViewPhotoServices from './UseViewPhotoServices';
import UpperView from './ViewPhotoItems/UpperView';
import LeftView from './ViewPhotoItems/LeftView';
import RightView from './ViewPhotoItems/RightView';

const ViewPhoto = () => {
  const photoInfoD = UseViewPhotoServices();

  return (
    <div className=" viewPhotoPage">
      <div className="viewPhotoUpperComp">
        <UpperView photoInfo={photoInfoD} />
      </div>

      <div className=".container fluid-centered viewSubPhotoInfo">
        {/* <div className=" centered-content   subPhotoContainer"> */}
        <div className="col-xl-12 rowViewPhotoInfo">
          <div className="col-lg-7 viewSubViewLeft">
            <LeftView />
          </div>
          <div className="col-lg-5 viewSubViewPhotoRight">
            <RightView photoInfo={photoInfoD} />
          </div>
        </div>
      </div>
    </div>

  // </div>
  );
};

export default ViewPhoto;
