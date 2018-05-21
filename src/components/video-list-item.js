import React from 'react';
import './video-list-item.css';

const VideoListItem = (props) => {
  const { title } = props.video.snippet;
  const { url: thumbnailUrl } = props.video.snippet.thumbnails.default;
  return (
    <div className="video-list-item" onClick={() => props.onSelectVideo(props.video) }>
      <img src={thumbnailUrl} alt={title} className="video-list-item__thumbnail" />
      <p className="video-list-item__title">{title}</p>
    </div>
  );
};

export default VideoListItem;
