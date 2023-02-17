import React, { useEffect, useContext } from 'react';
import MouseContext from '../contexts/mouse-context';

export default function VideoPlayer() {
  const contextState = useContext(MouseContext);

  function videoEndedHandler() {
    console.log('video finished playing.');
    contextState.setFullScreenVideo(false);
    contextState.setStartTime(0);
  }

  function clickOutsideHandler() {
    contextState.setStartTime(contextState.videoPlayerRef?.current?.currentTime || 0);
    contextState.setFullScreenVideo(false);
    contextState.mouseExitEvent();
  }

  useEffect(() => {
    contextState.videoPlayerRef?.current?.addEventListener('ended', videoEndedHandler);
    return () => {
      contextState.videoPlayerRef?.current?.removeEventListener('ended', videoEndedHandler);
    };
  });
  return (
    <div
      onClick={clickOutsideHandler}
      className="absolute top-0 left-0 right-0 bottom-0 z-40 flex h-full min-h-full items-center justify-center overflow-scroll bg-slate-800/80">
      <video
        onMouseEnter={contextState.mouseEnterEvent}
        onMouseLeave={contextState.mouseExitEvent}
        loop={false}
        ref={contextState.videoPlayerRef}
        controls
        autoPlay
        className="w-auto">
        <source src={`/video.mp4#t=${contextState.startTime}`} type="video/mp4" />
      </video>
    </div>
  );
}
