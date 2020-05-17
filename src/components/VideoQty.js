import React from 'react';

const VideoQty = (props) => {
  return (
    <div className="directory-detail-btm-text text-colorizer video-qty-text">
      {props.qty} Videos
    </div>
  );
};

export default VideoQty;