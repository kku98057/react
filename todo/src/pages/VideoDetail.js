import React from "react";
import { useParams } from "react-router-dom";

function VideoDetail(props) {
  const { videoId } = useParams();
  console.log(videoId);
  return <div>{videoId}</div>;
}

export default VideoDetail;
