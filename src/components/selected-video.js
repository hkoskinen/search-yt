import React from 'react';
import './selected-video.css';

const SelectedVideo = (props) => {
  if (!props.video) return null;

  const { videoId } = props.video.id;
  const { title, description, channelTitle } = props.video.snippet;
  const URL = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video">
      <div className="video__iframe-container">
        <iframe src={URL} className="video__iframe" title="mytitle"></iframe>
      </div>
      <p>{title} {description} {channelTitle}</p>
    </div>
  );
};

export default SelectedVideo;
