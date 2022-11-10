import css from './Works.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { worksPhotos } from 'worksList';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';
// import { useState } from 'react';
export const Works = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState({})

  return (
    <section className={css.works}>
      <h2 className={css.worksTitle}>Наші роботи</h2>
      <div className={css.swiperWrap}>
      <Swiper
        className={css.swiper}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          "--swiper-button-next-color":'#fff',
          
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
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
