import React from 'react';
import './video.css';

const Video = (props) => {
  const videoId = 'xsSnOQynTHs';
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video">
      <div className="video__iframe-container">
        <iframe src={url} className="video__iframe" title="mytitle"></iframe>
      </div>
    </div>
  );
};

export default Video;
