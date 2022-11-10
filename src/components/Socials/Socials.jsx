import css from './Socials.module.css';
import svg from '../../images/symbol-defs.svg';
export const Socials = ({ iconStyles}) => {
    console.log(iconStyles);
  const socials = [
    {
      id: 1,
      icon: `${svg}#icon-facebook`,
      link: 'https://www.facebook.com/esthetic.detaling',
    },
    {
      id: 2,
      icon: `${svg}#icon-instagram`,
      link: 'https://instagram.com/esthetic.garage',
    },
    {
      id: 3,
      icon: `${svg}#icon-tiktok`,
      link: 'https://www.tiktok.com/@esthetic_garage',
    },
    { id: 4, icon: `${svg}#icon-telegram`, link: 'instagram.com' },
  ];
  return (
    <ul className={css.socialsList}>
      
      {socials.map(({ id, icon, link }) => {
        return (
          <li className={css.socialsItem} key={id}>
            <a
              className={css.socialsLink}
              href={link}
              target={'_blank'}
              rel="noreferrer"
            >
              <svg className={css.socialsIcon} style={iconStyles?{width: iconStyles.width, height: iconStyles.width, fill: iconStyles.color}:{}}>
                <use href={icon} />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
