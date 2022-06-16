import React, { useRef } from 'react'
import Video from './container/Video';

export default function UseImperativveHandle() {

  const videoRef:any = useRef();
  console.log(videoRef);
  
  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}
