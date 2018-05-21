import React from 'react';
import './video-list-item.css';

const VideoListItem = ({video}) => {
  const { title, description, channelTitle } = video.snippet;
  const { url: thumbnailUrl } = video.snippet.thumbnails.default;
  return (
    <div className="video-list-item">
      <img src={thumbnailUrl} alt={title} className="video-list-item__thumbnail" />
      <p>{title} by {channelTitle}</p>
    </div>
  );
};

export default VideoListItem;
