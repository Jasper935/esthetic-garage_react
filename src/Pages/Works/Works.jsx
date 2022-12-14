import css from './Works.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { worksPhotos } from '../../data/worksList';
import svg from '../../images/symbol-defs.svg';
import 'swiper/css';
import { Header } from 'components/Header/Header';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Autoplay, Pagination } from 'swiper';
import { useRef } from 'react';
import { Socials } from 'components/Socials/Socials';
import logo from '../../images/logo2.png'
// import { useState } from 'react';
export const Works = () => {
  const swiperRef = useRef();
  const inital = { opacity: 0 };
  const animate = { opacity: 1 };
  const transition = { duration: 2 };

  const tablet =window.screen.width<1199&&window.screen.width>767
  return (
    <>
      <Header text="Про нас" activeId={3} location="/about" />
      <motion.section
        className={css.works}
        initial={inital}
        animate={animate}
        transition={transition}
      >
        <h2 className={css.worksTitle}>Виконані роботи</h2>
        <div className={css.swiperWrap}>
          {window.screen.width<1199&&<img className={css.logo} src={logo} alt="logo" />}
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
          <div className={css.worksSocials}>
            <p className={css.worksSocialsTitle}>
              Ще більше фото та відео контенту в наших соціальних мережах:
            </p>
            <Socials iconStyles={tablet&&{width:'30px'}} />
            
          </div>
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
            // pagination={}
            navigation={true}
            modules={[Autoplay, Pagination]}
            loop
          >
            {worksPhotos.map((el, i) => {
              return (
                <SwiperSlide className={css.swiperSlide} key={i}>
                  <img  src={el} alt={'work' + i} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </motion.section>
    </>
  );
};
