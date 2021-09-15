import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styles from './App.module.scss';

function App() {
  const text = 'abc';

  const sayHello = () => {
    console.log('helllllllllo')
  }

  return (
    <div className={styles.Container}>
      <Header />
      <Main text={text} buttonText={'click me'} onButtonClick={sayHello} />
    </div>
  );
}

export default App;
