import styles from './App.module.scss';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h2 className={styles.title}>Ты сегодня покормил кота?</h2>
      <div className={styles.wrap}>
        <Card />
      </div>
    </div>
  );
}

export default App;
