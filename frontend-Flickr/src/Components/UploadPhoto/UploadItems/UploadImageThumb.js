import React from 'react';
import './UploadImageThumb.css';
import { FaTimes } from 'react-icons/fa';

const thumb = {
  display: 'inline-block',
  borderRadius: 2,
  marginBottom: 0,
  marginRight: 0,
  marginLeft: 0,
  width: 100,
  height: 100,
  padding: 0,
  boxSizing: 'border-box',
  minWidth: '64px',
  minHeight: '42px',
  maxHeight: '126px',
  maxWidth: '172px',
};

const thumbInner = {
  display: 'flex',
  overflow: 'visible',
  minWidth: '64px',
  minHeight: '42px',
  maxHeight: '126px',
  maxWidth: '172px',
};

const img = {
  display: 'block',
  width: 'auto',
  height: 'auto',
  maxWidth: '166px',
  maxHeight: '120px',
  verticalAlign: 'bottom',
  padding: '1px',
  border: '1px solid #eaeaea',

};
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  flexWrap: 'wrap',
  marginTop: 0,
  marginLeft: 216,
};
const UploadImageThumb = ({ photo, onRemove }) => (
  <div>
    <aside style={thumbsContainer}>
      <div className="photoItemContent">
        <div className="photoWrapper">
          <div style={thumb} key={photo.name}>
            <FaTimes
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => onRemove()}
            />
            <div style={thumbInner}>
              <img
                src={photo.preview}
                style={img}
                alt=""
              />
            </div>
          </div>
          <a href="/" className="gridItemDelete">
            <span>[x]</span>
          </a>

        </div>
        <div className="photoEditable">
          <div className="test">
            <h2>Test</h2>
          </div>
        </div>

      </div>

    </aside>
    <h2>. </h2>
  </div>
);

export default UploadImageThumb;
