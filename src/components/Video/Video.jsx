import css from './Video.module.css';
// import { Player } from 'video-react';
import video from '../../video/video.mp4'
import { useRef } from 'react';
export const Video = () => {
  const vidRef = useRef(null);

  const handlePlayVideo = () => {
    vidRef.current.play();
  };
  return (
    <video src={video} autoPlay className={css.video} ref={vidRef} onClick={handlePlayVideo} >
      
    </video>

    //         <video src='../video/video.mp4' autoPlay muted className={css.video} >

    // </video>
    // <Player className={css.video}>
    //   <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    // </Player>
  );
  // ref={(player) => { this.player = player }
};
