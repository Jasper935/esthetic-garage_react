import css from './Works.module.css';
import {useSwiper, Swiper, SwiperSlide  } from 'swiper/react';
import { worksPhotos } from 'worksList';
import svg from '../../images/symbol-defs.svg';
import 'swiper/css';

import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper';
import { useRef } from 'react';
// import { useState } from 'react';
export const Works = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState({})
  const swiperRef = useRef();
  
  console.log(useSwiper());
  return (
    <section className={css.works}>
      <h2 className={css.worksTitle}>Наші роботи</h2>
      <div className={css.swiperWrap}>
      <button className={css.swiperBtnPrev} onClick={() => swiperRef.current.slidePrev()}>
      <svg className={css.swiperBtnPrevIcon}>
                      <use href={`${svg}#icon-arrow`} />
                    </svg>
      </button>
      <button className={css.swiperBtnNext} onClick={() => swiperRef.current.slideNext()}>
      <svg className={css.swiperBtnNextIcon}>
                      <use href={`${svg}#icon-arrow`} />
                    </svg>
      </button>
        <Swiper
          className={css.swiper}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          style={{
            '--swiper-navigation-color': '#fff',
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
        >
         
          {worksPhotos.map((el, i) => {
            return (
              <SwiperSlide className={css.swiperSlide} key={i}>
                <img src={el} alt={'work' + i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
