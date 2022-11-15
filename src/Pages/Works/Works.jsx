import css from './Works.module.css';
import { Swiper } from 'swiper/react';
// import { worksPhotos } from '../../data/worksList';
import svg from '../../images/symbol-defs.svg';
import 'swiper/css';
import { Header } from 'components/Header/Header';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Autoplay, Pagination } from 'swiper';
import { useRef } from 'react';
// import { useState } from 'react';
export const Works = () => {
  const swiperRef = useRef();
  const inital ={opacity:0}
  const animate ={opacity:1}
  const transition ={duration:1}
  return (
    <><Header text='Про нас' activeId={3} location='/about'/>
    <motion.section className={css.works} initial={inital} animate={animate} transition={transition}>
      
      <h2 className={css.worksTitle}>Наші роботи</h2>
      <div className={css.swiperWrap}>
        <button
          className={css.swiperBtnPrev}
          onClick={() => swiperRef.current.slidePrev()}
        >
          <svg className={css.swiperBtnPrevIcon}>
            <use href={`${svg}#icon-arrow`} />
          </svg>
        </button>
        <button
          className={css.swiperBtnNext}
          onClick={() => swiperRef.current.slideNext()}
        >
          <svg className={css.swiperBtnNextIcon}>
            <use href={`${svg}#icon-arrow`} />
          </svg>
        </button>
        <Swiper
          className={css.swiper}
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          style={{
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={100}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          loop
        >
          {/* {worksPhotos.map((el, i) => {
            return (
              <SwiperSlide className={css.swiperSlide} key={i}>
                <img src={el} alt={'work' + i} />
              </SwiperSlide>
            );
          })} */}
        </Swiper>
      </div>
    </motion.section>
    </>
  );
};
