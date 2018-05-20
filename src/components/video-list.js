import React from 'react';
import VideoListItem from './video-list-item';
import './video-list.css';

const VideoList = (props) => {
  return (
    <div className="video-list">
      {props.videos.map(video => <VideoListItem video={video} key={video.id.videoId} /> )}
    </div>
  );
};

export default VideoList;
