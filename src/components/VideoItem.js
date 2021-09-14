import React, { useState } from "react";

function Video({data, folder}) {
  const [state, setState] = useState({
    play: false,
  });

  return (
    <div className="video-item">
      <div className="video">
        <video src={`${folder}/${data.filename}`}></video>
      </div>
      <h3 className="video-item__title">{data.name}</h3>
      <h5 className="video-item__annotation">{data.note}</h5>
    </div>
  );
}

export default Video;
