import css from './Services.module.css';

export const Services = () => {
  const ServicesList = [
    { id: 1, title: 'Detaling' },
    { id: 1, title: 'Detaling' },
    { id: 1, title: 'Detaling' },
    { id: 1, title: 'Detaling' },
  ];
  return (
    <section className={css.services}>
      <div className={css.titleWrap}>
        <h2 className={css.title}>Послуги</h2>
      </div>
      <ul className={css.servicesLsit}>
        {ServicesList.map(({ title, id }) => {
          return (
            <li className={css.servicesItem}>
              <div className={css.ItemVisible}>
            <h4 className={css.ItemVisibleTitle}>{title}</h4>

              </div>

            </li>
          );
        })}

        <li className={css.servicesItem}></li>
        <li className={css.servicesItem}></li>
        <li className={css.servicesItem}></li>
      </ul>
    </section>
  );
};
