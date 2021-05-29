import React from 'react';

const EmptyState = ({ onClickOpen }) => {
  const imgSize = 1000;

  return (
    <div>
      <p className="uploadLimitRemainingCount">
        You can upload
        {' '}
        {imgSize}
        {' '}
        more photos and videos.
      </p>
      <p>Drag &amp; drop photos and videos here</p>
      <p>or</p>
      <button
        type="button"
        onClick={onClickOpen}
        className="btn btn-primary"
        title="No file chosen"

      >
        Choose photos and videos to upload

      </button>
      <br />
      <br />
      <a id="proUploads" href="/account/upgrade/pro?coupon=FLICKRPRO15">Get Pro for unlimited uploads</a>

    </div>
  );
};

export default EmptyState;
