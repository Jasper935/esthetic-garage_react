import { useEffect, useRef } from 'react';
import css from './Hero.module.css';
import video from '../../video/IMG_0156.mp4'

export const Hero = () => {
  const vidRef = useRef(null);

  const handlePlayVideo = () => {
    vidRef.current.play();
  };

  useEffect(() => {
    handlePlayVideo();
  }, []);

  return (
    <div className={css.hero}>
      <video
        src={video }
        ref={vidRef}
        onClick={handlePlayVideo}
        type="video/mp4"
        className={css.video}
        autoPlay
        muted
        loop
      />
    </div>
  );
};
