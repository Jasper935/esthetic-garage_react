import css from './Services.module.css';
import svg from '../../images/symbol-defs.svg';
import { useState } from 'react';
export const Services = () => {
  const [activeElem, SetActiveElem] = useState(0);

  const ServicesList = [
    { id: 1, title: 'Полірування' },
    { id: 2, title: 'Detaling' },
    { id: 3, title: 'Захисна плівка' },
    { id: 4, title: 'Detaling' },
  ];

  const onClick = id => {
    id === activeElem ? SetActiveElem(0) : SetActiveElem(id);
  };

  return (
    <section className={css.services}>
      <div className={css.titleWrap}>
        <h2 className={css.title}>Послуги</h2>
      </div>
      <ul className={css.servicesLsit}>
        {ServicesList.map(({ title, id }) => {
          return (
            <li
              className={css.servicesItem}
              onClick={() => {
                SetActiveElem(id);
                onClick(id);
              }}
            >
              <div className={css.ItemVisible}>
                <h4 className={css.ItemVisibleTitle}>{title}</h4>
                <svg
                  className={activeElem === id ? css.arrowIconOpen : css.arrowIcon}
                >
                  <use href={`${svg}#icon-arrow`} />
                </svg>
              </div>
              <div
                className={
                  activeElem === id ? css.ItemHiddenOpen : css.ItemHidden
                }
              >
                <div className={css.cardLeftSide}>dgxhdasfhdfhdfhd</div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
