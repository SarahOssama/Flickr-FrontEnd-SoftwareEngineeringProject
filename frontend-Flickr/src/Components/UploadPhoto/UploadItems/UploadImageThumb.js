import React from 'react';
import './UploadImageThumb.css';

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  marginLeft: 80,
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
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  marginTop: 1,
};
const UploadImageThumb = ({ photo, onRemove }) => (
  <div>
    <aside className={thumbsContainer}>
      <div style={thumb} key={photo.name}>

        <div style={thumbInner}>
          <img
            src={photo.preview}
            style={img}
            alt=""
          />
        </div>

      </div>
      <div className="test">
        <h2>Test</h2>
      </div>
    </aside>
    <button type="button" onClick={() => onRemove()}> DeleteButton </button>

  </div>
);

export default UploadImageThumb;
