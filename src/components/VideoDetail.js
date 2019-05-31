import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) { // no selected video
    return <div>Loading...</div>
  }
  return (
    <div className="ui segment">
      <h4 classname="ui heaader"> {video.snippet.title} </h4>
      <p>{video.snippet.description}</p>
    </div>
  );
}

export default VideoDetail;
