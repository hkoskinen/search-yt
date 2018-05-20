import React from 'react';
import './video-list-item.css';

const VideoListItem = ({video}) => {
  return (
    <div className="video-list-item">
      <p>{video.snippet.title}</p>
    </div>
  );
};

export default VideoListItem;
