import { useState, useEffect, useReducer } from 'react';
import cx from 'classnames';

import styles from './Left.module.scss';

const Left = ({ buttonText, onButtonClick }) => {
  const [{ text }, setState] = useReducer(
    (prevState, nextState) => ({ ...prevState, ...nextState }),
    {
      text: 'here shows what you type',
    }
  );

  return (
    <div className={styles.Left}>
      <div className={styles.Preview}>{text}</div>
      <div className={styles.Input}>
        <textarea
          id="level-up-textarea"
          name="textarea"
          placeholder="type anything here..."
          onInput={e => setState({ text: e.target.value })}
        />
      </div>
      <div className={styles.Buttons}>
        buttons
        <button onClick={() => onButtonClick()}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Left;
