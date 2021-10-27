import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFound = props => {
  const history = useHistory();
  const [timerSec, setTimerSec] = useState(5);

  const redirectPage = () => {
    history.push('/');
  };

  useEffect(() => {
    if (!timerSec) return redirectPage();

    const redirectInterval =
      !!timerSec &&
      setInterval(() => {
        setTimerSec(timerSec - 1);
      }, 1000);

    return () => clearInterval(redirectInterval);
  }, [timerSec]);

  return (
    <div id="details-container" className={styles.Container}>
      <h1>Not Found</h1>
      <div>will redirect to main page in {timerSec} secs.</div>
    </div>
  );
};

export default NotFound;
