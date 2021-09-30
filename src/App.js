import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  const { count: reduxCount, text } = useSelector(state => state);

  return (
    <div className={styles.Container}>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>ADD</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>REDUCE</button>
      <Header />
      <Main />
    </div>
  );
}

export default App;
