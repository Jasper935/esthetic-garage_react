import css from './Services.module.css';
import svg from '../../images/symbol-defs.svg';
import { useState } from 'react';
import { createId } from 'data/createId';
import { Header } from 'components/Header/Header';
import { motion } from 'framer-motion';
//--------------------------------------------------
export const Services = () => {
  const [activeElem, SetActiveElem] = useState(0);
  const inital = { opacity: 0 };
  const animate = { opacity: 1 };
  const transition = { duration: 1 };
  const ServicesList = [
    {
      id: 1,
      title: 'Очистка авто',
      text: 'Нанокерамічний захист лакофарбового покриття - найкращий спосіб підкреслити красивий дизайн автомобіля!',
    },
    { id: 2, title: 'Полірування' },
    { id: 3, title: 'Захист екстер‘єру' },
    { id: 4, title: 'Полірування фар' },
    { id: 5, title: 'Захист фар антигравійною плівкою' },
    { id: 6, title: 'Сушка салонів' },
    { id: 8, title: 'Антидощ на вікна' },
    { id: 9, title: 'Безпечна мийка двигуна' },
    { id: 7, title: 'Полірування глянцевих деталей салону' },
    { id: 7, title: 'Кондиціонування шкіри' },
    { id: 7, title: 'Озонування салону' },
    { id: 7, title: 'Захист шкіри нанокерамікою' },
    { id: 7, title: 'Захист дисків нанокерамікою' },
    { id: 7, title: 'Антихром' },
    { id: 7, title: 'Тонування оптики' },
    { id: 7, title: 'Озонування салону' },
    { id: 7, title: 'Реставрація сколів' },
    { id: 7, title: 'Захист моніторів антигравійною плівкою' },
    {
      id: 7,
      title: 'Захист глянцевих елемегтів інтер‘єру антигравійною плівкою',
    },
    { id: 7, title: 'Очистка кузова від бітуму' },
    { id: 7, title: 'Відновлення гарного вигляду зовнішнього пластику' },
  ];
  const finalServicesList = createId(ServicesList);
  const onClick = id => {
    id === activeElem ? SetActiveElem(0) : SetActiveElem(id);
  };

  return (
    <motion.section
      className={css.services}
      initial={inital}
      animate={animate}
      transition={transition}
    >
      <Header text="Роботи" location="/works" activeId={2} />
      <div className={css.titleWrap}>
        <h2 className={css.title}>Послуги</h2>
      </div>
      <ul className={css.servicesLsit}>
        {finalServicesList.map(({ title, id }) => {
          return (
            <motion.li
              key={id}
              className={css.servicesItem}
              onClick={() => {
                SetActiveElem(id);
                onClick(id);
              }}
              initial={{ opacity: 0, x: 50  }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay:  id * 0.2 }}
            >
              <div className={css.ItemVisible}>
                <h4 className={css.ItemVisibleTitle}>{title}</h4>
                <svg
                  className={
                    activeElem === id ? css.arrowIconOpen : css.arrowIcon
                  }
                >
                  <use href={`${svg}#icon-arrow`} />
                </svg>
              </div>
              <div
                className={
                  activeElem === id ? css.ItemHiddenOpen : css.ItemHidden
                }
              >
                <div className={css.hiddenLeft}>
                  <p className={css.leftText}>{finalServicesList[0].text}</p>
                </div>
                <div className={css.hiddenRight}>
                  <div className={css.details}>
                    <p className={css.detailsPrice}>
                      Ціна послуги залежить від моделі і стану автомобіля, для
                      консультації телефонуйте по номеру +38(095)014-78-88
                      <svg className={css.priceIcon}>
                        <use href={`${svg}#icon-price`} />
                      </svg>{' '}
                    </p>
                    <p className={css.detailsTime}>
                      1-2 дні, залежить від зайнятості майстрів.
                      <svg className={css.timeIcon}>
                        <use href={`${svg}#icon-time2`} />
                      </svg>{' '}
                    </p>
                  </div>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.section>
  );
};
