import { useState, useEffect, useReducer } from 'react';
import cx from 'classnames';

import styles from './Main.module.scss';

const tabsObj = {
  0: 'Suggest',
  1: 'Grammar',
  2: 'Vocabulary',
  3: '94Pro',
};

const sentencesObj = {
  sent1: 'this is sentence 1',
  sent2: 'this is sentence 2',
  sent3: 'this is sentence 33',
  sent5: 'this is sentence 5',
  sent4: 'this is sentence 4',
};

const Main = ({ buttonText, onButtonClick }) => {
  // const [currentTab, setCurrentTab] = useState('0');
  // const [currentSentence, setCurrentSentence] = useState(null);
  const [{ currentTab, currentSentence, text }, setState] = useReducer(
    (prevState, nextState) => ({ ...prevState, ...nextState }),
    {
      currentTab: null,
      currentSentence: null,
      text: 'here shows what you type',
    }
  );

  const onWindowResize = () => {
    setState({
      text: `the window is: ${
        document.querySelector('#container').offsetWidth
      } * ${document.querySelector('#container').offsetHeight}`,
    });
  };

  useEffect(() => {
    setState({ currentTab: '1' });
    window.addEventListener('resize', onWindowResize);

    return () => {
      setState({ currentTab: '2' });
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  useEffect(() => {
    setState({ currentSentence: 'sent3' });
  }, [currentTab]);

  return (
    <div id="container" className={styles.Container}>
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
      <div className={styles.Right}>
        <div className={styles.TabBar}>
          <div className={styles.Tabs}>
            {Object.keys(tabsObj).map(tabKey => (
              <button
                key={tabKey}
                className={cx(tabKey == currentTab && styles.active)}
                onClick={() => {
                  // setCurrentTab(tabKey);
                  setState({ currentTab: tabKey, currentSentence: 'sent2' });
                }}
              >
                {tabsObj[tabKey]}
              </button>
            ))}
          </div>
          <div className={styles.Levels}>levels</div>
        </div>
        <div className={styles.Sentences}>
          {Object.keys(sentencesObj).map(sentenceKey => (
            <div
              key={sentenceKey}
              className={cx(
                styles.Sentence,
                sentenceKey == currentSentence && styles.active
              )}
              onClick={() => {
                // setCurrentSentence(sentenceKey);
                setState({ currentSentence: sentenceKey });
              }}
            >
              {sentencesObj[sentenceKey]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
