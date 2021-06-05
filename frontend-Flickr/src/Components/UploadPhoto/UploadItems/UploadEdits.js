import React from 'react';
import './MyDropzone.css';
import { Form } from 'react-bootstrap';

const UploadEdits = () => (
  <div className="editPanelScrollWrapper">
    <div className="sidenavUpload">
      <div className="editorPanel">
        <div className="editorPanelWrapper">
          <h3 id="editPanelTitle">Edit 1 photo:</h3>
          <div className="editPanelForm">
            <ul className="editorOptions">
              <li className="editorOption">
                <form>
                  <input id="editr-title" name="title" type="text" placeholder="Add a title" tabIndex="0" />
                  <textarea
                    id="editr-description"
                    type="text"
                    name="description"
                    placeholder="Add a description"
                    wrap="on"
                    tabIndex="0"
                  />

                </form>
              </li>
              <li className="editorOption">Tags</li>
              <li className="editorOption">People</li>
              <li className="editorOption">Albums</li>
              <li className="editorOption">Groups</li>
              <li className="editorOption">
                <Form>
                  <div key="default-checkbox" className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id="default-checkbox"
                      label="Public"
                    />

                  </div>

                </Form>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
);
export default UploadEdits;
