import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UploadPhoto.css';
import Dropzone from 'react-dropzone';
import MyDropzone from './MyDropzone';

const UploadPhoto = () => (
  <div className=" container-fluid uploadPage">

    <div className=" uploadGlobalNavBar">
      <div className="uploadLeftNavBar">
        <h2>UploadNav</h2>
      </div>
      <div className="uploadRightNavBar">
        <h2>UploadNav</h2>
      </div>

    </div>

    <div className=" uploadWorkingAreaControls">

      <div className="uploadLeftAreaControls">
        <h2>AreaControl</h2>
      </div>
      <div className="uploadRightAreaControls">
        <h2>AreaControl</h2>
      </div>
    </div>
    <div className=" uploadBody">
      <MyDropzone />
      {/* <Dropzone>Drag and drop photos and videos here</Dropzone> */}

    </div>
  </div>
);

export default UploadPhoto;
