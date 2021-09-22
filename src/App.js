import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styles from './App.module.scss';

function App() {
  const reduxCount = useSelector(state => state.count);

  console.log('reduxCount:', reduxCount);

  return (
    <div className={styles.Container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
