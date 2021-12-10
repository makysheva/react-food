import React from 'react';
import styles from './App.module.scss';
import cardStyles from './components/Card/Card.module.scss';
import Card from './components/Card';
import cardList from './data.json';

const App = () => {
  return (
    <div className="App">
      <h2 className={styles.title}>Ты сегодня покормил кота?</h2>
      <div className={styles.wrap}>
        {cardList.cardList.map((item) => {
          return !item.isActive ? (
            <Card item={item} key={item.id} cardDisabled={cardStyles.cardDisabled} />
          ) : (
            <Card item={item} key={item.id} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
