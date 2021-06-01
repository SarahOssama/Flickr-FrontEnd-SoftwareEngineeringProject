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

/**
 * to Drag and drop images to Upload
 * @returns image from upload
 */
const MyDropzone = forwardRef((props, ref) => {
  const [toggleUpload, setToggleUpload] = useState(false);
  const [files, setFiles] = useState([]);
  const [imgURL, setimgURL] = useState('');

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    // setimgURL(acceptedFiles[0]);
    setFiles(acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file),
    })));
    // setFiles(acceptedFiles[0]);
    // console.log(acceptedFiles.map((file) => Object.assign(file, {
    //   preview: URL.createObjectURL(file),
    // })));

    // console.log(imgURL);
    setToggleUpload(true);
    console.log(acceptedFiles[0]);
  }, []);

  const onDropAccepted = useCallback(
    (acceptedFiles) => {
      setimgURL(acceptedFiles[0]);
      console.log(imgURL);
    },
    [],
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*',
    onDrop,
    noClick: true,
    onDropAccepted,
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
    setToggleUpload(false);
  };
  return (
    <div {...getRootProps({ noClick: true })}>
      <input {...getInputProps()} />
      <AreaControl onClickOpen={open} toggleUPloadAreaControl={toggleUpload} imgUpload={imgURL} />
      {/* <button type="button" onClick={() => remove()}> DeleteButton </button> */}

      {toggleUpload && (
      <div className="editPanelScrollWrapper">
        <div className="sidenavUpload">
          <div className="editorPanel">
            <div className="editorPanelWrapper">
              <h3 id="editPanelTitle">Edit 1 photo:</h3>
              <div className="editPanelForm">
                <ul className="editorOptions">
                  <li className="editorOption">Title</li>
                  <li className="editorOption">Tags</li>
                  <li className="editorOption">People</li>
                  <li className="editorOption">Albums</li>
                  <li className="editorOption">Groups</li>
                  <li className="editorOption">Settings</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      )}
      <div className="dropzoneUpload">
        {toggleUpload && <UploadImageCard files={files} onRemove={remove} />}

        <div className="emptyUploadState" id="toggleUploadState">
          {!toggleUpload && <EmptyState onClickOpen={open} />}
        </div>
      </div>

    </div>
  );
});

export default MyDropzone;
