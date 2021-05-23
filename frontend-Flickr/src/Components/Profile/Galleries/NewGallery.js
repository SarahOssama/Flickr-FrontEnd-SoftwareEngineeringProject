/* eslint-disable jsx-a11y/label-has-associated-control */
import './NewGallery.css';
import { BsX } from 'react-icons/bs';

const NewGallery = () => (
  <div className="addGalleryLayout">
    <div className="addGalleryForm">
      <div className="formLayout">
        <BsX style={{ alignSelf: 'end', cursor: 'pointer' }} />
        <h4>Create a new gallery</h4>
        <textarea placeholder="Gallery name" rows="1" />
        <textarea placeholder="Description (optional)" rows="4" style={{ marginBottom: '50px' }} />
        <div className="buttons">
          <input type="button" value="Create" id="1" style={{ backgroundColor: 'rgb(110, 161, 255)' }} />
          <input type="button" value="Cancel" id="2" style={{ backgroundColor: 'gray' }} />
        </div>
      </div>
    </div>
  </div>
);

export default NewGallery;
