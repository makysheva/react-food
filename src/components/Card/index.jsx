import React from 'react';
import styles from './Card.module.scss';

const Card = ({ item, cardDisabled }) => {
  const [clickedCard, setClickedCard] = React.useState(false);
  const [infoCard, setInfoCard] = React.useState('Чего сидишь? Порадуй котэ, ');
  const [cardSelectedClassName, setCardSelectedClassName] = React.useState('');

  console.log(111, cardDisabled);
  React.useEffect(() => {
    if (!item.isActive) {
      setInfoCard('Печалька, с курой закончился.');
    }
  }, []);

  const handleClickCard = () => {
    if (!item.isActive) {
      return null;
    } else if (clickedCard) {
      setInfoCard('Головы щучьи с чесноком да свежайшая сёмгушка.');
      setClickedCard(!clickedCard);
      setCardSelectedClassName('cardSelected');
    } else {
      setClickedCard(!clickedCard);
      setInfoCard('Чего сидишь? Порадуй котэ, ');
      setCardSelectedClassName('');
    }
  };

  return (
    <div className={styles.box}>
      <div
        className={`${styles.card} ${cardDisabled ? cardDisabled : ''} ${cardSelectedClassName}`}
        onClick={handleClickCard}
        id={item.id}>
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
        <img src="./cat.png" alt="cat" className={styles.catImg} />
        <div className={styles.packing}>
          <span>{item.packing}</span> <span>кг</span>
        </div>
      </div>
      <div className={styles.proposal}>
        {infoCard}
        {clickedCard ? (
          <a href="#" className={styles.buy} onClick={handleClickCard}>
            {' '}
            купи.
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Card;
