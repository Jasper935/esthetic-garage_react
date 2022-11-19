import css from './Services.module.css';
import svg from '../../images/symbol-defs.svg';
import { useState } from 'react';
import { createId } from 'data/createId';
import { Header } from 'components/Header/Header';
import { motion } from 'framer-motion';
//--------------------------------------------------
export const Services = () => {
  const [activeElem, SetActiveElem] = useState(0);
  const inital = { opacity: 0 };
  const animate = { opacity: 1 };
  const transition = { duration: 1 };

  const ServicesList = [
    {
      id: 1,
      title: 'Очистка авто',
      text: 'Бережно та детально очистимо салон автомобіля. Використовуємо  якісну хімію від німецького виробника KochChemie.',
      price: 'Від 2 700 грн',
      time: 'Час виконання 1-2 доби ',
    },
    {
      id: 2,
      title: 'Полірування',
      text: 'Повернемо блиск та насиченість кольору. Очистимо кузов від металічних вкраплень та бітуму.',
      price: 'Від 130$',
      time: ' Час виконання 1-2 доби ',
    },
    {
      id: 3,
      title: 'Нанокераміка',
      text: 'Неймовірний ефект мокрого блиску, насичений колір та перелив на світлі. Сильний гідрофобний ефект. Захист діє до 2 років і довше.',
      price: 'Від 250$',
      time: 'Час виконання 2-3 доби ',
      // type:'Захист екстер‘єру:',
    },
    {
      id: 4,
      title: 'Антигравійна плівка',
      text: 'Найефективніший захист лакофарбового покриття. Надійно від сколів та подряпин. Збереже стан нового автомобіля на десятки років. Захищаємо як окремі деталі, так і весь автомобіль.',
      price: '',
      time: 'Час виконання залежить від об‘єму робіт',
      descrPrice: 'Залежить від розмірів та геометрії кузова',
    },
    {
      id: 5,
      title: 'Твердий віск',
      text: 'Захист кузова від хімічних реагентів. Даний захист придає гарного блиску. Має гідрофобний ефект. Захист працює до 3 місяців.',
      price: 'Від 800 грн',
      time: 'Час виконання 1-3 години ',
    },
    {
      id: 6,
      title: 'Керамічний віск',
      text: 'Придасть автомобілю дзеркального блиску. Має сильний гідрофобний ефект. Захист працює до 6 місяців.',
      price: 'Від 1 500 грн',
      time: 'Час виконання 1-3 години ',
    },
    {
      id: 8,
      title: 'Полірування фар',
      text: 'Від прозорості фар залежить ваша безпека на дорозі! Вигорівші, помутнілі, полущені, пошкоджені хімією фари — ці всі проблеми вирішує полірування.',
      price: 'Від 1 000 грн за обидві',
      time: 'Час виконання 2-4 години. ',
    },
    {
      id: 9,
      title: 'Захист фар антигравійною плівкою',
      text: 'Плівка збереже прозорість фар на роки. Гарантія на плівку від виробника 12 років.',
      price: 'Від 2 000 грн',
      time: 'Час на виконання 1-2 години ',
    },
    {
      id: 7,
      title: 'Сушка салонів',
      text: 'Осушуємо сидіння та підлогу спеціалізованим обладнанням.',
      price: 'Залежить від тривалості осушування',
      time: 'Час на виконання від 1 год. до 2 діб',
    },
    {
      id: 7,
      title: 'Detailing мийка',
      text: 'Безпечно та якісно миємо автомобілі. В детейлінг мийку включено: прибирання салону, 2- або 3- фазна мийка кузова, чистка дисків, консервування резини, витирангя вікон від розводів.',
      price: 'Від 400 грн',
      time: '1-2 години ',
    },
    {
      id: 7,
      title: 'Антидощ на вікна',
      text: 'Забезпечить хорошу видимість у вологу погоду. При русі авто 60 км/год і більше краплі води стікають з вікон без використання щіток двірників.',
      price: 'Від 800 грн',
      time: 'Час на  виконання 1-2 години ',
    },
    {
      id: 7,
      title: 'Безпечна мийка двигуна',
      text: 'Двигун якісно очищуємо від мастил, кіптяви та іншого бруду. Після мийки двигун осушуємо спеціалізованим обладнанням. Резинові та пластикові деталі консервуємо.',
      price: 'Від 450 грн',
      time: 'Час на виконання 1-2 години',
    },
    {
      id: 7,
      title: 'Полірування глянцевих деталей салону',
      text: 'Глянцеві елементи часто дуже чутливі до появи подряпин. Повернемо естетичний вигляд даним деталям.',
      price: 'Від 200 грн',
      time: 'Час на виконання 4-8 год',
    },
    {
      id: 7,
      title: 'Кондиціонування шкіри',
      text: 'Обробка шкіри кондиціонером попереджає передчасне старіння шкіри: появу тріщин, протертостей, лущення фарби. Кондиціонер пом‘якшує шкіру, та придає матового ефекту.',
      price: 'Від 800 грн',
      time: 'Час на виконання 1-2 години ',
    },
    {
      id: 7,
      title: 'Озонування салону',
      text: 'Антибактеріальна обробка. Вбиває бактерії, віруси та пори грибів. Нейтралізує запахи в салоні.',
      price: 'Від 200 грн',
      time: 'Час на виконання 30 хвилин ',
    },
    {
      id: 7,
      title: 'Захист шкіри нанокерамікою',
      text: 'Попереджає передчасне старіння. Шкіра не фарбується одягом та легко очищується. Матовий ефект.',
      price: '50$/салон',
      time: 'Час на виконання 2-4 години',
    },
    {
      id: 7,
      title: ' Захист дисків нанокерамікою',
      text: 'Захистить диски від агресивної хімії. Придає дзеркальності. Оброблені диски легко очищаються, гальмівна стружка не в’їдається завдяки властивостям захисного шару.',
      price: '25$/диск',
      time: 'Час на виконання 4-8 годин',
    },
    {
      id: 7,
      title: 'Антихром',
      text: 'Чорний шадовлайн - це крутий варіант придати стилю автомобілю. Хороша альтернатива для маскування пошкодженого хрому. Виконується якісною вініловою плівкою.',
      price: 'Від 1 000 грн',
      time: 'Час на виконання 2-8 годин',
    },
    {
      id: 7,
      title: 'Тонування оптики',
      text: 'Тонування оптики виконується поліуретановою плівкою. Як результат ви отримаєте стильну та захищену від сколів оптику.',
      price: 'Від 2 000 грн',
      time: 'Час на виконання 1-2 години',
    },
    {
      id: 7,
      title: 'Реставрація сколів',
      text: 'Хороша альтернатива фарбування деталі. Сколи маскуються локально фарбою підібраною в колір кузова. ',
      price: 'Від 500 грн',
      time: 'Час на виконання 1-4 години ',
    },
    {
      id: 7,
      title: ' Захист моніторів антигравійною плівкою',
      text: 'В сучасних автомобілях монітори зазвичай великі та дорогі по собівартості. Тому доречно надійно захистити від зовнішнього впливу, і зберегти вигляд нового на десятки років.',
      price: 'Від 500 грн',
      time: 'Час на виконання 1-4 години',
    },
    {
      id: 7,
      title: 'Захист глянцевих елемегтів інтер‘єру антигравійною плівкою ',
      text: 'Захист глянцевих деталей салону дозволить вберегти їх первинний вигляд на роки. Плівка має ефект самозаживлення принагріванні, тому вони постійно будуть виглядати гарно.',
      price: 'Від 800 грн',
      time: 'Час на виконання 2 - 8 год ',
    },
    {
      id: 7,
      title: 'Очистка кузова від бітуму',
      text: 'Несвоєчасне видалення бітуму з кузова може призвестидо появи зародків корозії. Безпечно видалимо бітум з кузова.',
      price: 'Від 300 грн',
      time: 'Час виконання 1-2 год',
    },
    {
      id: 7,
      title: 'Відновлення гарного вигляду зовнішнього пластику',
      text: 'Пластикові деталі екстер‘єру часто втрачають вигляд від впливу середовища. Маємо для відновлення естетики пластику крутий набір автокосметики.',
      price: 'Від 500 грн',
      time: 'Час на виконання 1-2 год',
    },
  ];

  const finalServicesList = createId(ServicesList);
  const onClick = id => {
    id === activeElem ? SetActiveElem(0) : SetActiveElem(id);
  };

  return (
    <motion.section
      className={css.services}
      initial={inital}
      animate={animate}
      transition={transition}
    >
      <Header text="Роботи" location="/works" activeId={2} />
      <div className={css.titleWrap}>
        <h2 className={css.title}>Послуги, які ми надаємо.</h2>
      </div>
      <ul className={css.servicesLsit} >
        {finalServicesList.map(
          ({ title, id, price, text, time, descrPrice, type }, i) => {
            return (
              <motion.li
              
                className={css.servicesItem}
                onClick={() => {
                  console.log('cl');
                  SetActiveElem(id);
                  onClick(id);
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                key={id}
              >
                <div className={css.ItemVisible}>
                  <h4 className={css.ItemVisibleTitle}>{title}</h4>
                  <svg
                    className={
                      activeElem === id ? css.arrowIconOpen : css.arrowIcon
                    }
                  >
                    <use href={`${svg}#icon-arrow`} />
                  </svg>
                </div>
                <div
                  className={
                    activeElem === id ? css.ItemHiddenOpen : css.ItemHidden
                  }
                >
                  <div className={css.hiddenLeft}>
                    <p
                      className={
                        activeElem === id ? css.leftTextActive : css.leftText
                      }
                    >
                      {text}
                    </p>
                  </div>
                  <div className={css.hiddenRight}>
                    <div className={css.details}>
                      <p className={css.detailsPrice}>
                        {price} | {descrPrice && descrPrice} Для консультації
                        телефонуйте по номеру +38(095)014-78-88
                        <svg className={css.priceIcon}>
                          <use href={`${svg}#icon-price`} />
                        </svg>{' '}
                      </p>
                      <p className={css.detailsTime}>
                        {time}
                        <svg className={css.timeIcon}>
                          <use href={`${svg}#icon-time2`} />
                        </svg>{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          }
        )}
      </ul>
    </motion.section>
  );
};
