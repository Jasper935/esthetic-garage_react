import css from './Сapabilities.module.css';
import svg from '../../images/symbol-defs.svg';
import { useState } from 'react';
import { motion } from 'framer-motion';
// import { Parallax } from 'react-scroll-parallax';

export const Сapabilities = () => {
//   const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  return (
    // <Parallax  opacity={[0.3,2]}>
    <div className={css.capabilities}>
      <div className={css.leftSide}>
        {/* <img src={th} alt="" /> */}
        <h3 onMouseEnter={()=>setRightActive(true)} onMouseLeave={()=>setRightActive(false)} className={css.title}>
          <svg className={css.icon}>
            <use href={`${svg}#icon-check`} />
          </svg>
          Что я могу
        </h3>
      </div>
      <div className={css.rightSide}>
        {rightActive ? (
          <motion.p className={css.rightSideText}
          initial={{ opacity: 0,scale:0,originZ: 0.5 }}
        animate={{ opacity: 1 ,scale:1, originZ: 1 }}>wdqSDSdsfsdfszdfs sSSWFVD dfdddd </motion.p>
        ) : (
          <h3 className={css.titleSecond} initial={{ opacity: 0,scale:0,originZ: 0.5 }}
          animate={{ opacity: 1 ,scale:1, originZ: 1 }}
          key={rightActive}>
            <svg className={css.iconSecond}>
              <use href={`${svg}#icon-cross`}/>
            </svg>
            Чего я не могу
          </h3>
        )}
      </div>
    </div>
    // </Parallax>
  );
};
