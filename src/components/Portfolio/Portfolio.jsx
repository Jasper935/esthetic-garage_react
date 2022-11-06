import css from './Portfolio.module.css';
import kapusta from '../../images/portfolio/kapusta.jpg';
import filmoteka from '../../images/portfolio/filmoteka.jpg';
import resume from '../../images/portfolio/resume.JPG';
import helleng from '../../images/portfolio/helleng.jpg';
import target from '../../images/portfolio/target.JPG';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(target);
  const [currentLink, setCurrentLink] = useState({
    visit: 'www.aleksandraskliarova.com.ua',
    code: 'https://github.com/Jasper935/presentation_for_target-sass',
  });
  const [currentSlideName, setCurrentSlideName] = useState(
    'Presentation for advertising'
  );
  const portfolioList = [
    { id: 1, name: 'aleksandraskliarova.com.ua', img: target },
    { id: 2, name: 'Filmoteka', img: filmoteka },
    { id: 3, name: 'Kapu$ta', img: kapusta },
    { id: 4, name: 'HellEnglish', img: helleng },
    { id: 5, name: 'My resume', img: resume },
  ];
  const links = [
    {
      visit: 'https://www.aleksandraskliarova.com.ua',
      code: 'https://github.com/Jasper935/presentation_for_target-sass',
    },
    {
      visit: 'http://jasper935.github.io/filmoteka-project/',
      code: 'https://github.com/Jasper935/filmoteka-project.git',
    },
    {
      visit: 'https://kapusta-project-app.netlify.app/',
      code: 'https://github.com/Jasper935/kapusta-project',
    },
    {
      visit: 'https://redokleeroy.github.io/placeholders_project/',
      code: 'https://github.com/Jasper935/hellenglish_project',
    },
    {
      visit: 'https://jasper935.github.io/my-resume/',
      code: 'https://github.com/Jasper935/my-resume',
    },
  ];
  return (
    <div className={css.portfolio} id="portfolio">
      <h3 className={css.title}>Мои работы</h3>

      <motion.div className={css.headImgWrap}>
        <motion.h4
          className={css.currentTitle}
          key={currentSlideName}
          transition={{ duration: 1 }}
          initial={{ y: -200, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
        >
          {currentSlideName}
        </motion.h4>
        <AnimatePresence>
          <motion.img
            transition={{ duration: 0.6 }}
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={currentSlideName}
            className={css.headImg}
            src={currentImage}
            alt="site"
          />
          <motion.div
            className={css.linkWrap}
            key={currentImage}
            transition={{ duration: 1 }}
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <a
              className={css.link}
              href={currentLink.visit}
              target="_blank"
              rel="noreferrer"
            >
              Посетить
            </a>
            <a
              className={css.link}
              href={currentLink.code}
              target="_blank"
              rel="noreferrer"
            >
              Смотреть код
            </a>
          </motion.div>
          <motion.div className={css.info}>
            <h4 className={css.infoTitle}>Сделан с помощью</h4>
            <p>asdasdasdasd</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <ul className={css.list}>
        {portfolioList.map(({ id, name, img }) => {
          return (
            <li
              onClick={() => {
                setCurrentImage(img);
                setCurrentSlideName(name);
                setCurrentLink(links[id - 1]);
              }}
              className={currentImage === img ? css.itemActive : css.item}
            >
              <h4 className={css.bottomTitle}>{name}</h4>
              <img className={css.img} src={img} alt="expample" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
