import { useEffect, useRef } from 'react';
import css from './Hero.module.css';
import video from '../../video/IMG_0156.mp4';
import logo from '../../images/logo2.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
export const Hero = () => {
  const [logoUp, setLogoUp] = useState(false);
  const vidRef = useRef(null);

  const handlePlayVideo = () => {
    vidRef.current.play();
  };

  useEffect(() => {
    handlePlayVideo();
  }, []);

  const leftSideContent = [
    { id: 1, title: 'DETALING', text: 'asdasdas' },
    { id: 2, title: 'DETALING', text: 'asdasdas' },
    { id: 3, title: 'DETALING', text: 'asdasdas' },
    { id: 4, title: 'DETALING', text: 'asdasdas' },
  ];

  return (
    <div className={css.hero}>
      <video
        src={video}
        ref={vidRef}
        onClick={handlePlayVideo}
        type="video/mp4"
        className={css.video}
        autoPlay
        muted
        loop
      />
      <div className={css.heroWrap}>
        <img className={logoUp?css.logoUp:css.logo} src={logo} alt="logo" />
        
        <div className={css.leftSide}>
          <div className={css.leftSideContent}>
            <ul className={css.leftSideList}>
              {leftSideContent.map(({ id, title }) => {
                return (
                  <motion.li
                    onMouseEnter={() => {setLogoUp(true)}}
                    onMouseLeave={() => setLogoUp(false)}
                    className={css.leftSideItem}
                    key={id}
                  >
                    <h3 className={css.leftSideTitle}>{title}</h3>
                  </motion.li>
                );
              })}
            </ul>
             <div className={logoUp?css.leftSideHiddenContent_active: css.leftSideHiddenContent}>
              <p className={logoUp?css.hiddenContentText_active:css.hiddenContentText}>Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
