import css from './Modal.module.css';
import logo from '../../images/logo1.png'
export const Modal = ({ isOpen, children }) => {
  return (
    <div className={css.modal}>
        <img className={css.modalLogo} src={logo} alt="logo" />
      <div className={css.modalContent}>
        <div className={css.window}></div>
      </div>
    </div>
  );
};
