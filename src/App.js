import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  const reduxCount = useSelector(state => state.count);

  console.log('reduxCount:', reduxCount);

  return (
    <div className={styles.Container}>
      <button onClick={() => dispatch({ type: 'increment' })}>ADD</button>
      <Header />
      <Main />
    </div>
  );
}

export default App;
