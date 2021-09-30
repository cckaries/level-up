import { useDispatch } from 'react-redux';

import styles from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { counterActions } from './store/index';

function App() {
  const dispatch = useDispatch();

  return (
    <div className={styles.Container}>
      <button onClick={() => dispatch(counterActions.increment())}>ADD</button>
      <button onClick={() => dispatch(counterActions.decrement())}>
        REDUCE
      </button>
      <Header />
      <Main />
    </div>
  );
}

export default App;
