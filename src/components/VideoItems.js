import React, { useState } from "react";
import { default as videosData } from "../data/videos";
import VideoItem from "./VideoItem";

function VideoItems() {
  const [videos, setVideos] = useState(videosData);

  return (
    <section className="proffessors">
      <div className="wrapper">
        <h2 className="proffessors__title">
          Our Proffessors prepared for you some advice.
        </h2>
        <div className="video-items">
          {videos.items.map((item) => (
            <VideoItem
              key={item.filename}
              data={item}
              folder={videos.path}
              videos={videos}
              setVideos={setVideos}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoItems;
