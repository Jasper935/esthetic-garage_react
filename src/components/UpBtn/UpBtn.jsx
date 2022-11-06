import svg from '../../images/symbol-defs.svg';
import css from './UpBtn.module.css';

export const UpBtn = ({ yOffset }) => {
  return (
    <>
      {yOffset > 1000 && (
        
        <svg
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
          className={css.icon}
        >
          <use href={`${svg}#icon-up`} />
        </svg>
        
      )}
    </>
  );
};
