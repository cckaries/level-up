import { useEffect, useReducer } from 'react';
// import cx from 'classnames';

import styles from './Main.module.scss';
import Left from './Left/Left';
import Right from './Right/Right';

const Main = props => {
  const [{}, setState] = useReducer(
    (prevState, nextState) => ({ ...prevState, ...nextState }),
    {}
  );

  const onWindowResize = () => {
    setState({
      text: `the window is: ${
        document.querySelector('#container').offsetWidth
      } * ${document.querySelector('#container').offsetHeight}`,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div id="container" className={styles.Container}>
      <Left buttonText="send" onButtonClick={() => {}} />
      <Right />
    </div>
  );
};

export default Main;
