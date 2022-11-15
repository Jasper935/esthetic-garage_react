import css from './About.module.css';
import { Header } from 'components/Header/Header';
import { Socials } from 'components/Socials/Socials';
import svg from '../../images/symbol-defs.svg';
//---------------------------------------------------
export const About = () => {
  return (
    <section className={css.about}>
      <Header text="Домашня" location={'/esthetic-garage_react'} activeId={4} />
      <h2 className={css.aboutTitle}>Про нас</h2>
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
  );
};
