import css from './Reviews.module.css';
import { fetchReviews, setReview } from 'api/fetchReviews';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from 'components/Header/Header';
import svg from '../../images/symbol-defs.svg';
export const Reviews = () => {
  const [response, setResponse] = useState({});
  
  const [endIndex, setEndIndex] = useState(10);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');
  const [loader, setLoader] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [endOfReviews, setEndOfReviews] = useState(false);


  useEffect(() => {
  // !endOfReviews&&  
  setLoader(true);
    fetchReviews().then(res => {
      if(res.length===response.length){
        setEndOfReviews(true)
        
      }
      setResponse(
        res.reverse().filter((el, i) => i >= 0 && i < endIndex)
      );
     
     
      setLoader(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endIndex]);
 const successSubmit=()=>{
setIsSuccess(true)
setTimeout(() => {
  setIsSuccess(false)
}, 3000);

 }
  const date = new Date();
  const currentDate = `${
    date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  }.${
    date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
  }.${date.getFullYear()} ${
    date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;

  async function onSubmit(e) {
    e.preventDefault();
    await setReview({
      message,
      name,
      date: currentDate,
      service,
    });
    setLoader(true);
    await fetchReviews().then(res => {
      console.log();
      
      setResponse(
        res.reverse().filter((e, i) => i >= 0 && i < endIndex)
      );
      setLoader(false);
      
    });
    setName('');
    setMessage('');
    setService('');
    successSubmit()
  }

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'message':
        setMessage(value);
        break;
      case 'service':
        setService(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
<Header text='Головна' activeId={5} location='/'/>
      <section className={css.reviews}>
        <h2 className={css.reviewsTitle}>
          Напишіть свій відгук, або дивіться вже існуючі
        </h2>
        <form className={css.reviewsForm} id="reviews-form" onSubmit={onSubmit}>
          <div className={css.inputsWrap}>
            <input
              name="name"
              className={css.reviewsInput}
              required
              placeholder="Ім'я"
              type="text"
              value={name}
              onChange={onChange}
            />
            <input
              name="service"
              className={css.reviewsInput}
              required
              placeholder="Вид робіт"
              type="text"
              value={service}
              onChange={onChange}
            />
          </div>
          <textarea
            className={css.reviewsInputText}
            name="message"
            required
            placeholder="Повідомлення"
            value={message}
            onChange={onChange}
          ></textarea>
          <button className={css.reviewsBtn} style={isSuccess?{backgroundColor: 'green'}:{backgroundColor: '#3c3232'}} type="submit">
            {isSuccess?'Успішно!':"Відправити"}
          </button>
        </form>
        <ul className={css.reviewsList}>
          {response &&
            response.length > 0 &&
            response.map(({ id, name, service, message, date }, i) => {
              // console.log(i,response.length );
              if((i)===response.length){
                setEndOfReviews(true)
              }
              return (
                <motion.li
                  key={id}
                  className={css.reviewsItem}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i > 9 ? 0.3 : i * 0.2 }}
                >
                  <svg className={css.reviewsIcon}>
                    <use href={`${svg}#icon-avatar2`} />
                  </svg>
                  <div className={css.reviewsItemWrap}>
                    <h5 className={css.reviewsName}>{name}</h5>
                    <p className={css.reviewsDate}>{date}</p>
                    <p className={css.reviewsService}>{service}</p>
                  </div>
                  <p className={css.reviewsMessage}>{message}</p>
                </motion.li>
              );
            })}
        </ul>
        <button
          className={css.moreBtn}
          onClick={() => {
           if(endOfReviews){
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
            return
           }
            setEndIndex(endIndex + 10);
          }}
        >
         {endOfReviews?'Це всі відгуки ↑':'більше відгуків...'} 
        </button>
        {loader && (
          <svg className={css.loader}>
            <use href={`${svg}#icon-loader`} />
          </svg>
        )}
      </section>
    </>
  );
};
