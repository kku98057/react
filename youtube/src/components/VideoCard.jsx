import React from "react";

function VideoCard({ id, video }) {
  return <div>{video.snippet.title}</div>;
}

export default VideoCard;
