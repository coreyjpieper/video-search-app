import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const vids = videos.map((video) => {
    return <VideoItem key="1" video={video} onVideoSelect={onVideoSelect} />
  })
  return <div className="ui relaxed divided list">{vids}</div>;
};

export default VideoList;
