import css from './Services.module.css';

export const Services = () => {
  return (
    <section className={css.services}>
      <div className={css.titleWrap}>
        <h2 className={css.title}>Послуги</h2>
      </div>
      <ul className={css.servicesLsit}>
        <li className={css.servicesItem}></li>
        <li className={css.servicesItem}></li>
        <li className={css.servicesItem}></li>
        <li className={css.servicesItem}></li>
      </ul>
    </section>
  );
};
