/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FcAddImage } from 'react-icons/fc';
import '../Upload.css';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import UploadPhoto from '../UploadPhoto';
import Conf from '../../../Conf';

// import UploadPhoto from '../UploadPhoto';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyNDI1OTgzLCJqdGkiOiI2ZWJlODE4ZGFhOGE0ZmUzYmZhMGUxZGRhMGJiOTQzNyIsInVzZXJfaWQiOjE3fQ.3DCoK4MxJXX-mITOw3m9uWKRCCw1O8VMSq2DEP7MEWI';

const AreaControl = ({ onClickOpen, toggleUPloadAreaControl, imgUpload }) => {
  const history = useHistory();

  const { handleUpload, done } = UploadPhoto({ imgUpload });
  const [show, setShow] = useState(false);
  if (done) { history.push('/home'); }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className=" uploadWorkingAreaControls">

      <div className="uploadLeftAreaControls">
        <button
          type="button"
          id="addUploadButton"
          onClick={onClickOpen}
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
            <button
              type="button"
              onClick={handleShow}
            >
              Upload

            </button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleUpload}>
                  Upload
                </Button>
                <Button variant="seconadry" onClick={handleClose}>
                  Continue Editing
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )
        : (
          <div className="uploadDisabledRightAreaControls">
            <p id="disabledUpload">Upload</p>
          </div>
        )}
    </div>
  );
};

export default AreaControl;
