import React from 'react';
import './MyDropzone.css';

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
  overflow: 'visible',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};
const UploadImageThumb = ({ photo }) => (
  <div style={thumb} key={photo.name}>
    <div style={thumbInner}>
      <img
        src={photo.preview}
        style={img}
        alt=""
      />
    </div>
  </div>
);

export default UploadImageThumb;
