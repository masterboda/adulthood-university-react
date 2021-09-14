import React, { useEffect, useRef } from "react";

function Video({ folder, data, videos, setVideos }) {
  const media = useRef();

  useEffect(() => {
    const video = media.current;

    video.addEventListener("ended", stopMedia);
    video.addEventListener("play", onPlay);

    return () => {
      video.removeEventListener("ended", stopMedia);
      video.removeEventListener("play", onPlay);
    };
  }, []);

  useEffect(() => {
    if (data.paused) media.current.pause();
  }, [data.paused]);

  function onClick(e) {
    const video = media.current;

    if (video.paused) video.play();
    else video.pause();
  }

  function onPlay() {
    setVideos({
      ...videos,
      items: videos.items.map((item) => {
        return { ...item, paused: item.filename !== data.filename };
      }),
    });
  }

  function stopMedia() {
    const video = media.current;

    video.pause();
    video.currentTime = 0;
  }

  return (
    <div className="video">
      <video
        ref={media}
        onClick={onClick}
        src={`${folder}/${data.filename}`}
        style={{ ...data.options }}
      ></video>
    </div>
  );
}

export default Video;
