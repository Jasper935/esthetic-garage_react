import css from './Header.module.css';
import logo from '../../images/logo2.png';
import svg from '../../images/symbol-defs.svg';
import { Socials } from 'components/Socials/Socials';
export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.wrap}>
        <img className={css.logo} src={logo} alt="" />
        <Socials iconStyles={{ color: '#d6c0c0'}}/>
        <button className={css.burgerBtn}>
          <svg className={css.burger}>
            <use href={`${svg}#icon-menu`} />
          </svg>
        </button>
      </div>
    </header>
  );
};
