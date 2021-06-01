import PhotoSet1 from './PhotoSet1';
import PhotoSet2 from './PhotoSet2';
import PhotoSet3 from './PhotoSet3';

const PhotoCard = ({
  photoData, layout1, layout2, layout3,
}) => (
  <>
    {/* {photoData.map((pDetails) => (
      <h2 key={pDetails.id}>
        {' '}
        {pDetails.id}
        {' '}
      </h2>
    ))} */}

    {photoData.map((pDetails) => (
      <>

        {layout1 && <PhotoSet1 key={pDetails.id} pCard={pDetails} />}
        {layout2 && <PhotoSet2 key={pDetails.id} pCard={pDetails} />}
        {layout3 && <PhotoSet3 key={pDetails.id} pCard={pDetails} />}
      </>
    ))}

  </>
);
export default PhotoCard;
