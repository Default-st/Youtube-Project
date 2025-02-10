import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { dummyJson } from "../utils/dummy";
import { Link } from "react-router";
import { useVideoStore } from "../utils/store";

const VideoContainer = () => {
  const { videos, setVideos } = useVideoStore();
  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();
    setVideos(jsonData.items);
    // setVideos(dummyJson.items);
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    videos.length > 0 && (
      <div className="flex flex-wrap cursor-pointer">
        {videos.map((video) => (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default VideoContainer;
