import { useEffect, useRef } from 'react';
import css from './Hero.module.css';
import video from '../../video/video_last.mp4';
import logo from '../../images/logo3.png';
import svg from '../../images/symbol-defs.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Header } from 'components/Header/Header';
import bg from '../../images/bg9.JPG';
export const Hero = () => {
  const [logoUp, setLogoUp] = useState(false);
  const [activeText, setActiveText] = useState(0);
  const [isVideoPlay, setIsVideoPlay] = useState(true);
  // const [messageActive, setMessageActive] = useState(false);
  const vidRef = useRef(null);
  // const openRef= useRef(false)
  
  async function play(){
    if (isVideoPlay) {
      await vidRef.current.play();
      
    }
    
   }
   const inital ={opacity:0}
   const animate ={opacity:1}
   const transition ={duration:0.5}
  useEffect(() => {
    
      // setIsVideoPlay()
      // openRef.current= isVideoPlay
      localStorage.getItem('messageActive')
    play()
    return()=>{
      localStorage.setItem('video', isVideoPlay)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVideoPlay]);

  const content = [
    {
      id: 1,
      title: 'Захист антигравійною плівкою',
      text: `Антигравійна плівка - сучасний, найбільш надійний захист лакофарбового (ЛФП) покриття автомобіля. Даний захист все більше користується попитом серед любителів авто. Це не дивно, адже антигравійна плівка зберігає ідеальний стан лаку на десятки років. Антигравійна плівка захистить ЛФП від: 
    Появи сколів,
    впливу хімічних реагентів,
    появи подряпин,
    вигорання лаку від ультрафіолету,
    матування від неправильної мийки, 
    пошкоджень при дрібних ДТП,
    появи корозії,
    пошкодження бітумом, пташиним послідом, металічними вкрапленнями. 
    Виконуємо захист преміальною поліуретановою плівкою американського бренду LEGEND. Яка має низку корисних властивостей:
    стійкість до пробивання, самозаживлення подряпин при нагріванні,
    гідрофобний ефект,
    придає блиск та глибину кольору,
    повторює шагрень лакофарбового покриття,
    стійка до пожовтіння. Гарантія на плівку від виробника 12 років!`,
    },
    {
      id: 2,
      title: 'Детейлінг очистка салону',
      text: `Нанокерамічний захист лакофарбового покриття - найкращий спосіб підкреслити красивий дизайн автомобіля! Це про естетику геометричних форм кузова. Оброблений автомобіль комфортний в догляді, адже завдяки властивостям покриття чистота кузова зберігається в рази довше. Захищений автомобіль - це:
    неймовірний блиск,
    крутий перелив на світлі, дзеркальна та ідеально гладка поверхня ЛФП,
    сильний гідрофобний та антистатичний ефекти,
    якісний захист від хімічних реагентів,
    захист від ушкодження бітумом,
    насичений колір, 
    захист від вигорання на сонці.
    Виконуємо захист нанокерамікою від італійського бренду Labocosmetica. Ефекти зберігається до 2 років і довше.`,
    },
    {
      id: 3,
      title: 'Полірування кузова',
      text: `В чистому салоні поїздки значно приємніші! А в нашої команди є свої стандарти щодо чистоти салону. Послуга детейлінг очистка салону включає мийку авто ззовні, ретельну чистку дисків, дверних завіс,
      проємів та ущільнювачів. Салон майстри очистять з увагою до кожного забруднення, гіпоалергенною хімією від бренду KochChemie.
       Віддамо сухий автомобіль за будь-якої погоди, адже маємо спеціалізоване обладнання для осушування текстилю. Після очистки виконаємо озонування
        (антибактеріальна обробка) за бажання клієна в подарунок.`}, 
    {
      id: 4,
      title: 'Захист нанокерамікою',
      text: `З часом лакофарбове покриття автомобіля втрачає привабливий вигляд. На лаку з'являються глибокі подряпини, голограма від мийки,
      металічні вкраплення та бітум, залишки комах та інші точкові забруднення. Лак втрачає колір від впливу ультрафіолетового випромінення.
       Вирішення є - полірування кузова. Перед поліруванням авто обов'язково готується на мийці (видаляємо металічні вкраплення та бітум,
          ретельно очищуємо всі зазори від нальоту та бруду). Майстри студії безпечно полірують, контролюючи товщину лаку, та з увагою до кожного глянцевого елементу.
           Використання ексцентрикових полірувальних машин, паст та падів різної абразивності дозволяє отримати максимальний блиск без голограм.
            Після полірування уважно очищуємо кузов від залишків паст. З радістю проконсультуємо кожного клієнта щодо  правильної мийки авто, аби зберегти результат виконаних робіт надовго.`,
   },
    
  ];

  return (
    <>
    <Header text='Послуги' location={'/services'} activeId={1}/>
    <motion.section className={css.hero} initial={inital} animate={animate} transition={transition}>
      {isVideoPlay ? (
        <video
          src={video}
          ref={vidRef}
          type="video/mp4"
          className={css.video}
          muted
          loop
          onLoad={()=>play()}
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
              {content.map(({ id, title }) => {
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
                initial={{ opacity: 0 }}
                animate={{ opacity: activeText ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {activeText && content[activeText - 1].text}
              </motion.p>
            </div>
          </div>
          <div className={css.contacts}>
            <a className={css.telLink} href="tel:+380950147888">
              <svg className={css.telIcon}>
                <use href={`${svg}#icon-tel`} />
              </svg>
              +38(095)014-78-88
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
            onClick={() =>{ 
               setIsVideoPlay(!isVideoPlay)}}
          >
            <p  className={css.videoText} >відео</p>
            <div className={css.videoBtn}>
              <div
                className={
                  isVideoPlay ? css.videoBtnPointRight : css.videoBtnPoint
                }
              ></div>
            </div>
            {/* <p style={{opacity:messageActive&&isVideoPlay? 1: 0}} className={css.message}>Якщо у вас повільний інтернет, ви можете скоритстатися версією сторінки без відео.</p> */}
          </div>
        </motion.div>
      </div>
    </motion.section>
    </>
  );
};
