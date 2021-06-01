import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Upload.css';
import { Link } from 'react-router-dom';
import MyDropzone from './UploadItems/MyDropzone';

const Upload = () => {
  const openUpload = useRef();
  return (
    <div className=" container-fluid uploadPage">

      <div className=" uploadGlobalNavBar">
        <div className="uploadLeftNavBar">
          <Link to="/Home">
            <img
              Link="/Home"
              alt="Flickr logo. If you click it, you'll go home"
              src="https://combo.staticflickr.com/pw/images/flickr-logo-small.png"
              height="25"
              width="83"
            />
          </Link>
          <Link to="/profile" className="uploadLeftNavBarLinks">Your Photostream</Link>
          <Link to="/Create" className="uploadLeftNavBarLinks">Create</Link>
        </div>
        <div className="uploadRightNavBar">
          <Link to="/profile" className="uploadRightNavBarLinks">Old Uploadr</Link>
          <Link to="/Create" className="uploadRightNavBarLinks">New Here?</Link>
          {' '}

        </div>

      </div>

      <div className=" uploadBody">
        <MyDropzone
          ref={openUpload}

        />
      </div>
    </div>
  );
};

export default Upload;
