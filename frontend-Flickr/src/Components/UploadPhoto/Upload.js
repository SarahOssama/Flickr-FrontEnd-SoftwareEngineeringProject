import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Upload.css';
import { Link } from 'react-router-dom';
import MyDropzone from './MyDropzone';

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
          <Link href="/profile" class="uploadLeftNavBarLinks">Your Photostream</Link>
          <Link href="/Create" class="uploadLeftNavBarLinks">Create</Link>
        </div>
        <div className="uploadRightNavBar">
          <Link href="/profile" class="uploadRightNavBarLinks">Old Uploadr</Link>
          <Link href="/Create" class="uploadRightNavBarLinks">New Here?</Link>
          {' '}

        </div>

      </div>

      {/* <div className=" uploadWorkingAreaControls">

        <div className="uploadLeftAreaControls">
          <button
            type="button"
            id="addUploadButton"
            onClick={() => {
              openUpload.current.getAlert();
              setToggleUploadAreaControl(true);
            }}
            title="No file chosen"
          >
            <FcAddImage />
            {' '}
            Add

          </button>
        </div>

        {toggleUPloadAreaControl
          ? (
            <div className="uploadEnabledRightAreaControl">
              <h2>Enabled</h2>
            </div>
          )
          : (
            <div className="uploadDisabledRightAreaControls">
              <p id="disabledUpload">Upload</p>
            </div>
          )}
      </div> */}
      <div className=" uploadBody">
        <MyDropzone
          ref={openUpload}

        />
      </div>
    </div>
  );
};

export default Upload;
