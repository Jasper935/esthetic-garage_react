import css from './Header.module.css';
import logo from '../../images/logo2.png';
import svg from '../../images/symbol-defs.svg';
import { Socials } from 'components/Socials/Socials';
// import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { createId } from 'data/createId';
import { useLocation, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const setIsOpenModal = isOpen => {
  //   setIsOpen(isOpen);
  // };
  const navigate = useNavigate();
  const locat = useLocation()
  console.log(locat);
  const content = [
    { title: 'Домашня', link: '/esthetic-garage_react' },
    { title: 'Роботи', link: '/works' },
    { title: 'Послуги', link: '/services' },
    { title: 'Про нас', link: '0' },
    { title: 'Домашня', link: '0' },
  ];
  const contentWitchId = createId(content);
  return (
    <>
    <header id="header" className={css.header}>
      <div className={css.wrap}>
        <img className={css.logo} src={logo} alt="logo" />
        <Socials iconStyles={{ color: '#d6c0c0' }} />
        <button className={css.burgerBtn} onClick={() => setIsOpen(true)}>
          <svg className={css.burger}>
            <use href={`${svg}#icon-menu`} />
          </svg>
        </button>
        {isOpen && (
          <ul className={css.navList}>
            {contentWitchId.map(({ id, title, link }) => {
              return (
                <li
                  className={css.navItem}
                  key={id}
                  onClick={() => {
                    setIsOpen(false);
                    navigate(link, { replace: true });
                    
                  }}
                >
                  
                  
                  <h4 className={css.navLink} >
                    {title}
                  </h4>
                  
                 </li>
              );
            })}
          </ul>
        )}
      </div>
    </header>
    </>
  );
};
