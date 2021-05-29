import React from 'react';
import UploadImageThumb from './UploadImageThumb';

const UploadImageCard = ({ files }) => (
  <>
    {files.map((file) => (
      <UploadImageThumb key={file.id} photo={file} />
    ))}
  </>
);

export default UploadImageCard;
