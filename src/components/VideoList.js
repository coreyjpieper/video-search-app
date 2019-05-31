import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const vids = videos.map((video) => {
    return <VideoItem video={video} />
  })
  return <div className="ui relaxed divided list">{vids}</div>;
};

export default VideoList;
