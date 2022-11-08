import css from './Header.module.css';
import logo from '../../images/logo2.png';
import svg from '../../images/symbol-defs.svg';
export const Header = () => {
  const socials = [
    { id: 1, icon: `${svg}#icon-facebook`, link: 'https://www.facebook.com/esthetic.detaling' },
    { id: 2, icon: `${svg}#icon-instagram`, link: 'https://instagram.com/esthetic.garage' },
    { id: 3, icon: `${svg}#icon-tiktok`, link: 'https://www.tiktok.com/@esthetic_garage' },
    { id: 4, icon: `${svg}#icon-telegram`, link: 'instagram.com' },
  ];
  return (
    <header className={css.header}>
      
      <div className={css.wrap}>
        
        <img className={css.logo} src={logo} alt="" />
        <ul className={css.socialsList}>
            {/* <div className={css.sociaBackground}></div> */}
          {socials.map(({ id, icon, link }) => {
            return (
              <li className={css.socialsItem} key={id}>
                <a className={css.socialsLink} href={link} target={'_blank'} rel="noreferrer">
                  <svg className={css.socialsIcon} >
                    <use href={icon} />
                  </svg>
                </a>
              </li>
            );
          })}
        </ul>
        <button class={css.burgerBtn}>
          <svg className={css.burger}>
            <use href={`${svg}#icon-menu`} />
          </svg>
        </button>
      </div>
    </header>
  );
};
