import css from './Header.module.css';
// import svg from '../../images/symbol-defs.svg';



export const Header = ({yOffset}) => {
  return (
    <div style={ yOffset>800?{ backdropFilter: "blur(5px)",  }:{backdropFilter: "blur(5px)", } } className={css.header} id="header">
      <a href="./" className={css.logo}>
      {/* <svg  className={css.icon}>
              <use href={`${svg}#icon-head`} />
            </svg> */}
        Ivan Pikun
      </a>
      <ul style={{ color:yOffset<800? '#e3d324':'white' }} className={css.list}>
        <li className={css.item}>
          {' '}
          
          <a className={css.link} href="./">
            Главная
          </a>
          
        </li>
        <li className={css.item}>
          <a className={css.link} href="#portfolio">
            Портфолио
          </a>
        </li>
        <li className={css.item}>
          <a className={css.link} href="https://www.instagram.com/whataivan/">
          Контакты
          </a>
        </li>
      </ul>
    </div>
  );
};
