import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const vids = videos.map((video) => {
    return <VideoItem video={video} />
  })
  return <div>{vids}</div>;
};

export default VideoList;
