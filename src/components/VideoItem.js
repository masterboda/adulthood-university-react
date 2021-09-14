import React, { useState } from "react";
import Video from "./Video";

function VideoItem({ data, folder, videos, setVideos }) {
  return (
    <div className="video-item">
      <Video
        folder={folder}
        data={data}
        videos={videos}
        setVideos={setVideos}
      />
      <div className="video-item__annotation">
        <h3 className="video-item__name">{data.name}</h3>
        <h5 className="video-item__title">{data.note}</h5>
      </div>
    </div>
  );
}

export default VideoItem;
