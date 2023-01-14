import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import axios from "axios";
import YoutubeAPIs from "../api/youtubeAPIs";
import FakeYoutubeAPIs from "../api/fake-youtubeAPIs.js";
import { useYoutubeAPI } from "../context/YoutubeContextApis";

function Videos(props) {
  const { keyword } = useParams();
  const { youtube } = useYoutubeAPI();
  console.log(useYoutubeAPI);
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => youtube.search(keyword));
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>error</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Videos;
