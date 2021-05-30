/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useCallback, useEffect, useState, forwardRef, useImperativeHandle,
} from 'react';
import { useDropzone } from 'react-dropzone';
import './MyDropzone.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadImageThumb from './UploadImageThumb';
import EmptyState from './EmptyState';
import AreaControl from './AreaControl';

/**
 * to Drag and drop images to Upload
 * @returns image from upload
 */
const MyDropzone = forwardRef((props, ref) => {
  const [toggleUpload, setToggleUpload] = useState(false);
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    setFiles(acceptedFiles[0]);
    // console.log(acceptedFiles.map((file) => Object.assign(file, {
    //   preview: URL.createObjectURL(file),
    // })));

    setToggleUpload(true);
    console.log(acceptedFiles);
    console.log(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*',
    onDrop,
    noClick: true,
  });
  useImperativeHandle(ref, () => ({

    getAlert() {
      open();
    },

  }));
  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const remove = (file) => {
    const newFiles = [...files]; // make a var for the new array
    newFiles.splice(file, 1); // remove the file from the array
    setFiles(newFiles); // update the state
    setToggleUpload(true);
  };
  return (
    <div {...getRootProps({ noClick: true })}>
      <input {...getInputProps()} />
      <AreaControl onClickOpen={open} toggleUPloadAreaControl={toggleUpload} imgUpload={files} />
      {toggleUpload && (
      <div className="editPanelScrollWrapper">
        <div className="sidenavUpload">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/clients">Clients</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      )}
      <div className="dropzoneUpload">

        <UploadImageThumb photo={files} />
        <div className="emptyUploadState" id="toggleUploadState">
          {!toggleUpload && <EmptyState onClickOpen={open} />}
        </div>
        {/* <button type="button" onClick={() => remove()}> DeleteButton </button> */}
      </div>

    </div>
  );
});

export default MyDropzone;
