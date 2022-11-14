import css from './Header.module.css';
import logo from '../../images/logo2.png';
import svg from '../../images/symbol-defs.svg';
import { Socials } from 'components/Socials/Socials';
import { motion } from 'framer-motion';
// import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { createId } from 'data/createId';
import { useLocation, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
//----------------------------------------------------------
export const Header = ({ text = 'Next', location, activeId=1 }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const setIsOpenModal = isOpen => {
  //   setIsOpen(isOpen);
  // };
  const navigate = useNavigate();
  const locat = useLocation();
  console.log(locat);
  const content = [
    { title: 'Домашня', link: '/esthetic-garage_react' },
    { title: 'Послуги', link: '/services' },
    { title: 'Роботи', link: '/works' },
    
    { title: 'Про нас', link: '0' },
  ];
  const contentWitchId = createId(content);
  return (
    <>
      <motion.header
        id="header"
        className={css.header}
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className={css.wrap}>
          <img className={css.logo} src={logo} alt="logo" />
          <Socials iconStyles={{ color: '#d6c0c0' }} />
          <button className={css.burgerBtn} onClick={() => setIsOpen(!isOpen)}>
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
                      navigate(link, { replace: false });
                    }}
                  >
                    <h4 className={activeId===id?css.navLinkActive:css.navLink}>{title}</h4>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <button className={css.nextBtn} onClick={()=>navigate(location, { replace: false })}>
          {text}{' '}
          <svg className={css.nextIcon}>
            <use href={`${svg}#icon-arrow`} />
          </svg>
        </button>
      </motion.header>
    </>
  );
};
