import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { counterActions } from './store/index';

function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className={styles.Container}>
      <button onClick={() => dispatch(counterActions.increment())}>ADD</button>
      <button onClick={() => dispatch(counterActions.decrement())}>
        REDUCE
      </button>
      <div>{count}</div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
