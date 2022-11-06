import css from './Hero.module.css';
// import { Socials } from 'components/Socials/Socials';
import { useEffect, useRef } from 'react';
// import video from '../../video/video.mp4'
import videoTwo from '../../video/city2.mp4';
// import videoVawes from '../../video/video_vawes.mp4'
export const Hero = ({ yOffset }) => {
  const vidRef = useRef(null);

  const handlePlayVideo = () => {
    vidRef.current.play();
  };

  useEffect(() => {
    handlePlayVideo();
  }, []);

  return (
    // style={{ opacity: 100/yOffset}}
    <div className={css.hero}>
      {/* <Socials yOffset={yOffset}  /> */}
      <video
        src={videoTwo}
        ref={vidRef}
        onClick={handlePlayVideo}
        type="video/mp4"
        className={css.video}
        autoPlay
        muted
        loop
        
      />
      <div className={css.leftSide}></div>
      <div
        className={css.rightSide}
        data-aos="fade-left"
        style={{
          transform: yOffset > 50 ? `translateX(700px)` : `translateX(0)`,
        }}
        data-aos-duration="1000"
      ></div>
      <h1
        data-aos="fade-top"
        //   data-aos-delay={500}
        data-aos-duration="1000"
        className={css.title}
        style={{
          transform: yOffset > 50 ? `translateX(-1000px)` : `translateX(0)`,
        }}
        // style={{ transform: `translateX(-${yOffset}px) `,  }}
      >
        Ivan Pikun
      </h1>
      <h2
        style={{
          transform: yOffset > 50 ? `translateX(-1500px)` : `translateX(0)`,
        }}
        data-aos="fade-right"
        data-aos-duration="1000"
        className={css.subTitle}
      >
        Web-developer
      </h2>

      <div className={css.bottomSide}>
        <div>Получить консултацию</div>
      </div>
    </div>
  );
};
