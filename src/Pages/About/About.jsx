import css from './About.module.css';
import { Header } from 'components/Header/Header';
import { Socials } from 'components/Socials/Socials';
import svg from '../../images/symbol-defs.svg';
//---------------------------------------------------
export const About = () => {
  return (
    <><Header text="Домашня" location={'/esthetic-garage_react'} activeId={4} />
    <section className={css.about}>
      
      <h2 className={css.aboutTitle}>Про нас</h2>
      <ul className={css.aboutList}>
        <li className={css.aboutItem}>
          <svg className={css.aboutIcon}>
            <use href={`${svg}#icon-calendar`} />
          </svg>
          <h4 className={css.aboutItemTitle}>Графік</h4>
          <p className={css.aboutText}> Пн-Пт 9:00 - 18:00 Сб 9:00 - 13:00.</p>
        </li>
        <li className={css.aboutItem}>
          <svg className={css.aboutIcon}>
            <use href={`${svg}#icon-guarantee`} />
          </svg>
          <h4 className={css.aboutItemTitle}>Якість</h4>
          <p className={css.aboutText}>Використовуються матеріали лише перевірених виробників. На більшіть послуг дається гарантія.</p>
        </li>
        <li className={css.aboutItem}>
          <svg className={css.aboutIcon}>
            <use href={`${svg}#icon-time`} />
          </svg>
          <h4 className={css.aboutItemTitle}>Досвід</h4>
          <p className={css.aboutText}> Працюємо з 2019 року.</p>
        </li>
        
      </ul>
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
      <Socials iconStyles={{ color: 'white', width: '50px' }} />
    </section>
    </>
  );
};
