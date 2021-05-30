/* eslint-disable react/prop-types */
import './ImageGrid.css';
import Photo from '../HomePage/Items/Photo';

const ImageGrid = ({ photoData }) => (
  <div className="imageContainer" style={{ justifyContent: 'space-between' }}>
    {photoData.map((pDetails) => (<Photo key={pDetails.id} pCard={pDetails} />
    ))}
  </div>
);

export default ImageGrid;
