import css from './Header.module.css';
import logo from '../../images/logo2.png';
import svg from '../../images/symbol-defs.svg';
import { Socials } from 'components/Socials/Socials';
import { motion } from 'framer-motion';

import { useState } from 'react';
import { createId } from 'data/createId';
import { useNavigate } from 'react-router-dom';


//----------------------------------------------------------
export const Header = ({ text = 'Next', location, activeId }) => {
  const [isOpen, setIsOpen] = useState(window.screen.width>=1200?true:false);

  const navigate = useNavigate();
 const screenWidth =window.screen.width
  const content = [
    { title: 'Домашня', link: '/esthetic-garage_react' },
    { title: 'Послуги', link: '/services' },
    { title: 'Роботи', link: '/works' },
    { title: 'Про нас', link: '/about' },
    { title: 'Відгуки', link: '/reviews' }, 
  ];
  const contentWitchId = createId(content);
  return (
    <>
      <motion.header
        className={css.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, delay: 0 }}
      >
        <div className={css.wrap}>
          <img
            className={css.logo}
            onClick={() =>
              navigate('/esthetic-garage_react', { replace: false })
            }
            src={logo}
            alt="logo"
          />
          
            {isOpen ? (
              <motion.ul className={css.navList} initial={{opacity:0, x: '100%'}} animate={{opacity:1, x:0}} transition={{duration:0.5}}>
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
                      <h4
                        className={
                          activeId === id ? css.navLinkActive : css.navLink
                        }
                      >
                        {title}
                      </h4>
                    </li>
                  );
                })}
              {screenWidth<1200&&<div className={css.socailsWrap}><Socials iconStyles={{width:'35px', color: 'white' }} /></div> } 
              </motion.ul>
            ) : (
              screenWidth>1199&& <Socials iconStyles={{ color: '#d6c0c0' }} />
            )}
          
          
          <button className={css.burgerBtn} onClick={() => setIsOpen(!isOpen)}>
            <svg className={css.burger} style={{fill:isOpen?'#f5c946':"white"}}>
              <use href={`${svg}#icon-menu`} />
            </svg>
          </button>
          
        </div>
        <button
          className={css.nextBtn}
          onClick={() => navigate(location, { replace: false })}
        >
          {text}{' '}
          <svg className={css.nextIcon}>
            <use href={`${svg}#icon-arrow`} />
          </svg>
        </button>
      </motion.header>
    </>
  );
};
