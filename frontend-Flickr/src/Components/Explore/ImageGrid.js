/* eslint-disable react/prop-types */
import './ImageGrid.css';
import PhotoSet1 from '../HomePage/Items/PhotoSet1';

const ImageGrid = ({ photoData }) => (
  <div className="imageContainer" style={{ justifyContent: 'space-between' }}>
    {photoData.map((pDetails) => (<PhotoSet1 key={pDetails.id} pCard={pDetails} />
    ))}
  </div>
);

export default ImageGrid;
