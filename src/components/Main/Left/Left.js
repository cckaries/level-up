import { useState, useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import cx from 'classnames';

import styles from './Left.module.scss';
import { textActions } from '../../../store/text';

const Left = ({ buttonText, onButtonClick }) => {
  const dispatch = useDispatch();
  const { text } = useSelector(state => state.text);
  // const [{ text }, setState] = useReducer(
  //   (prevState, nextState) => ({ ...prevState, ...nextState }),
  //   {
  //     text: 'here shows what you type',
  //   }
  // );

  useEffect(() => {
    /* 
      1. call the api using PUT method to send the text to firebase db
      2. fetch list items
      3. display list items in <Right />
    */
    fetch('https://level-f5322-default-rtdb.firebaseio.com/text.json', {
      method: 'PUT',
      body: JSON.stringify({
        text,
      }),
    }).then(() =>
      fetch('https://level-f5322-default-rtdb.firebaseio.com/list.json')
        .then(res => res.json())
        .then(resJson => {
          console.log(resJson);
          dispatch(textActions.setSentences(resJson));
        })
    );
  }, [text]);

  return (
    <div className={styles.Left}>
      <div className={styles.Preview}>{text}</div>
      <div className={styles.Input}>
        <textarea
          id="level-up-textarea"
          name="textarea"
          placeholder="type anything here..."
          onInput={e => {
            // setState({ text: e.target.value });
            // dispatch({ type: 'SET_TEXT', payload: e.target.value });
            dispatch(textActions.setText(e.target.value));
          }}
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
