import { useEffect, useState } from 'react';
import css from './About.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import svg from '../../images/symbol-defs.svg';
import { motion, AnimatePresence, useScroll,  useVelocity } from 'framer-motion';
import slideOne from '../../images/night.JPG';
import slideTwo from '../../images/guitar.JPG';
import slideThree from '../../images/bas2.JPG';
import slideFour from '../../images/bauty.JPG';
// import { Parallax } from 'react-scroll-parallax';

export const About = ({ yOffset }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const [cursorVisible, setCursorVisible] = useState(true);
  const [imgToView, setImgToView] = useState(null);
  const { scrollY } = useScroll()
  // const scaleX = useSpring(scrollYProgress)
  const scrollVelocity = useVelocity(scrollY);
  useEffect(() => {
    console.log(scrollVelocity);
    switchClassName();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, yOffset]);


  
  const switchClassName = () => {
    let resultClass;
    switch (currentIndex) {
      case 0:
        resultClass = css.container;
        break;
      case 1:
        resultClass = css.containerFirst;
        break;
      case 2:
        resultClass = css.containerTwo;
        break;
      case 3:
        resultClass = css.containerThree;
        break;
      case 4:
        resultClass = css.containerFour;
        break;
      default:
        break;
    }
    return resultClass;
  };
  
  const textArr = [
    'Быстро реализую вашу задумку, в отличии от крупных компаний, в моей работе отсутствуюет бюрократия, решение не проходит несколько этапов, чтобы попасть в точку назначения и быть реализованым. Нужно что-то поменять? Просто напишите мне и в скором времени будет готово.',
    'Все основные задачи, и так же мелочи будут реализованы в точном соответствии с вашим запросом. Опыт решения разнообразных задач  позволит мне решать ваши поставленные цели, в соответствии с актуальными трендами разработки. Проект пишется структурированно и семантично, это позволит в случае необходимости расширить функционал, ведь структура и код максимально понятны.',
    'Мне не приходится платить большому количеству разработчиков и другого персонала при разработке вашего продукта. Поэтому цена в несколько раз ниже рыночной. Напрмер, одностраничный сайт в любой веб студии будет стоить, самый минимум, от 300 usd, в моем случае это обойдется 100-150 usd, я уже не говорю про экономию на более крупных проектах.  ',
    'Сделаю "Вау" еффект, взаимодействие с сайтом, плавные переходы, анимации и оформление заставят вашего клиента остаться подольше и оставить заявку. Подберу картинки и декоративные элементы оформления под тематику вашего продукта. В конечном итоге ваш сайт будет выглядеть красиво и гармонично. ',
  ];
  const content = [
    { title: 'Быстро', id: 1, img: slideOne },
    { title: 'Качественно', id: 2, img: slideTwo },
    { title: 'Дешево', id: 3, img: slideThree },
    { title: 'Привлекательно', id: 4, img: slideFour },
  ];
  AOS.init();

  return (
    
    // <Parallax  strength={300} opacity={[0.3,2]}>
    <div className={switchClassName()}>
      
      <motion.div
        className={css.leftSide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AnimatePresence>
        <motion.img
          className={css.image}
          src={imgToView}
          initial={{ opacity:  0, y:-500 }}
          animate={{ opacity: 0.3 , y:0}}
          exit={{ opacity: 0 , y:500 }}
          transition={{ duration: '0.5' }}
          key={imgToView}
          
        />
        </AnimatePresence>
        {content.map(({ title, id, img }) => {
          return (
            <h2
              className={css.title}
              data-aos="fade"
              
              data-aos-delay={id * 100}
              data-aos-duration="700"
              style={{
                transform:
                  yOffset > 600 ? `translateX(0)` : `translateX(-1000px)`,
              }}
              // onMouseLeave={() => {
              //   setCurrentIndex(0);
              //   setCurrentText('');
              //   setImgToView(null);
              // }}
              key={id}
              onMouseMove={() => {
                setImgToView(img);
                setCurrentIndex(id);
                setCurrentText(textArr[id - 1]);
                setCursorVisible(false);
              }}
            >
              {id === 1 && (
                <svg
                  className={
                    cursorVisible ? css.cursorIcon : css.cursorIconHidden
                  }
                  data-aos="fade-right"
                  data-aos-delay={3000}
                >
                  <use href={`${svg}#icon-cursor`} />
                </svg>
              )}

              {/* <div className={css.timeline}></div> */}
              {title}
            </h2>
          );
        })}
      </motion.div>
      <div className={css.rightSide}>
        {/* <AnimatePresence> */}
        <motion.p
          className={css.rightSideText}
          initial={{  opacity: 0 }}
          transition={{ duration: '0.4' }}
          key={currentText}
          animate={{  opacity: 1 }}
          
        >
          {currentText}
        </motion.p>
        {/* </AnimatePresence> */}
      </div>
    </div>
    // </Parallax>
  );
};
