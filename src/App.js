// import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './App.module.scss';
import Header from './components/Header/Header';
import MainPage from './pages/main';
// import DictionaryPage from './pages/dictionary';
import DetailsPage from './pages/details';
import NotFoundPage from './pages/notFound';
// import { counterActions } from './store/counter';

const DictionaryPage = lazy(() => import('./pages/dictionary'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/dictionary" exact>
              <DictionaryPage />
            </Route>
            <Route path="/dictionary/:sentenceId">
              <DetailsPage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
