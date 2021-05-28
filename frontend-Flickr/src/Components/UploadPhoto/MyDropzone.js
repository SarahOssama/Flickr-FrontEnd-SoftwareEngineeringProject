/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './MyDropzone.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

function MyDropzone() {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    setFiles(acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file),
    })));
    console.log(acceptedFiles);
    console.log(rejectedFiles);
  }, []);
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt=""
        />
      </div>
    </div>
  ));
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*',
    onDrop,
    noClick: true,
  });
  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div {...getRootProps({ noClick: true })}>
      <input {...getInputProps()} />
      <div className="dropzoneUpload">
        <aside style={thumbsContainer}>
          {thumbs}
        </aside>
        <div className="emptyUploadState">
          <p className="uploadLimitRemainingCount">You can upload 989 more photos and videos.</p>
          <p>Drag &amp; drop photos and videos here</p>
          <p>or</p>
          <button
            type="button"
            onClick={open}
            className="btn btn-primary"
          >
            Choose photos and videos to upload

          </button>
          <br />
          <a id="proUploads" href="/account/upgrade/pro?coupon=FLICKRPRO15">Get Pro for unlimited uploads</a>
        </div>

      </div>

    </div>
  );
}

export default MyDropzone;
