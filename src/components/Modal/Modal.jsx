import css from './Modal.module.css';
import logo from '../../images/logo1.png';
import svg from '../../images/symbol-defs.svg';

export const Modal = ({ setIsOpen, children }) => {
 
  return (
    <div className={css.modal}>
      <img className={css.modalLogo} src={logo} alt="logo" />
      <div className={css.modalContent}>
        <div className={css.window}>
          {children}
        </div>
      </div>
      <button className={css.closeBtn} onClick={()=>setIsOpen(false)}>
        <svg className={css.closeIcon}>
          <use href={`${svg}#icon-cross`} />
        </svg>
      </button>
    </div>
  );
};
