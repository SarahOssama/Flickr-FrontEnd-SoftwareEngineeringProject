/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useCallback, useEffect, useState, forwardRef, useImperativeHandle,
} from 'react';
import { useDropzone } from 'react-dropzone';
import './MyDropzone.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadImageCard from './UploadImageCard';
import EmptyState from './EmptyState';
import AreaControl from './AreaControl';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};
/**
 * to Drag and drop images to Upload
 * @returns image from upload
 */
const MyDropzone = forwardRef((props, ref) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    setFiles(acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file),
    })));
    document.getElementById('toggleUploadState').classList.toggle('hideonDrop');

    console.log(acceptedFiles);
    console.log(rejectedFiles);
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
    document.getElementById('toggleUploadState').classList.toggle('showonRemove'); // show State on Remove
  };
  return (
    <div {...getRootProps({ noClick: true })}>
      <input {...getInputProps()} />
      <AreaControl onClickOpen={open} />
      <div className="dropzoneUpload">
        <aside className={thumbsContainer}>
          <UploadImageCard files={files} />
        </aside>
        <div className="emptyUploadState" id="toggleUploadState">
          <EmptyState onClickOpen={open} />
        </div>
        <button type="button" onClick={() => remove()}> DeleteButton </button>
      </div>

    </div>
  );
});

export default MyDropzone;
