import React from 'react';
import './MyDropzone.css';

const UploadEdits = () => (
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
);

export default UploadEdits;
