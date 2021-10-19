// import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import styles from './App.module.scss';
import Header from './components/Header/Header';
import MainPage from './pages/main';
import DictionaryPage from './pages/dictionary';
// import { counterActions } from './store/counter';

function App() {
  // const count = useSelector(state => state.counter.count);
  // const dispatch = useDispatch();

  return (
    <div className={styles.Container}>
      {/* <button onClick={() => dispatch(counterActions.increment())}>ADD</button>
      <button onClick={() => dispatch(counterActions.decrement())}>
        REDUCE
      </button>
      <div>{count}</div> */}
      <Header />
      <main>
        <Route path="/main">
          <MainPage />
        </Route>
        <Route path="/dictionary">
          <DictionaryPage />
        </Route>
      </main>
    </div>
  );
}

export default App;
