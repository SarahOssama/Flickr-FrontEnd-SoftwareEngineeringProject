/* eslint-disable react/prop-types */
import Photo from './Photo';

const PhotoCard = ({ photoData }) => (
  <>
    {/* {photoData.map((pDetails) => (
      <h2 key={pDetails.id}>{pDetails.owner.ownerName}</h2>))} */}

    {photoData.map((pDetails) => (<Photo key={pDetails.id} pCard={pDetails} />
    ))}

  </>
);

export default PhotoCard;
