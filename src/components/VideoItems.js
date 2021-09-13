import React, { useState } from "react";
import { default as videosData} from "../data/videos";
import Video from "./Video";

function VideoItems() {
  const [videos, setVideos] = useState(videosData);

  return (
    <section className="proffessors">
      <div className="wrapper">
        <h2 className="proffessors__title">
          Our Proffessors prepared for you some advice.
        </h2>
        <div className="video-items">
          {videos.items.map(item => <Video key={item.filename} data={item} folder={videos.path} />)}
        </div>
      </div>
    </section>
  );
}

export default VideoItems;
