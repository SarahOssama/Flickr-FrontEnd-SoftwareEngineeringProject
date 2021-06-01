import React from 'react';
import UploadImageThumb from './UploadImageThumb';

const UploadImageCard = ({ files, onRemove }) => (
  <>
    {files.map((file) => (
      <UploadImageThumb key={file.id} photo={file} onRemove={onRemove} />
    ))}
  </>
);

export default UploadImageCard;
