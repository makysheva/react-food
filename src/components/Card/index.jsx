import React from 'react';
import styles from './Card.module.scss';

const Card = () => {
  const [state, setState] = React.useState();

  const handleClickCard = () => {
    console.log(`id ${this.id}`);
  };

  const cardList = [
    {
      id: 1,
      slogan: 'Сказочное заморское яство',
      name: 'Нямушка',
      productView: 'с фуа-гра',
      portionCount: 10,
      gift: 'мышь в подарок',
      isSatisfied: false,
      packing: '0,5',
    },
    {
      id: 2,
      slogan: 'Сказочное заморское яство',
      name: 'Нямушка',
      productView: 'с рыбой',
      portionCount: 40,
      gift: '2 мыши в подарок',
      isSatisfied: false,
      packing: 2,
    },
    {
      id: 3,
      slogan: 'Сказочное заморское яство',
      name: 'Нямушка',
      productView: 'с курой',
      portionCount: 100,
      gift: '5 мышей в подарок',
      isSatisfied: true,
      packing: 5,
    },
  ];

  return (
    <>
      {cardList.map((item) => {
        return (
          <>
            <div className={styles.box} key={item.id}>
              <div className={styles.card} onClick={handleClickCard} id={item.id}>
                <div className={styles.cardContent}>
                  <p className={styles.slogan}>{item.slogan}</p>
                  <h2 className={styles.name}>{item.name}</h2>
                  <h3 className={styles.productView}>{item.productView}</h3>
                  <p className={styles.portionCount}>
                    {item.portionCount} <span className={styles.portion}>порций</span>
                  </p>
                  <p className={styles.gift}>{item.gift}</p>
                  {item.isSatisfied && <p className={styles.isSatisfied}>заказчик доволен</p>}
                </div>
                <div className={styles.packing}>
                  <span>{item.packing}</span> <span>кг</span>
                </div>
              </div>
              <div className={styles.proposal}>
                Чего сидишь? Порадуй котэ,{' '}
                <a href="/" className={styles.buy}>
                  купи.
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
