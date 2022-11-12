import { useEffect, useRef } from 'react';
import css from './Hero.module.css';
import video from '../../video/video_last.mp4';
import logo from '../../images/logo3.png';
import svg from '../../images/symbol-defs.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import bg from '../../images/bg9.JPG';
export const Hero = () => {
  const [logoUp, setLogoUp] = useState(false);
  const [activeText, setActiveText] = useState(0);
  const [isVideoPlay, setIsVideoPlay] = useState(true);

  const vidRef = useRef(null);
  const textArr = ['text1', 'text2', 'text3', 'text4'];

  useEffect(() => {
    if (isVideoPlay) {
      vidRef.current.play();
    }
  }, [isVideoPlay]);

  const leftSideContent = [
    { id: 1, title: 'Захист антигравійною плівкою', text: 'asdasdas' },
    { id: 2, title: 'Детейлінг очистка салону', text: 'asdasdas' },
    { id: 3, title: 'Полірування кузова', text: 'asdasdas' },
    { id: 4, title: 'Захист нанокерамікою', text: 'asdasdas' },
  ];

  return (
    <div className={css.hero}>
      {isVideoPlay ? (
        <video
          src={video}
          ref={vidRef}
          type="video/mp4"
          className={css.video}
          muted
          loop
        />
      ) : (
        <img src={bg} className={css.video} alt="car" />
      )}
      <div className={css.heroWrap}>
        <img className={logoUp ? css.logoUp : css.logo} src={logo} alt="logo" />

        <motion.div
          className={css.leftSide}
          initial={{ x: '-100%' }}
          animate={{ x: '0' }}
          transition={{ delay: 0.2, duration: 1 }}
          style={!logoUp && { borderRadius: ' 0 30px 30px 0' }}
        >
          <div className={css.leftSideContent}>
            <ul className={css.leftSideList}>
              {leftSideContent.map(({ id, title }) => {
                return (
                  <motion.li
                    onMouseEnter={() => {
                      setLogoUp(true);
                      setActiveText(id);
                    }}
                    onMouseLeave={() => {
                      setLogoUp(false);
                      setActiveText(0);
                    }}
                    className={css.leftSideItem}
                    key={id}
                  >
                    <svg
                      className={
                        activeText === id ? css.arrowIconActive : css.arrowIcon
                      }
                    >
                      <use href={`${svg}#icon-arrow`} />
                    </svg>
                    <h3 className={css.leftSideTitle}>{title}</h3>
                  </motion.li>
                );
              })}
            </ul>
            <div
              className={logoUp ? css.rightSide_active : css.rightSide}
              onMouseEnter={() => {
                setLogoUp(true);
                setActiveText(activeText);
              }}
              onMouseLeave={() => {
                setLogoUp(false);
                setActiveText(0);
              }}
            >
              <motion.p
                key={activeText}
                className={
                  activeText
                    ? css.hiddenContentText_active
                    : css.hiddenContentText
                }
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '0', opacity: activeText ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              >
                {activeText && textArr[activeText - 1]}
              </motion.p>
            </div>
          </div>
          <div className={css.contacts}>
            <a className={css.telLink} href="tel:+380937582512">
              <svg className={css.telIcon}>
                <use href={`${svg}#icon-tel`} />
              </svg>
              +38(093)758-25-12
            </a>
            <a
              className={css.location}
              target="_blank"
              href="https://g.page/esthetic-garage?share"
              rel="noreferrer"
            >
              <svg className={css.locIcon}>
                <use href={`${svg}#icon-location`} />
              </svg>
              м. Луцьк вул. Карпенка-Карого 3
            </a>
          </div>
          <div
            className={css.videoSwitcher}
            onClick={() => setIsVideoPlay(!isVideoPlay)}
          >
            <p className={css.videoText}>відео</p>
            <div className={css.videoBtn}>
              <div className={isVideoPlay?css.videoBtnPointRight: css.videoBtnPoint}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
